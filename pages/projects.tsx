import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Frilans arbeid',
      description: t('dubistro.description'),
      image: '/projects/dubistro.png',
      url: '/projects/dubistro',
    },
    {
      title: 'Applitrack',
      description: t('applitrack.description'),
      image: '/projects/applitrack.webp',
      url: '/projects/applitrack',
    },
    {
      title: 'PartnerSOS',
      description: t('partnersos.description'),
      image: '/projects/psos.webp',
      url: '/projects/partnersos',
    },
    {
      title: 'SanPlan',
      description: t('sanplan.description'),
      image: '/projects/sanplan.webp',
      url: '/projects/sanplan',
    },
    {
      title: t('sara.cardTitle'),
      description: t('sara.card'),
      image: '/projects/zamec.webp',
      url: '/projects/sara',
    },
    {
      title: 'Insultifier',
      description: t('insultifier.description'),
      image: '/projects/insultifier.webp',
      url: '/projects/insultifier',
    },
    {
      title: 'Greentalk',
      description: t('greentalk.description'),
      image: '/projects/greentalk.webp',
      url: '/projects/greentalk',
    },
  ];

  return (
    <section>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          w-11/12 lg:w-3/4 mx-auto py-6
          grid grid-cols-1 md:grid-cols-3 
          gap-6
          items-center justify-items-center
          font-silkscreen
        "
      >
        {projects.map((project, index) => (
          <Link key={index} href={project.url}>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              transition={{ duration: 0.4 }}
              className="
                w-96
                h-80
                bg-white hover:bg-deco
								transform transition duration-100 ease-linear
                text-deco hover:text-foreground
                flex flex-col
                rounded-lg
                overflow-hidden
                relative
              "
            >
              <div className="p-4 flex-grow">
                <h2 className="text-2xl">{project.title}</h2>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="rounded-xl object-cover h-40 w-full mt-2"
                />
                <p className="text-xl mt-2">{project.description}</p>
              </div>
              <div className="py-2 pl-4 hover:underline decoration-2 absolute bottom-0 left-0 w-full">
                {t('projects.viewProject')}
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.section>
    </section>
  );
}