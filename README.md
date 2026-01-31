📌 Project Overview

This project is a New Booking Entry screen built as part of a Frontend Engineering Assessment for a Logistics ERP system.

The application is designed for office administrators to enter shipment details quickly and accurately, focusing on:

Data density

Clear validation

Immediate feedback

Clean and maintainable frontend architecture

No backend integration is included, as per the assessment instructions.

🛠 Tech Stack

Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS

Form Handling: React Hook Form

Validation: Zod

Notifications: react-hot-toast

✨ Features

Three logically separated form sections:

Sender Details

Receiver Details

Package Details

Reusable form components (no repeated raw <input> usage)

Real-time validation with inline error messages

Submit button disabled until the form is valid

Automatic shipping cost calculation (weight × rate)

Read-only total shipping cost field

Responsive ERP-style layout:

Desktop: two-column layout

Mobile: stacked layout

Success toast notification on successful submission

Console logging of final booking JSON (no backend connection)

🧱 Folder Structure
app/
 ├─ booking/page.tsx
 ├─ layout.tsx
 ├─ page.tsx
 ├─ globals.css

components/
 ├─ features/booking/
 │   ├─ BookingForm.tsx
 │   ├─ SenderSection.tsx
 │   ├─ ReceiverSection.tsx
 │   ├─ PackageSection.tsx
 │   └─ schema.ts
 │
 ├─ form/
 │   ├─ FormInput.tsx
 │   ├─ FormNumberInput.tsx
 │   ├─ FormTextArea.tsx
 │   └─ SubmitButton.tsx
 │
 ├─ layout/
 │   └─ SectionWrapper.tsx
 │
 └─ ui/
     └─ Toast.tsx

hooks/
 └─ useBookingForm.ts

 🚀 Getting Started
Prerequisites

Node.js (v18 or above recommended)

npm

Installation

Clone the repository:

git clone <https://github.com/muhammed-asharaf-vp/ERP-system.git>


Navigate to the project directory:

cd erp-system


Install dependencies:

npm install

Run the development server:

npm run dev


Open your browser and visit:

http://localhost:3000

📋 Form Behavior

Validation is handled using Zod schemas

Errors appear inline below the respective fields

The Submit Booking button is enabled only when the form is valid

On submit:

Final form data is logged to the console

A “Booking Successful” toast notification is shown

🧠 Architectural Decisions

Feature-based separation: Booking-related logic is grouped together for clarity.

Reusable components: All form inputs are abstracted to avoid duplication.

Single source of truth: Zod schema is used for both validation and TypeScript inference.

Derived values: Total shipping cost is calculated in the UI and not stored in form state, as it is read-only.

📝 Notes

No backend API integration was implemented, as per the assessment requirements.

The project is structured to be easily scalable if additional ERP features are added in the future.

This project was built within the given assessment time constraints,
focusing on clarity, correctness, and maintainability over over-engineering.


👤 Author

Mohamed Asharaf VP
