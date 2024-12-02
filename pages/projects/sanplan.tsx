import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}


const images = [
    {
        title: 'Screenshot of the app',
        image: '/images/sanplan/index-1.webp',
    },

];
export default function Sanplan() {
    const { t } = useTranslation();
    return (
        <section className="px-5 md:px-0">
            {/* heading and image gallery */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                mx-auto
                my-5 
                flex 
                flex-col-reverse 
                border-white
                w-full
                overflow-hidden 
                rounded-2xl 
                border 
                border-transparent
                bg-transparent 
                md:w-3/5 
                md:flex-row
                lg:w-1/2
                relative
                "
            >
                <div className="absolute md:relative bg-orange-600 md:bg-transparent md:my-auto justify-end h-2/6 w-full flex flex-col px-4 py-6 z-10 bg-background ">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">
                        SanPlan
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl text-white">
                        {t("sanplan.description")}
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl text-white">
                        {t("sanplan.date")}
                    </p>
                </div>
                <div className="flex max-h-96 md:justify-end md:w-2/5 lg:w-1/2 overflow-clip">
                    <Image
                        src={images[0].image}
                        alt={images[0].title}
                        width={800}
                        height={1000}
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </motion.div>
            {/* content, story about the app */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("sanplan.intro")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p className="">
                        {t("sanplan.story")}
                    </p>
                </section>
                                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                  <p className="">
                    {t("sanplan.github")}
                    <a
                      className="ml-1 text-lg underline"
                      href="https://github.com/SananMaarouf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </p>
                </section>
            </motion.div>
        </section>
    );
}