"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import FormInput from "@/components/form/FormInput";

export default function SenderSection() {
  return (
    <SectionWrapper title="Sender Details">
      <FormInput
        name="senderName"
        label="Full Name"
        placeholder="Enter sender full name"
      />

      <FormInput
        name="senderMobile"
        label="Mobile Number"
        placeholder="Enter 10 digit mobile number"
      />

      <FormInput
        name="senderEmail"
        label="Email Address"
        type="email"
        placeholder="Enter email address (optional)"
      />
    </SectionWrapper>
  );
}
