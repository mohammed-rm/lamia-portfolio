"use client";
import React from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { ImagesCarousel } from "@/components/certificates/images-carousel";

const DesktopVersion = ({ certificates }) => {
  const [selectedCertificate, setSelectedCertificate] = React.useState(0);
  return (
    <div className="hidden container mx-auto lg:flex flex-row justify-evenly items-center w-full p-6 gap-12 mt-8">
      {/*Names*/}
      <div className="flex flex-row w-[50%] justify-evenly h-full gap-4">
        <div className="flex flex-col items-start justify-center gap-6">
          {Object.values(certificates).map((certificate, index) => (
            <div
              onClick={() => setSelectedCertificate(index)}
              key={index}
              className={`flex flex-row gap-4 transition-all duration-200 ease-in-out ${
                selectedCertificate === index
                  ? "opacity-100"
                  : "opacity-20 hover:scale-105 xl:hover:scale-125"
              }`}
            >
              <Card
                className="rounded-full bg-gray-200 w-14 h-14 flex justify-center items-center"
                shadow
                isBlurred
              >
                <Image
                  src={certificate.icon}
                  alt="Icon"
                  className="w-16 h-16"
                />
              </Card>
              <Card className="h-auto bg-gray-200 w-[250px] flex items-start justify-center rounded-sm">
                <p className="ml-4 text-large font-playpen">
                  {index + 1}. {certificate.category}
                </p>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex bg-gray-200 w-1">
          <span className="w-1 h-[25%] bg-primary" />
        </div>
      </div>
      {/*Images*/}
      <div className="w-[50%]">
        <ImagesCarousel images={certificates[selectedCertificate + 1].image} />
      </div>
    </div>
  );
};

export default DesktopVersion;