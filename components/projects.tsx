import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselCard from "@/components/carouselCard";
import { Card } from "./ui/card";
import Link from "next/link";

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
    scale: 1.3,
    transition: {
      duration: 0.1,
    },
  tap:{
    scale: 0.9
  }
  }
};


export default function Projects() {
  const projects = [
    { src: "/applitrack.png", alt: "Applitrack", title: "O1", description: "Applitrack" },
    { src: "/applitrack.png", alt: "Partner SOS", title: "O2", description: "Partner-SOS" },
    { src: "/applitrack.png", alt: "Artist portfolio", title: "O3", description: "Artist portfolio" }
  ];

  return (
    <motion.section className="border mx-16 my-10 md:mx-40 font-silkscreen">
      <h1 className="text-xl mb-2">Projects</h1>
      <Carousel>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <CarouselCard
                src={project.src}
                alt={project.alt}
                title={project.title}
                description={project.description}
              />
            </CarouselItem>
          ))}
          {<CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <motion.div initial="rest" whileHover="hover" whileTap="tap" animate="rest" className="w-full h-full">
              <Card className="bg-white  w-full h-full">
                <Link href="/projects" className="flex justify-center h-full items-center">
                  <motion.h1 variants={textMotion} className="text-2xl">View all</motion.h1>
                  <motion.span variants={arrowMotion} className="focus:outline-none z-50">
                    <img src={"/arrow-right.svg"} alt="More projects" className="w-10 h-10" />
                  </motion.span>
                </Link>
              </Card>
            </motion.div>
          </CarouselItem>}
        </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
      </Carousel>
    </motion.section>
  );
}