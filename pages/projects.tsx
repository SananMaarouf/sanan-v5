import React from "react";
import { motion, AnimatePresence, useAnimate, Variants, useInView } from "motion/react";
import { Card } from "@/components/ui/card";


export default function Projects(){
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col ">
      <AnimatePresence>
        <Card/>
      </AnimatePresence>
    </motion.main>
  );

}