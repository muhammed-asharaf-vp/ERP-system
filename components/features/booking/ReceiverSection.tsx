"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";

export default function ReceiverSection() {
  return (
    <SectionWrapper title="Receiver Details">
      <FormInput
        name="receiverName"
        label="Full Name"
        placeholder="Enter receiver full name"
      />

      <FormTextArea
        name="receiverAddress"
        label="Full Address"
        placeholder="Enter complete delivery address"
        rows={4}
      />
    </SectionWrapper>
  );
}
