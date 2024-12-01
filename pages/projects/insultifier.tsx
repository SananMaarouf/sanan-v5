import React from "react";
import { motion } from "motion/react";
import Image from "next/image";


export default function Insultifier() {
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
                md:flex-row
                lg:w-1/2
                "
            >
                <div className="w-full justify-center flex flex-col px-4 pb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        Insultifier
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                    Clap back quicly
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                    May 6th, 2024
                    </p>
                </div>

                <Image
                    src={"/images/insultifier/index.webp"}
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
                className="h-full"
            >
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                    Are you immature? or very sarcastic? Then insult.sanan.no is the perfect tool for you!
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                    The insultifier is a tool i made to quickly clap back at my friends when they say something stupid in the group chat, but it works great in a corporate environment....i think.
                    </p>
                </section>
            </motion.div>
        </section>
    );
}