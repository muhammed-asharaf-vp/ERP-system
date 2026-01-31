"use client";

import BookingForm from "@/components/features/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          New Booking Entry
        </h1>
        <BookingForm />
      </div>
    </main>
  );
}
