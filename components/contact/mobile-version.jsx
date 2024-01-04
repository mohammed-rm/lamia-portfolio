import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button, Input, Link, Textarea } from "@nextui-org/react";
import SubmitButton from "@/components/contact/submit-button";
import { submitForm } from "@/lib/utils";

const MobileVersion = ({
  contactButton,
  nameInput,
  emailInput,
  messageInput,
  submitButton,
  successMessage,
  errorMessage,
}) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <DrawerTrigger asChild>
        <Button
          as={Link}
          color="primary"
          href="#contact"
          variant="flat"
          className="uppercase rounded-none"
          onClick={() => setOpenDrawer(true)}
        >
          {contactButton}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full mt-44 container mx-auto">
          <form
            id="submit-form"
            className="container mx-auto max-w-xl p-4 space-y-5 font-serif"
            action={async (formData) => {
              await submitForm(
                formData,
                () => setOpenDrawer(false),
                errorMessage,
                successMessage,
              );
            }}
          >
            <Input
              radius="none"
              isRequired
              name="name"
              type="text"
              label={nameInput.label}
              placeholder={nameInput.placeholder}
              variant="flat"
              color="default"
              classNames={{ label: "text-lg" }}
            />
            <Input
              radius="none"
              isRequired
              name="email"
              type="email"
              label={emailInput.label}
              placeholder={emailInput.placeholder}
              variant="flat"
              color="default"
              classNames={{ label: "text-lg" }}
            />
            <Textarea
              radius="none"
              isRequired
              name="message"
              label={messageInput.label}
              placeholder={messageInput.placeholder}
              variant="flat"
              color="default"
              classNames={{ label: "text-lg" }}
            />
            <SubmitButton label={submitButton} />
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileVersion;
