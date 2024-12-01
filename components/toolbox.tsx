import React from "react";
import { motion } from "motion/react";

export default function Toolbox() {
  // Arrays containing the technologies for backend, frontend, and databases
  const backend = [
    { src: "/technologies/rails.webp", alt: "Ruby on Rails", title: "Ruby on Rails" },
    { src: "/technologies/node.webp", alt: "Nodejs", title: "Nodejs" },
    { src: "/technologies/python.webp", alt: "Python", title: "Python" },
    { src: "/technologies/dart.webp", alt: "Dart", title: "Dart" },
    { src: "/technologies/kotlin.webp", alt: "Kotlin", title: "Kotlin" },
    { src: "/technologies/firebase.webp", alt: "Firebase", title: "Firebase" },
    { src: "/technologies/supabase.webp", alt: "Supabase", title: "Supabase" },
    { src: "/technologies/pocketbase.webp", alt: "Pocketbase", title: "Pocketbase" },
  ];

  const frontend = [
    { src: "/technologies/typescript.webp", alt: "TypeScript", title: "TypeScript" },
    { src: "/technologies/react.webp", alt: "React", title: "React" },
    { src: "/technologies/tailwind.webp", alt: "TailwindCSS", title: "TailwindCSS" },
    { src: "/technologies/motion.webp", alt: "Motion", title: "Motion" },
    { src: "/technologies/next.svg", alt: "NextJS", title: "Next.Js" },
    { src: "/technologies/vue.webp", alt: "VueJS", title: "Vue.Js" },
  ];

  const databases = [
    { src: "/technologies/mysql.webp", alt: "MySQL", title: "MySQL" },
    { src: "/technologies/postgres.webp", alt: "PostgreSQL", title: "PostgreSQL" },
    { src: "/technologies/firebase.webp", alt: "Firebase Firestore", title: "Firestore" },
    { src: "/technologies/sqlite.webp", alt: "SQLite", title: "SQLite" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        rounded-xl mx-auto md:mx-20  
        flex flex-col items-center 
        font-silkscreen flex-wrap 
        my-10 md:items-start ml-2
        "
    >
      {/* Container for the entire section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-full"
      >
        {/* Section title */}
        <h2 className="text-3xl mb-2 md:text-4xl">Technologies I Know and Love</h2>

        {/* Container for the technology categories */}
        <div className="text-xl md:text-2xl flex flex-col gap-4">

          {/* Backend technologies section */}
          <div>
            <h3 className="underline decoration-2 mb-2">Backend:</h3>
            <div className="
              p-2  
              flex flex-wrap  
              gap-2 
              text-xs md:text-sm
            ">
              {/* Mapping over backend technologies to create individual cards */}
              {backend.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className="
                    md:mx-1 
                    flex flex-col 
                    rounded-2xl p-2 font-semibold text-center
                    items-center justify-center 
                    border-2 border-white  
                    bg-neutral-100 hover:bg-orange-600  
                    text-orange-600 hover:text-white 
                    transition duration-75 hover:duration-150 ease-linear
                    w-24 h-24
                    md:w-28 md:h-28 
                  ">
                  <img src={tech.src} alt={tech.alt} className="w-10 h-10 md:w-12 md:h-12" />
                  <p>{tech.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frontend technologies section */}
          <div>
            <h3 className="underline decoration-2 mb-2">Frontend:</h3>
            <div className="
              p-2  
              flex flex-wrap  
              gap-2
              text-xs md:text-sm
            ">
              {/* Mapping over frontend technologies to create individual cards */}
              {frontend.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="
                   md:mx-1 
                    flex flex-col 
                    rounded-2xl p-2 font-bold
                    items-center justify-center 
                    border-2 border-white  
                    bg-white hover:bg-orange-600  
                    text-orange-600 hover:text-white 
                    transition duration-75 hover:duration-150 ease-linear 
                    w-24 h-24
                    md:w-28 md:h-24 
                  ">
                  <img src={tech.src} alt={tech.alt} className="w-12 h-12" />
                  <p>{tech.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Databases section */}
          <div>
            <h3 className="underline decoration-2 mb-2">Databases:</h3>
            <div className="
              p-2  
              flex flex-wrap  
              gap-2 
              text-xs md:text-sm
            ">
              {/* Mapping over database technologies to create individual cards */}
              {databases.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className="
                    md:mx-1 
                    flex flex-col 
                    rounded-2xl font-bold
                    items-center justify-center 
                    border-2 border-white  
                    bg-white hover:bg-orange-600  
                    text-orange-600 hover:text-white
                    transition duration-75 hover:duration-150 ease-linear 
                    w-28 h-28
                    md:w-28 md:h-28 
                  ">
                  <img src={tech.src} alt={tech.alt} className="w-12 h-12" />
                  <p>{tech.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}