import Landing from "../components/landing";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col ">
      {/* landing section */}
      <Landing/>      
    </motion.main>
  );
}
