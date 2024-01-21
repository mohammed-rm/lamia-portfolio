"use client";
import React from "react";
import { menuItems } from "@/content/navbar";
import BadgeCard from "@/components/badges/badge-card";
import { useSectionInView } from "@/hooks/active-section-context";

const Badges = ({ badges }) => {
  const { ref } = useSectionInView(menuItems.badges.id);
  return (
    <section id="badges" className="section relative" ref={ref}>
      <p className="section-title">{menuItems.badges.navbarTitle}</p>

      <div className="mt-56 w-full container mx-auto md:ml-20 md:mr-20 flex flex-col lg:flex-row justify-center gap-12 z-10">
        {Object.values(badges).map((badge, index) => (
          <BadgeCard
            key={index}
            title={badge.title}
            keywords={badge.keywords}
            badgeIcon={badge.badgeIcon}
            link={badge.link}
          />
        ))}
      </div>
      <span className="absolute star top-24 right-10 sm:right-32 bg-primary bg-opacity-20 h-14 w-14 animate-spin-slow transition-all" />
      <span className="absolute star top-24 left-10 sm:left-32 bg-primary bg-opacity-20 h-14 w-14 animate-spin-slow transition-all" />
    </section>
  );
};

export default Badges;
