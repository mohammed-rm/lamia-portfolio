import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import SkillStars from "@/components/skill-stars";

const SkillCard = ({ name, description, imageUrl, stars }) => {
  return (
    <div className="relative max-w-[400px] max-h-[220px]">
      <Card className="rounded-none h-[200px]" shadow>
        <CardHeader className="flex gap-3 justify-end">
          <p className="text-lg font-bold">{name}</p>
        </CardHeader>
        <Divider />

        <CardBody className="scrollbar-thin scrollbar-thumb-blue-300 max-h-[150px]">
          <p>{description}</p>
        </CardBody>

        <Divider />
        <CardFooter className="flex justify-end">
          <SkillStars starsNumber={stars} />
        </CardFooter>
      </Card>
      <Image
        alt="nextui logo"
        radius="sm"
        src={imageUrl}
        className="absolute left-6 -top-10 w-[80px] h-[80px]"
      />
    </div>
  );
};

export default SkillCard;
