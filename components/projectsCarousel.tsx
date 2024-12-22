import React, { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const arrowMotion = {
  rest: {
    x: 0,
    transition: { duration: 0.1 },
  },
  hover: {
    x: 10,
    transition: { duration: 0.2 },
  },
};

const textMotion = {
  rest: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.1 },
    tap: { scale: 0.9 },
  },
};

export default function ProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const projects = [
    { url: "/projects/dubistro", src: "/projects/dubistro.png", alt: "Dubistro", title: "O1", description: "Dubistro" },
    { url: "/projects/applitrack", src: "/projects/applitrack.webp", alt: "Applitrack", title: "O2", description: "Applitrack" },
    { url: "/projects/partnersos", src: "/projects/psos.webp", alt: "Partner SOS", title: "O3", description: "Partner-SOS" },
  ];

  return (
    <AnimatePresence>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay:0.6, duration: 1 }}
        className="
        my-10 
        md:mx-auto font-silkscreen 
        relative w-full xl:w-10/12
        "
      >
        <h1 className="text-3xl mb-2">{t("projects.title")}</h1>
        <motion.p animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: 10, duration: 2 }} className="block xl:hidden absolute right-2 top-2">
          swipe ➡️
        </motion.p>
        <motion.p animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: 10, duration: 2 }} className="hidden xl:block absolute right-2 top-2">
          scroll ➡️
        </motion.p>
        {/* Simple horizontal slider */}
        <div className="
          overflow-x-scroll flex 
          gap-6 py-4
          ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="shrink-0 w-72 h-80 bg-white rounded-xl transition duration-300 ease-linear hover:bg-deco text-deco"
            >
              <Link
                href={project.url}
                className="hover:text-white w-full h-full flex flex-col"
              >
                <div className="p-4 flex-grow">
                  <h2 className="text-2xl">{project.title}</h2>
                  <p className="text-2xl">{project.description}</p>
                  <Image src={project.src} alt={project.alt} width={300} height={300} className="rounded-xl object-cover h-44"/>               
                </div>
                <div className="py-2 pl-4 hover:underline decoration-2">
                  {t("projects.viewProject")}
                </div>
              </Link>
            </motion.div>
          ))}

          {/* "See All" link */}
          <motion.div
            initial="rest" whileHover="hover" whileTap="tap" animate="rest"
            className="
              shrink-0 w-72 h-80 
              bg-white rounded-xl 
              transition duration-300 
              ease-linear hover:bg-deco 
              text-deco hover:text-white"
          >
            <Link href="/projects" className="flex justify-center items-center h-full group">
              <motion.h1 variants={textMotion} className="text-2xl group-hover:underline decoration-2">
                {t("projects.seeAll")}
              </motion.h1>
              <motion.span variants={arrowMotion} className="focus:outline-none z-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                  className="text-orange group-hover:white w-10 h-10"
                >
                  <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}