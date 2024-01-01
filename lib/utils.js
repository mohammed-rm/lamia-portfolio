import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const validateString = (value) => !!value;

export const submitForm = async (
  formData,
  onSuccess,
  errorMessage,
  successMessage,
) => {
  const response = await sendEmail(formData);

  if (response.type === "error") {
    toast.error(errorMessage);
  } else {
    toast.success(successMessage);
    document.getElementById("submit-form").reset();
    onSuccess();
  }
};
