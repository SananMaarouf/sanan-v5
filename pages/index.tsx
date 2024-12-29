import Landing from "../components/landing";
import ProjectsCarousel from "../components/projectsCarousel";
import Toolbox from "@/components/toolbox";
import { motion } from "motion/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-full md:w-10/12 mx-auto"
    >
      {/* Landing */}
      <Landing />
      {/* Projects */}
      <div id="projects">
        <ProjectsCarousel />
      </div>
      {/* Technologies */}
      <Toolbox />
    </motion.main>
  );
}