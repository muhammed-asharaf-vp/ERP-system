"use client";

import { useFormContext } from "react-hook-form";

interface FormNumberInputProps {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  step?: number;
}

export default function FormNumberInput({
  name,
  label,
  placeholder,
  disabled = false,
  min = 0,
  step = 1,
}: FormNumberInputProps) {
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
        className="text-sm font-medium text-gray-800"
      >
        {label}
      </label>

      {/* number input */}
      <input
        id={name}
        type="number"
        min={min}
        step={step}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, { valueAsNumber: true })}
        className={`rounded-md border px-3 py-2 text-sm outline-none
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
