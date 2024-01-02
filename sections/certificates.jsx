import React from "react";
import { menuItems } from "@/content/navbar";
import { certificates } from "@/content/certificates";
import DesktopVersion from "@/components/certificates/desktop-version";
import MobileVersion from "@/components/certificates/mobile-version";

const Certificates = () => {
  return (
    <section id="certificates" className="section">
      <p className="section-title">{menuItems.certificates.navbarTitle}</p>
      <div className="mt-44 w-full md:ml-20 md:mr-20 flex flex-wrap justify-center items-center">
        <MobileVersion certificates={certificates} />
        <DesktopVersion certificates={certificates} />
      </div>
    </section>
  );
};

export default Certificates;
