import { z } from 'zod';
import { Doctor } from './doctor';
import { Patient } from './patient';
import { Timestamp } from './common';
import { EPaymentStatus } from '@/enums/payment';
import { CreateAnAppointmentZodSchema } from '@/schemas/appointment';
import { EAppointmentStatus, EAppointmentTimeSlot } from '@/enums/appointment';

export type Appointment = {
  id: string;
  name: string;
  department: string;
  date: string;
  timeSlot: EAppointmentTimeSlot;
  status: EAppointmentStatus;
  paymentStatus: EPaymentStatus;
  prescription?: string;
  followUpDate?: string;

  doctorId: string;
  doctor: Doctor;
  patientId: string;
  patient: Patient;
} & Timestamp;

export type CreateAnAppointment = z.infer<
  typeof CreateAnAppointmentZodSchema
> & {
  patientId: string;
  doctorId: string;
};
