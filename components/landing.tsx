import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

export default function Landing() {
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        mt-10 mb-28
        h-96 py-24 
        w-11/12 mx-auto 
        flex flex-row 
        items-center justify-center 
        font-silkscreen text-center 
        md:mt-10 md:items-start md:text-left"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl text-white">
          Hi
          <motion.div
            className="w-fit inline-block"
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 2 }}
          >
            👋🏽
          </motion.div>
        </h1>
        <Image src={"/sanan1.jpg"} className='mx-auto rounded-full mt-4 md:hidden' alt="Portrait" width={200} height={200} />
        <h2 className="text-4xl md:text-5xl text-white mt-4">
          I&apos;m <span className='underline'>Sanan Maarouf</span>
        </h2>
        <h3 className="text-2xl md:text-3xl text-gray-300 mt-2">
          Developer based in <br/> Oslo, Norway
        </h3>
      </motion.div>
			<Image src={"/sanan1.jpg"} className='hidden md:block rounded-full ml-6' alt="Portrait" width={200} height={200} />
    </motion.section>
  );
}