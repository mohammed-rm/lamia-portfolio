import React from "react";
import { paragraph } from "@/content/about";
import { menuItems } from "@/content/navbar";

const About = () => {
  return (
    <section id="about" className="section">
      <p className="section-title">{menuItems[0].about.sectionTitle}</p>
      <div className="mt-44 w-full container mx-auto md:ml-20 md:mr-20">
        <p className="md:text-center font-serif p-6 md:text-xl lg:text-2xl tracking-wide">
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default About;
