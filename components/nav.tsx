import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';

const menuVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="flex h-20 mb-2 bg-transparent border-2 rounded-b-2xl px-4 text-white items-center w-11/12 mx-auto"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* link with cool font */}
      <motion.section whileHover={{scale: 1.1, rotate:-10}}>
				<Link href='/' className='text-5xl font-silkscreen'>SM </Link>
			</motion.section>

      {/* mobile navbar */}
      <div className="flex justify-end w-full md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none z-50">
          <img src={isOpen ? "/close.svg" : "/menu.svg"} alt="Menu Icon" className="w-10 h-10" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <section>
              <div onClick={toggleMenu} className='fixed z-30 top-0 left-0 w-1/4 h-full'></div>
              <motion.section
                key={"menu"}
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={menuVariants}
                transition={{ type: 'tween', duration: 0.5 }}
                className='rounded-l-3xl fixed z-40 top-0 right-0 w-3/4 h-full bg-black border text-white'
              >
                <section className='flex flex-col space-y-10 p-10 mt-10 text-3xl font-silkscreen'>
                  <motion.div variants={itemVariants}>
                    <Link onClick={toggleMenu} href="/about" className='hover:underline underline-offset-2'>
                      About
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link onClick={toggleMenu} href="/projects" className='hover:underline underline-offset-2'>
                      Projects
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link onClick={toggleMenu} href="/contact" className='hover:underline underline-offset-2'>
                      Contact
                    </Link>
                  </motion.div>
                </section>
              </motion.section>
            </section>
          )}
        </AnimatePresence>
      </div>

      {/* desktop navbar */}
      <ul className="hidden justify-end w-full md:flex font-silkscreen">
        <motion.li whileHover={{scale:1.1}} className="mx-4 hover:underline underline-offset-4">
          <Link href="/about">About </Link>
        </motion.li>
        <motion.li whileHover={{scale:1.1}} className="mx-4 hover:underline underline-offset-4">
          <Link href="/projects">Projects</Link>
					</motion.li>
					<motion.li whileHover={{scale:1.1}} className="mx-4 hover:underline underline-offset-4">
          <Link href="/contact">Contact</Link>
					</motion.li>
      </ul>
    </motion.nav>
  );
}