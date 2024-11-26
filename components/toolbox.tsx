import React from "react";
import { motion } from "motion/react";


export default function Toolbox() {
  const backend = [
    { src: "/technologies/rails.png", alt: "Ruby on Rails", title: "Ruby on Rails" },
    { src: "/technologies/node.png", alt: "Nodejs", title: "Nodejs" },
    { src: "/technologies/python.png", alt: "Python", title: "Python" },
    { src: "/technologies/dart.png", alt: "Dart", title: "Dart" },
    { src: "/technologies/kotlin.png", alt: "Kotlin", title: "Kotlin" },
    { src: "/technologies/firebase.png", alt: "Firebase", title: "Firebase" },
    { src: "/technologies/supabase.png", alt: "Supabase", title: "Supabase" },
    { src: "/technologies/pocketbase.png", alt: "Pocketbase", title: "Pocketbase" },
  ]

  const frontend = [
    { src: "/technologies/typescript.png", alt: "TypeScript", title: "TypeScript" },
    { src: "/technologies/react.png", alt: "React", title: "React" },
    { src: "/technologies/tailwind.png", alt: "TailwindCSS", title: "TailwindCSS" },
    { src: "/technologies/motion.png", alt: "Framer Motion", title: "Framer Motion" },
    { src: "/technologies/next.svg", alt: "NextJS", title: "Next.Js" },
    { src: "/technologies/vue.png", alt: "VueJS", title: "Vue.Js" },

  ]

  const databases = [
    { src: "/technologies/mysql.png", alt: "MySQL", title: "MySQL" },
    { src: "/technologies/postgres.png", alt: "PostgreSQL", title: "PostgreSQL" },
    { src: "/technologies/firebase.png", alt: "Firebase Firestore", title: "Firestore" },
    { src: "/technologies/sqlite.png", alt: "SQLite", title: "SQLite" },
  ]
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        rounded-xl mx-auto  
        flex flex-col items-center 
        font-silkscreen w-3/4
        my-10
        md:items-start
        " 
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
        <h2 className="text-3xl mb-2 md:text-4xl">Technologies i know and love</h2>
        <div className="text-xl md:text-2xl flex flex-col">
          <div >
            <h3 className="underline decoration-2">Backend:</h3>
            {/* many small cards with icon of said technology and it's name */}
            <div className="flex gap-4 p-2 flex-wrap text-sm md:text-lg">
              {backend.map((tech, index) => (
                <motion.div whileHover={{scale:1.1, rotate:-2, }} key={index} className="flex flex-col items-center justify-center border-2 w-36 h-32 rounded-2xl p-2">
                  <img src={tech.src} alt={tech.alt} className="w-16 h-16" />
                  <p>{tech.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="underline decoration-2">Frontend:</h3>
            {/* many small cards with icon of said technology and it's name */}
            <div className="flex gap-4 p-2 flex-wrap text-sm md:text-lg">
              {frontend.map((tech, index) => (
                <motion.div whileHover={{scale:1.1, rotate:2}} key={index} className="flex flex-col items-center justify-center border-2 w-36 h-32 rounded-2xl p-2">
                  <img src={tech.src} alt={tech.alt} className="w-16 h-16" />
                  <p>{tech.title}</p>
                </motion.div>
              ))}
            </div>

          </div>
          <div>
            <h3 className="underline decoration-2">Databases:</h3>
            {/* many small cards with icon of said technology and it's name */}
            <div className="flex gap-4 p-2 flex-wrap text-sm md:text-lg">
              {databases.map((tech, index) => (
                <motion.div whileHover={{scale:1.1, rotate:-2}} key={index} className="flex flex-col items-center text-center justify-center border-2 w-36 h-32 rounded-2xl p-2">
                  <img src={tech.src} alt={tech.alt} className="w-16 h-16" />
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