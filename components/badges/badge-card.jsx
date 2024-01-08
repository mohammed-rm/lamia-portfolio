import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { urlFor } from "@/lib/sanity";

const BadgeCard = ({ title, keywords, badgeIcon, link }) => {
  return (
    <div className="relative">
      <Card
        radius="sm"
        className="max-w-[300px] h-[300px] cards-style bg-opacity-80 bg-gradient-to-b from-primary-100 via-secondary-50 to-primary-dark"
        shadow
      >
        <CardBody className="mt-12 px-6 space-y-6 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-secondary-100">
          <p className="text-lg font-playpen">{title}</p>
          <span className="text-medium flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <Chip
                key={index}
                radius="sm"
                className="bg-opacity-70 bg-gray-300"
              >
                {keyword}
              </Chip>
            ))}
          </span>
        </CardBody>

        <Divider />
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
      <Image
        alt="Badge icon"
        radius="sm"
        src={urlFor(badgeIcon).url()}
        width={1000}
        height={1000}
        className="absolute left-6 -top-10 w-[80px] h-[80px]"
      />
    </div>
  );
};

export default BadgeCard;
