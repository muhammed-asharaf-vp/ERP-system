"use client";

import { useFormContext } from "react-hook-form";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FormInput from "@/components/form/FormInput";

export default function PackageSection() {
  const { watch } = useFormContext();

  const weight = watch("weight");
  const rate = watch("rate");

  const total =
    weight && rate && weight > 0 && rate > 0 ? weight * rate : 0;

  return (
    <SectionWrapper title="Package Details">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Weight */}
        <FormInput
          name="weight"
          label="Weight (kg)"
          type="number"
          placeholder="Enter weight"
        />

        {/* Rate */}
        <FormInput
          name="rate"
          label="Rate per kg (INR)"
          type="number"
          placeholder="Enter rate"
        />

        {/* Total */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Total Shipping Cost (INR)
          </label>

          <input
            type="text"
            value={total}
            readOnly
            className="rounded-md border border-gray-300 bg-gray-100
                       px-3 py-2 text-sm"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
