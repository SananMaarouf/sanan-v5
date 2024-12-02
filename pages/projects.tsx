import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            
        }
    }
};

const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function Projects() {
    const { t } = useTranslation();


    const projects = [
        {
            title: 'Applitrack',
            description: t("applitrack.description"),
            image: '/projects/applitrack.webp',
            url: '/projects/applitrack'
        },
        {
            title: 'PartnerSOS',
            description: t("partnersos.description"),
            image: '/projects/psos.webp',
            url: '/projects/partnersos'
        },
        {
            title: 'SanPlan',
            description: t("sanplan.description"),
            image: '/projects/sanplan.webp',
            url: '/projects/sanplan'
        },
        {
            title: t("sara.cardTitle"),
            description: t("sara.card"),
            image: '/projects/zamec.webp',
            url: '/projects/sara'
        },
        {
            title: 'Insultifier',
            description: t("insultifier.description"),
            image: '/projects/insultifier.webp',
            url: '/projects/insultifier'
        },
        {
            title: 'Greentalk',
            description: t("greentalk.description"),
            image: '/projects/greentalk.webp',
            url: '/projects/greentalk'
        },
    ];

    return (
        <section className=''>
            {/* projects grid */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                
                className="
                    w-11/12
                    lg:w-3/4 
                    py-6 
                    mx-auto 
                    grid 
                    grid-cols-1 
                    gap-x-5 
                    gap-y-4 
                    md:grid-cols-3 
                    lg:gap-x-4 
                    lg:gap-y-4
                    font-silkscreen
                    ">
                {/* projects cards. programmatically created by mapping over them */}
                {projects.map((project, index) => (
                    <Link key={index} href={project.url}>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.1 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            variants={itemVariants}
                            transition={{ duration: 0.4 }}
                            className='
                                gap-1 
                                flex 
                                h-80 
                                bg-orange-600 hover:bg-white
                                text-white hover:text-orange-600
                                pb-10 z-50
                                w-full 
                                mx-auto 
                                flex-col 
                                md:w-full
                                rounded-lg 
                                overflow-hidden 
                                border
                                border-white
                                max-w-md 
                                '>
                            <div className='w-full h-3/4 relative overflow-clip'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={800}
                                    className="rounded-t-lg object-fill"
                                />
                            </div>
                            <div className='h-1/3 px-4 z-50'>
                                <h2 className='text-xl font-semibold'>{project.title}</h2>
                                <p className='text-md'>{project.description}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.section>
        </section>
    );
}