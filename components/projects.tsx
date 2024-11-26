import React, { use } from "react";
import { motion, AnimatePresence, useAnimate, useInView } from "motion/react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const arrowMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 0.1,
    }
  },
  hover: {
    x: 30,
    transition: {
      duration: 0.1,
    },
  }
};

const textMotion = {
  rest: {
    opacity: 1,
    transition: {
      duration: 0.1,
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.1,
    },
    tap: {
      scale: 0.9
    }
  }
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -200px 0px" })

  useEffect(() => {
    if (isInView) {
      console.log("Element is in view: ", isInView)
    } else {
      console.log("Element is not in view: ", isInView)
    }
  }, [isInView])

  const projects = [
    { url: "/", src: "/applitrack.png", alt: "Applitrack", title: "O1", description: "Applitrack" },
    { url: "/", src: "/applitrack.png", alt: "Partner SOS", title: "O2", description: "Partner-SOS" },
    { url: "/", src: "/applitrack.png", alt: "Artist portfolio", title: "O3", description: "Artist portfolio" }
  ];

  return (
    <AnimatePresence>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-2 my-10 md:mx-20 font-silkscreen">
        <h1 className="text-3xl mb-2">Projects</h1>
        <Carousel className="">
          <CarouselContent className="pl-4 gap-5">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="w-full bg-white h-96 md:basis-2/5 rounded-xl">
                <Link href={project.url} className=" text-black w-full h-full cursor-grab active:cursor-grabbing flex flex-col">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={400}
                    height={400}
                    className="rounded-xl object-cover md:object-cover flex-shrink-0 flex-grow-0 w-full h-60" />
                  <div className="p-4 flex-grow">
                    <h2 className="text-2xl">{project.title}</h2>
                    <p className="text-2xl">{project.description}</p>
                  </div>
                  <motion.div className="py-2 pl-4 relative left-0 bottom-0.5 rounded-xl hover:underline decoration-2">View project</motion.div>
                </Link>
              </CarouselItem>
            ))}
            <CarouselItem className="w-full md:basis-1/3 h-96 rounded-xl">
              <motion.div
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                animate="rest"
                className="w-full bg-white rounded-lg h-full">
                <Card className=" w-full h-full">
                  <Link href="/projects" className="flex justify-center h-full items-center">
                    <motion.h1 variants={textMotion} className="text-2xl hover:underline decoration-2">View all</motion.h1>
                    <motion.span variants={arrowMotion} className="focus:outline-none z-50">
                      <img src={"/arrow-right.svg"} alt="More projects" className="w-10 h-10" />
                    </motion.span>
                  </Link>
                </Card>
              </motion.div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </motion.section>
    </AnimatePresence>

  );
}