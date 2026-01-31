"use client";

import { useFormContext } from "react-hook-form";

interface FormTextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

export default function FormTextArea({
  name,
  label,
  placeholder,
  rows = 3,
  disabled = false,
}: FormTextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1">
      {/* label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      {/* textarea */}
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className={`resize-none rounded-md border px-3 py-2 text-sm outline-none
          ${
            errorMessage
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          }
          disabled:bg-gray-100 disabled:cursor-not-allowed
        `}
      />

      {errorMessage && (
        <p className="text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
