"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color="primary"
      className="float-right rounded-none tracking-wide text-medium"
      isLoading={pending}
    >
      {pending ? "Submitting" : "Submit"}
    </Button>
  );
};

export default SubmitButton;
