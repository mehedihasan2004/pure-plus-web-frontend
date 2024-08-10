import Image from 'next/image';
import { Button } from '@nextui-org/react';

export function DoctorCard() {
  return (
    <div className="p-4 rounded-md bg-primary/10 flex justify-start gap-x-4 overflow-hidden items-center">
      <figure className="overflow-hidden size-48 content-center">
        <Image
          src="/images/logo.png"
          alt="doctor image"
          height={192}
          width={192}
          className="rounded-sm hover:scale-105 transition duration-300 ease-in-out"
        />
      </figure>
      <div className="space-y-2">
        <h5>
          Associate Professor Dr. Ahsanul Haq Amin , MBBS, MD (Endocrinology &
          Metabolism)
        </h5>
        <p>Senior Consultant</p>
        <p>Diabetology & Endocrinology</p>

        <div className="flex items-center justify-start gap-x-6">
          <Button variant="solid" color="primary" className="text-white">
            Book an appointment
          </Button>
          <Button variant="faded" color="primary">
            Doctor profile
          </Button>
        </div>
      </div>
    </div>
  );
}
