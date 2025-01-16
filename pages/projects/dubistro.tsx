import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { ExternalLink } from "lucide-react";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default function Dubistro() {
  const technologies = [
    { name: "Next.js", url: "https://nextjs.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Sanity CMS", url: "https://www.sanity.io/" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    { name: "Motion", url: "https://motion.dev/" }
  ];
  const { t } = useTranslation();

  return (
    <section className="px-5 mb-10">
      {/* heading and image gallery */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
        mx-auto my-5 
        flex flex-col w-full
        h-1/2 overflow-hidden 
        rounded-2xl bg-transparent 
        md:w-3/4 lg:w-1/2
        "
      >
        <div className="
          w-full justify-center 
          font-bold bg-white 
          text-deco py-2 
          flex flex-col 
          px-4 pb-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Dubistro
          </h1>
          <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
            {t("dubistro.description")}
          </p>
          <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
            {t("dubistro.date")}
          </p>
        </div>

        <Image
          src={"/projects/dubistro.png"}
          alt={"dubistro"}
          width={1000}
          height={1000}
          className="mx-auto"
        />
      </motion.div>
      {/* main content */}
      <div className="lg:w-1/2 mx-auto flex flex-col gap-4">
        <p className="text-lg font-chakra font-bold">
          {t("dubistro.intro")}
        </p>
        <p className="text-lg font-chakra font-bold">
          {t("dubistro.intro2")}
        </p>
        <p className="text-lg font-chakra font-bold">
          {t("dubistro.criteria")}
        </p>
        <p className="text-lg font-chakra font-bold">
          {t("dubistro.criteria2")}
        </p>
        <div>
          <h3 className="text-2xl font-chakra font-bold underline">
            Tech stack
          </h3>
          <ul className="ml-2 w-full list-inside flex gap-6 flex-wrap">
            {technologies.map((tech, index) => (
              <li key={index} className="text-lg font-chakra">
                <div className="flex flex-row">
                  <a href={tech.url} target="_blank" rel="noopener noreferrer" className="hover:underline items-center group">
                    {tech.name}
                    <ExternalLink className="ml-1 h-4 w-4 inline-block" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}