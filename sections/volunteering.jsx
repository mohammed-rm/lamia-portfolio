"use client";
import React from "react";
import { menuItems } from "@/content/navbar";
import { useSectionInView } from "@/hooks/active-section-context";
import Timeline from "@/components/volunteering/timeline";

const Volunteering = ({ volunteering, timeline }) => {
  const { ref } = useSectionInView(menuItems.volunteering.id);
  return (
    <section id="volunteering" className="section" ref={ref}>
      <p className="section-title">{menuItems.volunteering.navbarTitle}</p>
      <div className="flex flex-col items-end mt-44 w-full container mx-auto gap-16">
        <p className="md:text-center md:text-xl lg:text-2xl tracking-wide md:ml-20 md:mr-20 ">
          {volunteering.text}
        </p>
        <Timeline activities={timeline} />
      </div>
    </section>
  );
};

export default Volunteering;
