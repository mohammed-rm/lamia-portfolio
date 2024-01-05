import React from "react";
import { Button, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

const ProjectCard = ({ title, keywords, link }) => {
  return (
    <Card
      radius="sm"
      className="max-w-[400px] h-auto bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white via-blue-100 to-pink-100 shadow-none shadow-sm"
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
      <CardFooter className="flex justify-end h-auto p-4">
        <Link href={link} target={"_blank"}>
          <Button
            className="rounded-[4px] text-primary tracking-wide text-medium font-playpen"
            color="primary"
            variant="bordered"
          >
            Code source
            <RxExternalLink />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
