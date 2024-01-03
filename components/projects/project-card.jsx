import React from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";

const ProjectCard = ({ title, keywords }) => {
  return (
    <Card
      radius="sm"
      className="max-w-[300px] h-[300px] bg-gradient-to-br from-transparent via-green-100 to-transparent bg-opacity-0 rounded-br-[80px]"
      shadow
    >
      <CardBody className="mt-12 px-6 space-y-6 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-secondary-100">
        <p className="text-lg font-playpen">{title}</p>
        <span className="text-medium flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <Chip key={index} radius="sm" className="bg-opacity-70 bg-gray-300">
              {keyword}
            </Chip>
          ))}
        </span>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
