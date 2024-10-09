import { EAppointmentTimeSlot } from '@/enums/appointment';
import { z } from 'zod';

export const CreateAnAppointmentZodSchema = z.object({
  name: z
    .string({ required_error: 'Name is requried!' })
    .min(2, { message: 'Name should be at least 2 character!' })
    .max(255, { message: "Name shouldn't be more than 255 character!" }),

  date: z
    .string({ required_error: 'Date is required!' })
    .min(1, { message: "Date can't be empty!" }),

  timeSlot: z.enum(
    [...Object.values(EAppointmentTimeSlot)] as [string, ...string[]],
    { required_error: 'Time slot is required!' }
  )
});
