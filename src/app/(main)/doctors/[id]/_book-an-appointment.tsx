'use client';

import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
// @ts-expect-error
import { DateValue } from '@react-types/shared';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { timeSlotReader } from '@/helpers/enum-readers';
import { CreateAnAppointment } from '@/types/appointment';
import { convertToISOForPrisma } from '@/helpers/date-time';
import { errorToast, successToast } from '@/helpers/toasts';
import { createAnAppointment } from '@/actions/appointments';
import { CreateAnAppointmentZodSchema } from '@/schemas/appointment';
import {
  APPOINTMENT_TIME_SLOTS,
  APPOINTMENTS_INVALIDATE_KEY
} from '@/constants/appointment';
import {
  Input,
  Button,
  Select,
  DatePicker,
  SelectItem
} from '@nextui-org/react';

type Props = {
  className?: string;
  patientName?: string | null;
} & Pick<CreateAnAppointment, 'patientId' | 'doctorId'>;

type FormData = Omit<CreateAnAppointment, 'patientId' | 'doctorId'>;

export function BookAnAppointment({
  className,
  patientId,
  doctorId,
  patientName
}: Props) {
  const { push } = useRouter();

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(CreateAnAppointmentZodSchema),
    defaultValues: {
      name: patientName ?? '',
      date: '',
      timeSlot: ''
    }
  });

  const { mutate, isPending, data } = useMutation({
    mutationFn: createAnAppointment,
    mutationKey: [APPOINTMENTS_INVALIDATE_KEY],
    onSuccess: async () => {
      successToast(data?.message);
      push('/');
      reset();
    },
    onError: (error: any) => {
      errorToast(error);
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

  function onSubmit(data: FormData) {
    try {
      data.date = convertToISOForPrisma(data.date);

      mutate({ ...data, patientId, doctorId });
    } catch (error) {
      console.log('Error From Appointment Booking --> ', error);
      throw new Error('Error From Appointment Booking --> ', error as Error);
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
              <SelectItem key={slot} className="tracking-wide">
                {timeSlotReader(slot)}
              </SelectItem>
            ))}
          </Select>
          {errors.timeSlot?.message && (
            <p className="text-danger">{errors.timeSlot.message}</p>
          )}
        </div>

        <Button
          type="submit"
          color="primary"
          disabled={isPending}
          className={cn(
            'w-full text-md flex items-center justify-center gap-x-2',
            {
              'cursor-not-allowed opacity-80': isPending
            }
          )}
        >
          {isPending ? (
            <>
              <Loader size={20} className="animate-spin" />{' '}
              <span>Scheduling...</span>
            </>
          ) : (
            'Schedule'
          )}
        </Button>
      </form>
    </div>
  );
}
