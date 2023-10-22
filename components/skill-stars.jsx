import React from "react";
import { GiNorthStarShuriken } from "react-icons/gi";

const SkillStars = ({ starsNumber }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: starsNumber }).map((_, index) => (
        <GiNorthStarShuriken key={index} className="text-primary h-6 w-6" />
      ))}
    </div>
  );
};

export default SkillStars;
