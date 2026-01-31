"use client";

import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: "14px",
        },
        success: {
          style: {
            background: "#16a34a",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#dc2626",
            color: "#fff",
          },
        },
      }}
    />
  );
}
