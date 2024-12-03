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


export default function Applitrack() {
    const { t } = useTranslation();
    return (
        <section className="px-5 md:px-0">
            {/* heading and image gallery */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                w-full h-1/2
                mx-auto my-5 
                flex flex-col 
                border-white
                overflow-hidden 
                rounded-2xl 
                border border-transparent
                bg-transparent 
                md:w-3/5 lg:w-1/2
                "
            >
                <div className="w-full font-bold justify-center bg-white text-deco py-2 flex flex-col px-4 pb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        Applitrack.no
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                        {t("applitrack.description")}
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                    {t("applitrack.date")}
                    </p>
                </div>

                <Image
                    src={"/images/applitrack/applitrack-dashboard.webp"}
                    alt={"applitrack"}
                    width={1000}
                    height={800}
                    className="w-full"
                />

            </motion.div>
            {/* content, story about the app */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl"
            >
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("applitrack.story")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <h2 className="">Tech stack:</h2>
                    <ul className="">
                        <li>NextJS </li>
                        <li>TailwindCSS</li>
                        <li>PocketBase</li>
                        <li>Vercel</li>
                    </ul>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("applitrack.nextJsExperience")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("applitrack.pocketbase")}
                    </p>
                </section>
            </motion.div>
        </section>
    );
}