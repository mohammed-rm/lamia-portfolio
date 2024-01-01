"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ label }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color="primary"
      className="w-full rounded-none tracking-wide text-medium"
      isLoading={pending}
    >
      {pending ? "" : label}
    </Button>
  );
};

export default SubmitButton;
