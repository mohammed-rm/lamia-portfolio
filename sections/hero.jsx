"use client";
import React from "react";
import Image from "next/image";
import heroImage from "@/public/hero-image.png";
import { useSectionInView } from "@/hooks/active-section-context";
import { motion } from "framer-motion";

const Hero = ({ heroInfo }) => {
  const { ref } = useSectionInView("hero");
  return (
    <section id="hero" className="min-h-screen 2xl:pt-20 bg-green-50" ref={ref}>
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:justify-evenly">
        <motion.div
          className="mt-24 flex flex-col space-y-6 items-center lg:items-start lg:w-2/5"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="flex flex-col text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-bold">
            <p>
              {heroInfo.title}{" "}
              <span className="purple-gradient">{heroInfo.role}</span>
            </p>
          </span>
          <p className="p-6 text-center md:text-2xl tracking-wide md:tracking-widest lg:text-start lg:p-0">
            {heroInfo.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
