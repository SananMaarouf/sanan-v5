import React from "react";
import { motion } from "motion/react";
import Image from "next/image";


export default function Greentalk() {
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
                        Greentalk
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                    If you love our planet, you will love Greentalk
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                    March 18th, 2021
                    </p>
                </div>

                <Image
                    src={"/images/projects/greentalk/greentalk.jpg"}
                    alt={"spongebob"}
                    width={1000}
                    height={800}
                    className="w-full "
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
                    In our second year of university, we were tasked with creating a CRUD application for our semester assignment. 
                    After some time debating what kind of site and what it should be about, we landed on a forum for environmentalistssince global 
                    warming, climate change, and pollution are becoming bigger problems, we wanted to create a space where like minded people could
                    communicate and start events to meet up.
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
                        <li>Hanna Singueo</li>
                        <li>Mikkel Mohaugen</li>
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}