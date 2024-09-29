import { APPOINTMENT_TIME_SLOTS } from '@/constants/appointment';
import {
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  DatePicker,
  Select,
  SelectItem,
  Input
} from '@nextui-org/react';

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export function BookAnAppointment({ isOpen, onOpenChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {onClose => (
          <>
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
              />
              <DatePicker isRequired label="Appointment date" />
              <Select
                isRequired
                label="Time slot"
                placeholder="Select a time slot"
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
              <Button color="primary" onPress={onClose}>
                Schedule
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
