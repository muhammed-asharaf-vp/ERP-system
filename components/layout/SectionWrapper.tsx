"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* section title */}
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        {title}
      </h2>

      {/* section content */}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
