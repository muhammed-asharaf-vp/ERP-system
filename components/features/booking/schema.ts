import { z } from "zod";

export const bookingSchema = z.object({
  senderName: z.string().min(1),
  senderMobile: z.string().regex(/^[0-9]{10}$/),
  senderEmail: z.string().email().optional().or(z.literal("")),

  receiverName: z.string().min(1),
  receiverAddress: z.string().min(1),

  weight: z.coerce.number().positive(),
  rate: z.coerce.number().positive(),

  total: z.number(),
});

export type BookingFormInput = z.input<typeof bookingSchema>;
export type BookingFormOutput = z.output<typeof bookingSchema>;
