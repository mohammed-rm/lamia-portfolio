import React from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";

const ImageCard = ({ image }) => {
  return (
    <Card className="rounded-none">
      <Image alt="Certificate Image" className="object-cover" src={image} />
    </Card>
  );
};

export default ImageCard;
