"use client";

import { FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import SenderSection from "./SenderSection";
import ReceiverSection from "./ReceiverSection";
import PackageSection from "./PackageSection";

import { bookingSchema } from "./schema";
import { useBookingForm } from "@/components/hooks/useBookingForm";
import SubmitButton from "@/components/form/SubmitButton";

export default function BookingForm() {
  const methods = useBookingForm({
    resolver: zodResolver(bookingSchema), 
    defaultValues: {
      senderName: "",
      senderMobile: "",
      senderEmail: "",
      receiverName: "",
      receiverAddress: "",
      weight: undefined,
      rate: undefined,
      total: 0,
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    console.log("Final Booking Data:", data);
    toast.success("Booking Successful");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
  {/* Sender + Receiver (2-column on desktop) */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <SenderSection />
    <ReceiverSection />
  </div>

  {/* Package Details below */}
  <div className="mt-6">
    <PackageSection />
  </div>

  {/* Submit button */}
  <div className="mt-6 flex justify-end">
    <SubmitButton />
  </div>
</form>

    </FormProvider>
  );
}
