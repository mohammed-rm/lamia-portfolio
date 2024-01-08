"use client";
import React from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { ImagesCarousel } from "@/components/certificates/images-carousel";
import { urlFor } from "@/lib/sanity";

const DesktopVersion = ({ certificates }) => {
  const [selectedCertificate, setSelectedCertificate] = React.useState(0);
  const sliderPosition = selectedCertificate * 75 + "px";

  return (
    <div className="hidden container mx-auto lg:flex flex-row justify-evenly items-center w-full p-6 gap-12 mt-8 mb-10">
      {/*Names*/}
      <div className="flex flex-row w-[50%] justify-evenly h-full gap-4">
        <div className="flex flex-col items-start justify-center gap-6">
          {Object.values(certificates).map((certificate, index) => (
            <div
              onClick={() => setSelectedCertificate(index)}
              key={index}
              className={`flex flex-row gap-4 transition-all duration-200 ease-in-out hover:cursor-pointer ${
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
                  src={urlFor(certificate.icon).url()}
                  alt="Icon"
                  width={1000}
                  height={1000}
                  className="w-16 h-16"
                />
              </Card>
              <Card className="h-auto bg-gray-200 w-[250px] flex items-start justify-center rounded-sm">
                <p className="ml-4 text-large">
                  {index + 1}. {certificate.category}
                </p>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex bg-gray-200 w-1">
          <span
            className="w-1 h-[25%] bg-primary transition-all duration-300 transform"
            style={{ transform: `translateY(${sliderPosition})` }}
          />
        </div>
      </div>
      {/*Images*/}
      <div className="w-[50%] h-[420px]">
        <ImagesCarousel images={certificates[selectedCertificate].images} />
      </div>
    </div>
  );
};

export default DesktopVersion;
