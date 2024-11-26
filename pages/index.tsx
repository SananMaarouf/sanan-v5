import Landing from "../components/landing";
import Projects from "../components/projects";
import Toolbox from "@/components/toolbox";
import { motion } from "framer-motion";
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
      <Projects/>
      {/* Technologies */}
      <Toolbox/>
    </motion.main>
  );
}
