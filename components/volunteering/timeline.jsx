import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { GiMoebiusTriangle } from "react-icons/gi";
import { AiOutlineSmallDash } from "react-icons/ai";
import ColoredParagraph from "@/components/ui/colored-paragraph";
import { motion } from "framer-motion";

const Timeline = ({ activities }) => {
  return (
    <div
      className="flex md:ml-20 lg:ml-0 flex-col space-y-4 lg:space-y-0 lg:justify-center lg:items-center relative
            w-full items-start"
    >
      <Divider className="absolute left-1 lg:left-1/2 border-2 w-[2px] h-full bg-primary" />

      {activities.map((activity, index) => {
        return (
          <div
            key={index}
            className="relative transform-none lg:transform translate-x-1/2 lg:odd:-translate-x-1/2"
          >
            <GiMoebiusTriangle
              className={`absolute w-10 h-10 text-primary z-20 top-7 transform -translate-y-1/2 rotate-105 ml-1 lg:ml-0 
            ${index % 2 !== 0 ? "lg:-right-[5px] lg:rotate-45" : null}`}
            />
            <AiOutlineSmallDash
              className={`hidden lg:block absolute w-16 h-14 text-primary top-7 transform -translate-y-1/2 
            ${index % 2 !== 0 ? "lg:right-7" : "lg:left-7"}`}
            />
            <AiOutlineSmallDash
              className={`lg:hidden absolute w-16 h-14 text-primary top-7 transform -translate-y-1/2 left-7`}
            />
            <Card
              className={`w-auto lg:max-w-[420px] xl:max-w-lg h-fit mr-2 md:mr-0 ml-20 lg:ml-0 rounded-md drop-shadow-lg
              p-[2px] bg-gradient-to-b from-blue-300 to-pink-200
            ${index % 2 === 0 ? "lg:ml-20" : "lg:mr-20"}`}
            >
              <CardBody className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-md">
                <motion.p
                  className="text-xl text-primary mb-4 font-semibold"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                >
                  {activity.date}
                </motion.p>
                <p>
                  <ColoredParagraph
                    paragraph={activity.description}
                    coloredWords={activity.coloredPhrases}
                    className="font-bold italic"
                  />
                </p>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
