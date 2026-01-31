"use client";

import { useFormContext } from "react-hook-form";

interface SubmitButtonProps {
  label?: string;
}

export default function SubmitButton({
  label = "Submit Booking",
}: SubmitButtonProps) {
  const {
    formState: { isValid, isSubmitting },
  } = useFormContext();

  return (
    <button
      type="submit"
      disabled={!isValid || isSubmitting}
      className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white
                 hover:bg-blue-700
                 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isSubmitting ? "Submitting..." : label}
    </button>
  );
}
