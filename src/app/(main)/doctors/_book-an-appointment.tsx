import { useForm } from 'react-hook-form';
import { CreateAnAppointment } from '@/types/appointment';
import { APPOINTMENT_TIME_SLOTS } from '@/constants/appointment';
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
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<CreateAnAppointment>();

  function onSubmit(data: CreateAnAppointment) {
    console.log(data);
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {onClose => (
          <form
            onSubmit={handleSubmit(data => {
              if (Object.keys(errors).length === 0) {
                onSubmit(data);
                onClose();
              } else {
                console.log('Validation errors', errors);
              }
            })}
          >
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
              <DatePicker isRequired label="Appointment date" />
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
