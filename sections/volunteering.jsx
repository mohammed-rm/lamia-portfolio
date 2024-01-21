"use client";
import React from "react";
import { menuItems } from "@/content/navbar";
import { useSectionInView } from "@/hooks/active-section-context";
import Image from "next/image";
import project from "@/public/projet.png";

const Volunteering = ({ volunteering }) => {
  const { ref } = useSectionInView(menuItems.volunteering.id);
  return (
    <section id="volunteering" className="section" ref={ref}>
      <p className="section-title">{menuItems.volunteering.navbarTitle}</p>
      <div className="flex flex-col items-center mt-44 w-full container mx-auto md:ml-20 md:mr-20 gap-10">
        <p className="md:text-center md:text-xl lg:text-2xl tracking-wide">
          {volunteering.text}
        </p>
        <Image src={project} alt="Volunteering Image" />
      </div>
    </section>
  );
};

export default Volunteering;
