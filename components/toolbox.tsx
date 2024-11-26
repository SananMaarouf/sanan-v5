import React from "react";
import { motion } from "motion/react";

export default function Toolbox() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        rounded-xl mx-auto  
        flex flex-col items-center 
        font-silkscreen p-4 w-3/4
        my-10
        md:items-start
        " 
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
        <h2 className="text-3xl mb-2 md:text-4xl">Technologies i know and love</h2>
        <div className="text-2xl md:text-3xl flex flex-col text-start gap-4">
          <div >
            <h3 className="underline decoration-2">Backend:</h3>
            <p>Ruby on Rails, TypeScript, Kotlin, Python, Dart, Firebase, Supabase, Pocketbase</p>
          </div>
          <div>
            <h3 className="underline decoration-2">Frontend:</h3>
            <p>TypeScript, React, TailwindCSS, Framer Motion</p>
          </div>
          <div>
            <h3 className="underline decoration-2">Databases:</h3>
            <p>MySQL, NoSql</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}