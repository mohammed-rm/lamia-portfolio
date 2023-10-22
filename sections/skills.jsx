"use client";
import React from "react";
import SkillCard from "@/components/skill-card";
import { skillsInfo } from "@/content/skills";
import { menuItems } from "@/content/navbar";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <p className="section-title">{menuItems[2].skills.sectionTitle}</p>
      <div className="w-full mt-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6 md:space-y-0 p-4 justify-items-center">
        {skillsInfo.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
