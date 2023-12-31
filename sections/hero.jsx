"use client";
import React from "react";
import Image from "next/image";
import heroImage from "@/public/hero-image.png";
import { heroInfo } from "@/content/hero";

const Hero = () => {
  return (
    <section id="hero" className="section items-center">
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:justify-evenly">
        <div className="mt-24 flex flex-col space-y-6 items-center lg:items-start lg:w-2/5">
          <span className="flex flex-col text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-bold">
            <p>
              {heroInfo.title}{" "}
              <span className="purple-gradient">{heroInfo.role}</span>
            </p>
          </span>
          <p className="p-6 text-center font-serif md:text-2xl tracking-wide md:tracking-widest lg:text-start lg:p-0">
            {heroInfo.description}
          </p>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
