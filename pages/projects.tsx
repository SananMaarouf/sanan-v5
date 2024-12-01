import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { form } from 'motion/react-m';

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

    const projects = [
        {
            title: 'Applitrack',
            description: "Job application tracker",
            image: '/projects/applitrack.webp',
            url: '/projects/applitrack'
        },
        {
            title: 'PartnerSOS',
            description: "Violence alarm via SMS",
            image: '/projects/psos.webp',
            url: '/projects/partnersos'
        },
        {
            title: 'SanPlan',
            description: "Todo list app",
            image: '/projects/sanplan.webp',
            url: '/projects/sanplan'
        },
        {
            title: 'Sarazamecznik.com',
            description: "Client portfolio page",
            image: '/projects/zamec.webp',
            url: '/projects/sara'
        },
        {
            title: 'Insultifier',
            description: "Insultifies text",
            image: '/projects/insultifier.webp',
            url: '/projects/insultifier'
        },
        {
            title: 'Greentalk',
            description: "Forum for environmentalists",
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
                    w-4/5
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
                                h-72 
                                bg-orange-600 hover:bg-white
                                text-white hover:text-orange-600
                                pb-3 z-50
                                w-full 
                                mx-auto 
                                flex-col 
                                md:w-full
                                rounded-lg 
                                overflow-hidden 
                                border
                                border-white 
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
                            <div className='h-1/4 px-4 z-50'>
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