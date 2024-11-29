import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

/*  TODO copy over images from v-4 to v-5 */
const images = [
    {
        title: 'Index',
        image: '/images/projects/sara/sara1.png',
    },
];

export default function Sara() {
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
                <div className="w-full flex flex-col px-4 pb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        Sarazamecznik.com
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                        Portfolio page for artist, Sara Zamecznik
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                        February 27th, 2024
                    </p>
                </div>

                <Image
                    src={images[0].image}
                    alt={images[0].title}
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
                        This was an exiting project to do.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        My client, Sara Zamecznik, is an art student at KHIO in Oslo. She is a skilled artist who creates art in various mediums, specializing in ceramics.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        Upon learning that she would soon graduate and had been showcasing her art exclusively on Instagram, I recognized the need for a more professional platform—an exclusive website.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        I reached out to Sara and presented an offer she couldn't refuse. I had the freedom to use any technologies I preferred, with her only requirement being a design that is minimal, mobile-friendly, and cost-effective to host.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        "With these criteria in mind, I set out to find a suitable tech stack. I instantly thought of using a CMS such as Wordpress or Squarespace for their ease of use and are easy to maintain. While CMS-platforms like WordPress or Squarespace are popular for their user friendlyness, they come at a literal cost. Luckily there are more cost effective alternatives. Given the nature of the site, all off the content could be static and only need to be updated when she makes a new post. Here is where static site generators(SSG) and headless-CMS systems come in. By utilizing SSGs, such as Next.js, to fetch content from the headless CMS, in this case, Contentful, I could generate a static webpage. This approach is ideal for achieving a custom UI design and allows for easy hosting on Vercel, free of charge. It also enables non-coders to create content through a user-friendly CMS interface, triggering automatic webpage rebuilding via webhooks.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        This choice comes with a drawback—changing the UI in the future would either require coding knowledge or hiring my services again. After discussing the pros and cons, Sara and I agreed on the headless CMS approach.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        After doing some research the tech stack ended up being:
                    </p>
                    <ul>
                        <li>NextJS</li>
                        <li>TailwindCSS</li>
                        <li>Contentful</li>
                        <li>GraphQL </li>
                        <li>Formspree </li>
                        <li>Vercel </li>
                    </ul>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        Developing with Next.js was enjoyable, thanks to its built-in tools like image optimization and routing. Hosting on Vercel, which is tailored for Next.js, was seamless. Tailwind CSS facilitated rapid UI development, making responsive components easy to create.
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        Contentful proved to be user-friendly, allowing for straightforward content model creation, post generation, and asset uploads.
                    </p>
                </section>

            </motion.div>
        </section>
    );
}