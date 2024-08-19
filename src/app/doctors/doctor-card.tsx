import Link from 'next/link';
import Image from 'next/image';
import { User } from '@/types/user';
import { EGender } from '@/enums/user';
import { Doctor } from '@/types/doctor';
import { enumReader } from '@/lib/utils';
import { Button } from '@nextui-org/react';

type Props = Pick<User, 'id' | 'name' | 'image' | 'gender'> &
  Pick<Doctor, 'qualifications' | 'rank' | 'department'>;

export function DoctorCard({
  id,
  name,
  image,
  gender,
  qualifications,
  rank,
  department
}: Props) {
  let src: string = '/images/doctor/male.png';

  if (image) src = image;
  else if (gender && gender === EGender.FEMALE)
    src = '/images/doctor/female.png';

  return (
    <div className="p-4 rounded-md bg-primary/10 flex justify-start gap-x-4 overflow-hidden items-center">
      <figure className="overflow-hidden size-48 content-center">
        <Image
          src={src}
          alt="doctor image"
          height={192}
          width={192}
          className="rounded-sm hover:scale-105 transition duration-300 ease-in-out"
        />
      </figure>
      <div className="space-y-2">
        <h5>{name + ' ' + qualifications}</h5>
        <p>{enumReader(rank)}</p>
        <p>{enumReader(department)}</p>

        <div className="flex items-center justify-start gap-x-6">
          <Button variant="solid" color="primary" className="text-white">
            Book an appointment
          </Button>
          <Button
            as={Link}
            href={`/doctors/${id}`}
            variant="faded"
            color="primary"
          >
            Doctor profile
          </Button>
        </div>
      </div>
    </div>
  );
}
