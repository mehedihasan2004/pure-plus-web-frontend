import { User } from './user';
import { Timestamp } from './common';
import { Appointment } from './appointment';

export type Patient = {
  address?: string;
  emergencyContactNumber?: string;

  userId: string;
  user: User;

  appointments: Appointment[];
  testimonials: any[];
} & Timestamp;
