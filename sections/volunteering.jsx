import React from "react";
import { menuItems } from "@/content/navbar";
import { volunteering } from "@/content/volunteering";

const Volunteering = () => {
  return (
    <section id="volunteering" className="section">
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
