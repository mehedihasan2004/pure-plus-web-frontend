import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
// @ts-expect-error
import { DateValue } from '@react-types/shared';
import { CreateAnAppointment } from '@/types/appointment';
import { APPOINTMENT_TIME_SLOTS } from '@/constants/appointments';
import {
  Input,
  Modal,
  Button,
  Select,
  ModalBody,
  DatePicker,
  SelectItem,
  ModalFooter,
  ModalHeader,
  ModalContent
} from '@nextui-org/react';

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export function BookAnAppointment({ isOpen, onOpenChange }: Props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAnAppointment>();

  function handleDateChange(value: DateValue | null) {
    if (value) {
      const formattedDate = format(new Date(value), 'yyyy-MM-dd');
      setValue('date', formattedDate);
    } else {
      setValue('date', '');
    }
  }

  function onSubmit(data: CreateAnAppointment, onClose: () => void) {
    try {
      if (Object.keys(errors).length === 0) {
        console.log(data, 'from new way');

        onClose();
      } else {
        console.log('Validation errors', errors);
      }
    } catch (error) {
      console.log('Error From Appointment Booking --> ', error);
    }
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {onClose => (
          <form onSubmit={handleSubmit(data => onSubmit(data, onClose))}>
            <ModalHeader className="flex flex-col gap-1">
              Book an appointment
            </ModalHeader>
            <ModalBody>
              <Input
                isRequired
                type="text"
                label="Patient name"
                placeholder="Ex. Sam Altman"
                defaultValue=""
                {...register('name')}
              />
              <DatePicker
                isRequired
                label="Appointment date"
                value={undefined}
                onChange={handleDateChange}
              />
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
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button type="submit" color="primary" onPress={onClose}>
                Schedule
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
