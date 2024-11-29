import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";


export default function MovieMatch() {
    return (
        <section className="px-5 md:px-0">
            {/* heading and image gallery */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                mx-auto
                my-5 
                flex 
                flex-col 
                border-white
                w-full
                h-1/2
                overflow-hidden 
                rounded-2xl 
                border 
                border-transparent
                bg-transparent 
                md:w-3/5 
                lg:w-1/2
                "
            >
                <div className="w-full justify-center flex flex-col px-4 pb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        MovieMatch
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                    Do you and your partner constantly argue about what movies to watch? Movie Match could be the solution to your troubles
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                    March 18th, 2021
                    </p>
                </div>

                <Image
                    src={"/images/projects/moviematch/moviematch.png"}
                    alt={"spongebob"}
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
                    In our second year of university, we were tasked with creating a practical Android app for our semester assignment. My group spent some time talking about our trials and tribulations and how an app could solve them. Turns out that therapy is the solution to most of them, but what could be solved was the issue of finding a movie that everybody likes on movie nights and thus the idea was born.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        The team:
                    </p>
                    <ul>
                        <li>Me</li>
                        <li>Stian Flatset</li>
                        <li>Sigve Eilertsen</li>
                        <li>Erlend Hollund</li>
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}