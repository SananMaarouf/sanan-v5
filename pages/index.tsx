import Landing from "../components/landing";
import ProjectsCarousel from "../components/projectsCarousel";
import Toolbox from "@/components/toolbox";
import { motion } from "motion/react";
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col ">
      {/* Landing */}
      <Landing/>    
      {/* Projects */}  
      <ProjectsCarousel/>
      {/* Technologies */}
      <Toolbox/>
    </motion.main>
  );
}
