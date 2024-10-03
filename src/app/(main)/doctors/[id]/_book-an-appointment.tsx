'use client';

import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
// @ts-expect-error
import { DateValue } from '@react-types/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateAnAppointment } from '@/types/appointment';
import { APPOINTMENT_TIME_SLOTS } from '@/constants/appointment';
import { CreateAnAppointmentZodSchema } from '@/schemas/appointment';
import {
  Input,
  Button,
  Select,
  SelectItem,
  DatePicker
} from '@nextui-org/react';
import { convertToISOForPrisma } from '@/helpers/date-time';

type Props = {
  className?: string;
  patientId: string;
  doctorId: string;
  patientName?: string | null;
};

export function BookAnAppointment({
  className,
  patientId,
  doctorId,
  patientName
}: Props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAnAppointment>({
    resolver: zodResolver(CreateAnAppointmentZodSchema),
    defaultValues: {
      name: patientName ?? '',
      date: '',
      timeSlot: ''
    }
  });

  function handleDateChange(value: DateValue | null) {
    if (value) {
      const formattedDate = format(new Date(value), 'yyyy-MM-dd');
      setValue('date', formattedDate, { shouldValidate: true });
    } else {
      setValue('date', '', { shouldValidate: true });
    }
  }

  function onSubmit(data: CreateAnAppointment) {
    try {
      data.date = convertToISOForPrisma(data.date);

      console.log({ ...data, patientId, doctorId });
    } catch (error) {
      console.log('Error From Appointment Booking --> ', error);
    }
  }

  return (
    <div className={cn(className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h4 className="flex flex-col gap-1">Book an appointment</h4>

        <div>
          <Input
            isRequired
            type="text"
            label="Patient name"
            placeholder="Ex. Sam Altman"
            defaultValue={patientName ?? ''}
            {...register('name')}
          />
          {errors.name?.message && (
            <p className="text-danger">{errors.name.message}</p>
          )}
        </div>
        <div>
          <DatePicker
            isRequired
            label="Appointment date"
            value={undefined}
            onChange={handleDateChange}
          />
          {errors.date?.message && (
            <p className="text-danger">{errors.date.message}</p>
          )}
        </div>

        <div>
          <Select
            isRequired
            label="Time slot"
            placeholder="Select a time slot"
            {...register('timeSlot')}
          >
            {APPOINTMENT_TIME_SLOTS.map(slot => (
              <SelectItem key={slot}>{slot}</SelectItem>
            ))}
          </Select>
          {errors.timeSlot?.message && (
            <p className="text-danger">{errors.timeSlot.message}</p>
          )}
        </div>

        <Button type="submit" color="primary" className="w-full text-md">
          Schedule
        </Button>
      </form>
    </div>
  );
}
