import { z } from 'zod';
import { CreateAnAppointmentZodSchema } from '@/schemas/appointment';

export type CreateAnAppointment = z.infer<typeof CreateAnAppointmentZodSchema>;
