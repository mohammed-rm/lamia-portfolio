import React from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";

const ProjectCard = ({ title, keywords }) => {
  return (
    <Card
      radius="sm"
      className="max-w-[400px] h-auto bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-300 via-rose-100 to-gray-300"
      shadow
    >
      <CardBody className="space-y-6 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-secondary-100">
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
