import React from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const ImageCard = ({ image }) => {
  return (
    <Card className="rounded-none">
      <Image
        alt="Certificate Image"
        className="object-cover"
        src={urlFor(image).url()}
        width={700}
        height={500}
      />
    </Card>
  );
};

export default ImageCard;
