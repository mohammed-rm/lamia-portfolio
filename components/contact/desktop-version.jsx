import React from "react";
import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import SubmitButton from "@/components/contact/submit-button";
import { submitForm } from "@/lib/utils";

const DesktopVersion = ({
  contactButton,
  nameInput,
  emailInput,
  messageInput,
  submitButton,
  successMessage,
  errorMessage,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        as={Link}
        color="primary"
        href="#contact"
        variant="flat"
        className="uppercase rounded-none"
        onPress={onOpen}
      >
        {contactButton}
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="pop-ups-bg text-default font-bitter p-4 mr-2 ml-2"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/60 backdrop-opacity-40",
          base: "border-[#292f46] bg-blue-100 text-[#a8b0d3] rounded-md",
          closeButton:
            "text-primary hover:border-2 hover:border-primary hover:bg-opacity-0",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <form
                  id="submit-form"
                  action={async (formData) => {
                    await submitForm(
                      formData,
                      onClose,
                      errorMessage,
                      successMessage,
                    );
                  }}
                  className="flex flex-col w-full h-full gap-4"
                >
                  <Input
                    color="primary"
                    radius="none"
                    isRequired
                    label={nameInput.label}
                    placeholder={nameInput.placeholder}
                    type="name"
                    variant="flat"
                    required
                    name="name"
                  />
                  <Input
                    color="primary"
                    radius="none"
                    isRequired
                    label={emailInput.label}
                    placeholder={emailInput.placeholder}
                    type="email"
                    variant="flat"
                    required
                    name="email"
                  />
                  <Textarea
                    color="primary"
                    radius="none"
                    isRequired
                    name="message"
                    label={messageInput.label}
                    placeholder={messageInput.placeholder}
                    type="text"
                    variant="flat"
                    required
                  />
                  <div className="w-full flex flex-row justify-end space-x-6 mt-6">
                    <SubmitButton label={submitButton} />
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DesktopVersion;
