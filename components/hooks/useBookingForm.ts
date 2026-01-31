import { useEffect } from "react";
import { useForm, UseFormProps } from "react-hook-form";
import { BookingFormInput } from "@/components/features/booking/schema";

export function useBookingForm(options?: UseFormProps<BookingFormInput>) {
  const methods = useForm<BookingFormInput>({
    mode: "onChange",
    ...options,
  });

  const { watch, setValue } = methods;

  const weight = Number(watch("weight")) || 0;
  const rate = Number(watch("rate")) || 0;

  useEffect(() => {
    setValue("total", weight > 0 && rate > 0 ? weight * rate : 0);
  }, [weight, rate, setValue]);

  return methods;
}
