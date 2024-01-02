"use client";
import React from "react";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { ImagesCarousel } from "@/components/certificates/images-carousel";

import Image from "next/image";
import { GoPlus } from "react-icons/go";

const MobileVersion = ({ certificates }) => {
  return (
    <div className="lg:hidden w-full p-6">
      <Accordion variant="splitted" defaultExpandedKeys={["0"]}>
        {Object.values(certificates).map((certificate, index) => (
          <AccordionItem
            className="group-[.is-splitted]:bg-blue-50 group-[.is-splitted]:rounded-sm mb-6 group-[.is-splitted]:overflow-hidden"
            classNames={{
              title: "text-primary font-playpen text-xl",
            }}
            indicator={<GoPlus className="text-secondary h-6 w-6" />}
            title={`${index + 1}. ${certificate.category}`}
            key={index}
            aria-label={`${certificate.category} Certificate`}
            startContent={
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
            }
          >
            <ImagesCarousel images={certificates[index + 1].image} />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileVersion;
