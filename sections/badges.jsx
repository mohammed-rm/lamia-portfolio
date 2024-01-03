import React from "react";
import { menuItems } from "@/content/navbar";
import { badges } from "@/content/badges";
import BadgeCard from "@/components/badges/badge-card";

const Badges = () => {
  return (
    <section id="badges" className="section">
      <p className="section-title">{menuItems.badges.navbarTitle}</p>

      <div className="mt-56 w-full container mx-auto md:ml-20 md:mr-20 flex flex-wrap justify-center gap-12">
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
    </section>
  );
};

export default Badges;
