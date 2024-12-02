import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslation } from 'next-i18next';


const menuVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const locale = i18n.language;
  const cvUrl = locale === 'nb' ? '/files/cv_nb.pdf' : '/files/cv_en.pdf';

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
    setDropdownOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="flex h-20 mb-2 bg-transparent px-4 text-white items-center w-11/12 mx-auto"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, once: true }}
    >
      {/* link with cool font */}
      <motion.section whileHover={{ scale: 1.1, rotate: -10, style: { color: "" } }}>
        <Link href='/' className='text-5xl font-silkscreen hover:text-orange-500'>SM </Link>
      </motion.section>

      {/* mobile navbar */}
      <div className="flex justify-end w-full md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none z-50">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className='w-10 h-10 text-white hover:text-orange-600'>
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className='w-10 h-10 text-white hover:text-orange-600'>
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          )}        </button>
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
                transition={{ type: 'tween', duration: 0.3 }}
                className='rounded-l-3xl fixed z-40 top-0 right-0 w-3/4 h-full bg-black border text-white'
              >
                <section className='flex flex-col space-y-10 py-10 px-4 mt-10 text-2xl font-silkscreen'>
                  <motion.div variants={itemVariants}>
                    <a download onClick={toggleMenu} href={cvUrl} className='hover:underline underline-offset-2 flex items-center space-x-2 hover:text-orange-600'>
                      <span>{t("nav.resume")}</span>
                      {/* download svg icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                    </a>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link onClick={toggleMenu} href="/projects" className='hover:underline underline-offset-2 hover:text-orange-600'>
                      {t("nav.projects")}
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Dialog>
                      <DialogTrigger className='font-silkscreen hover:text-orange-600 hover:underline underline-offset-2'>{t("nav.contact")}</DialogTrigger>
                      <DialogContent className='font-silkscreen'>
                        <DialogHeader>
                          <DialogTitle>{t("nav.platforms")} </DialogTitle>
                          <DialogDescription className='flex gap-4'>
                            <Link
                              href="https://www.linkedin.com/in/sanan-maarouf/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className='border-2 rounded-md p-4 bg-orange-600 font-bold hover:underline hover:decoration-2'>
                              LinkedIn
                            </Link>
                            <Link
                              href="https://github.com/SananMaarouf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className='border-2 rounded-md p-4 bg-orange-600 font-bold hover:underline hover:decoration-2'>
                              Github
                            </Link>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </motion.div>

                  {/* language switcher */}
                  <motion.div variants={itemVariants} className='content-center w-full rounded-md'>
                    <div className='
                      flex flex-row
                      justify-between items-center
                      py-1 border-2 
                      border-white 
                      hover:border-2 hover:border-orange-600 
                      rounded-md' 
                      onClick={toggleDropdown}>
                      <span className='text-white font-silkscreen px-2'>
                        {i18n.language === 'nb' ? 'Norsk 🇳🇴' : 'English 🇬🇧'}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" 
                        className="my-auto mr-2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    {dropdownOpen && (
                      <div className='mt-2 w-4/5 rounded-md border-2 absolute bg-black z-50 border-red-500'>
                        <button onClick={() => switchLanguage('nb')} className='text-left w-full py-2 px-2 flex justify-between items-center hover:bg-orange-600 hover:text-white'>
                          Norsk 🇳🇴
                          {i18n.language === 'nb'}
                        </button>
                        <button onClick={() => switchLanguage('en')} className='text-left w-full py-2 px-2 flex justify-between items-center hover:bg-orange-600 hover:text-white'>
                          English 🇬🇧
                          {i18n.language === 'en'}
                        </button>
                      </div>
                    )}
                  </motion.div>
                </section>
              </motion.section>
            </section>
          )}
        </AnimatePresence>
      </div>

      {/* desktop navbar */}
      <ul className="hidden justify-end w-full md:flex font-silkscreen">
        <motion.li whileHover={{ scale: 1.1 }} className="mx-4 hover:underline underline-offset-4">
          <a download href={cvUrl} className=' flex items-center space-x-2 hover:text-orange-400 '>
            <span>{t("nav.resume")}</span>
            {/* download svg icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="mx-4 hover:underline hover:text-orange-400 underline-offset-4">
          <Link href="/projects">{t("nav.projects")}</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="mx-4 hover:underline underline-offset-4">
          <Dialog>
            <DialogTrigger className='hover:text-orange-500'>{t("nav.contact")}</DialogTrigger>
            <DialogContent className='font-silkscreen'>
              <DialogHeader>
                <DialogTitle className=''>{t("nav.platforms")}</DialogTitle>
                <DialogDescription className='flex flex-col md:flex-row gap-4'>
                  <Link
                    href="https://www.linkedin.com/in/sanan-maarouf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-xl font-bold border-2 rounded-md p-3 bg-orange-700 hover:bg-orange-600  '>
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/SananMaarouf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-xl font-bold border-2 rounded-md p-3 bg-orange-700 hover:bg-orange-600'>
                    Github
                  </Link>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </motion.li>
        <motion.li>
          {/* language switcher desktop */}
          <motion.div variants={itemVariants}>
            <div className='py-0.5 px-2 border-2 border-white hover:text-orange-600 hover:border-orange-600 rounded-md' onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                className=''>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            {dropdownOpen && (
              <div className='mt-2 w-32 rounded-md border-2 absolute right-16 z-50 bg-white text-orange-600'>
                <button onClick={() => switchLanguage('nb')} className='text-left w-full py-2 px-2 rounded-md flex justify-between items-center hover:bg-orange-600 hover:text-white'>
                  Norsk 🇳🇴
                  {i18n.language === 'nb'}
                </button>
                <button onClick={() => switchLanguage('en')} className='text-left w-full py-2 px-2 rounded-md flex justify-between items-center hover:bg-orange-600 hover:text-white'>
                  English 🇬🇧
                  {i18n.language === 'en'}
                </button>
              </div>
            )}
          </motion.div>
        </motion.li>
      </ul>
    </motion.nav>
  );
}