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



export default function Greentalk() {
    const {t} = useTranslation();
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
                flex-col 
                border-white
                w-full
                h-1/2
                overflow-hidden 
                rounded-2xl 
                border 
                border-transparent
                bg-transparent 
                md:w-3/5 
                lg:w-1/2
                "
            >
                <div className="w-full justify-center bg-white text-orange-600 py-2 flex flex-col px-4 pb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        Greentalk
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                        {t("greentalk.description")}
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                        {t("greentalk.date")}
                    </p>
                </div>

                <Image
                    src={"/images/greentalk/greentalk.webp"}
                    alt={"spongebob"}
                    width={1000}
                    height={800}
                    className="w-full "
                />
            </motion.div>
            {/* content, story about the app */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("greentalk.intro")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("greentalk.group")}
                    </p>
                    <ul>
                        <li>{t("greentalk.me")}</li>
                        <li>Stian Flatset</li>
                        <li>Sigve Eilertsen</li>
                        <li>Erlend Hollund</li>
                        <li>Hanna Singueo</li>
                        <li>Mikkel Mohaugen</li>
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}