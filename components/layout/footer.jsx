"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="h-auto mt-20 md:mt-36 flex justify-center p-4">
      <Card className="w-full rounded-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-orange-100 shadow-2xl">
        <CardBody>
          <span className="text-center text-large">
            © 2023 Lamia C.™ All Rights Reserved.
          </span>
        </CardBody>
      </Card>
    </footer>
  );
};

export default Footer;
