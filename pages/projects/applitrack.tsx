import React from "react";
import { motion } from "motion/react";
import Image from "next/image";


export default function Applitrack() {
    return (
        <section className="px-5 md:px-0">
            {/* heading and image gallery */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                w-full h-1/2
                mx-auto my-5 
                flex flex-col 
                border-white
                overflow-hidden 
                rounded-2xl 
                border border-transparent
                bg-transparent 
                md:w-3/5 lg:w-1/2
                "
            >
                <div className="w-full justify-center flex flex-col px-4 pb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        Applitrack.no
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                        Job application tracker                    
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                        August 18th, 2024
                    </p>
                </div>

                <Image
                    src={"/images/projects/applitrack/applitrack-dashboard.png"}
                    alt={"applitrack"}
                    width={1000}
                    height={800}
                    className="w-full"
                />

            </motion.div>
            {/* content, story about the app */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                    I created this tool because i used to have a spreadsheet in Google Sheets and 
                    Microsoft Excel. I kept switching between them and often forgot which one was the most recent. 
                    So i created Applitrack to see all the applications i had sent, the status of them. 
                    I also wanted to be able to see statistics on how many applications i had sent, 
                    how many i had gotten a response from and how many i had gotten an interview from.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <h2 className="text-xl ">Tech stack:</h2>
                    <ul className="">
                        <li>NextJS </li>
                        <li>TailwindCSS</li>
                        <li>PocketBase</li>
                        <li>Vercel</li>
                    </ul>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                    Developing with Next.js was very enjoyable. 
                    Thanks to its built-in tools like image optimization, routing and easy hosting on Vercel, 
                    Tailwind CSS facilitated rapid UI development, making responsive components easy to create.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                    I used PocketBase to store the data. It was easy to set up and use. 
                    </p>
                </section>
            </motion.div>
        </section>
    );
}