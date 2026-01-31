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
      {/* Section Title */}
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        {title}
      </h2>

      {/* Section Content */}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
