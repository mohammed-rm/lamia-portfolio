import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { GiMoebiusTriangle } from "react-icons/gi";
import { AiOutlineSmallDash } from "react-icons/ai";

const Timeline = ({ experienceInfo }) => {
  return (
    <div
      className="flex md:ml-20 lg:ml-0 flex-col space-y-4 lg:space-y-0 lg:justify-center lg:items-center relative
            w-full mt-44 items-start"
    >
      <Divider className="absolute left-1 lg:left-1/2 border-2 w-[2px] h-full bg-secondary" />

      {experienceInfo.map((experience, index) => (
        <div
          key={index}
          className="relative transform-none lg:transform translate-x-1/2 lg:odd:-translate-x-1/2"
        >
          <GiMoebiusTriangle
            className={`absolute w-10 h-10 text-secondary z-20 top-7 transform -translate-y-1/2 rotate-105 ml-1 lg:ml-0 
            ${index % 2 !== 0 ? "lg:-right-[5px] lg:rotate-45" : null}`}
          />
          <AiOutlineSmallDash
            className={`hidden lg:block absolute w-16 h-14 text-secondary top-7 transform -translate-y-1/2 
            ${index % 2 !== 0 ? "lg:right-7" : "lg:left-7"}`}
          />
          <AiOutlineSmallDash
            className={`lg:hidden absolute w-16 h-14 text-secondary top-7 transform -translate-y-1/2 left-7`}
          />
          <Card
            className={`font-serif rounded-none max-w-[600px] lg:max-w-[400px] h-fit mr-2 md:mr-0 ml-20 lg:ml-0 bg-opacity-50 
            ${index % 2 === 0 ? "lg:ml-20" : "lg:mr-20"}`}
          >
            <CardBody>
              <p className="text-sm text-secondary mb-4">{experience.date}</p>
              <p className="text-2xl font-bold mb-6 text-primary">
                {experience.role}
              </p>
              <ul className="list-disc ml-4 text-lg">
                {experience.missions.map((mission, index) => (
                  <li key={index}>{mission}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
