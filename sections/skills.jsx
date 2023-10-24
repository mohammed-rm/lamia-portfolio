"use client";
import React from "react";
import { skillsInfo } from "@/content/skills";
import { menuItems } from "@/content/navbar";
import SkillCard from "@/components/skill-card";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <p className="section-title">{menuItems[2].skills.sectionTitle}</p>
      {/*Old style*/}
      <div className="w-full mt-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6 md:space-y-0 p-4 justify-items-center">
        {skillsInfo.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      {/*New style*/}
      {/*<div className="flex flex-wrap items-center justify-center gap-2 mt-44 max-w-[800px] text-center">*/}
      {/*  {skillsInfo.map((skill, index) => (*/}
      {/*    <Card*/}
      {/*      shadow*/}
      {/*      key={index}*/}
      {/*      className="flex items-center text-lg text-gray-800 rounded-none border-[1px] border-primary"*/}
      {/*    >*/}
      {/*      <CardBody className="flex flex-col justify-center items-center">*/}
      {/*        <p>{skill.name}</p>*/}
      {/*        <SkillStars starsNumber={skill.stars} />*/}
      {/*      </CardBody>*/}
      {/*    </Card>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </section>
  );
};

export default Skills;
