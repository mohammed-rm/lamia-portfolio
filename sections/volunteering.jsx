"use client";
import React from "react";
import { menuItems } from "@/content/navbar";
import { volunteering } from "@/content/volunteering";
import { useSectionInView } from "@/hooks/active-section-context";

const Volunteering = () => {
  const { ref } = useSectionInView(menuItems.volunteering.id);
  return (
    <section id="volunteering" className="section" ref={ref}>
      <p className="section-title">{menuItems.volunteering.navbarTitle}</p>
      <div className="flex flex-col items-center mt-44 w-full container mx-auto md:ml-20 md:mr-20">
        <p className="md:text-center md:text-xl lg:text-2xl tracking-wide">
          {volunteering.text}
        </p>
      </div>
    </section>
  );
};

export default Volunteering;
