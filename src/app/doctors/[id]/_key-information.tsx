import Image from 'next/image';
import { User } from '@/types/user';
import { EGender } from '@/enums/user';
import { Doctor } from '@/types/doctor';
import { enumReader } from '@/lib/utils';

type Props = Pick<User, 'name' | 'image' | 'gender'> &
  Pick<Doctor, 'qualifications' | 'department' | 'rank'>;

export function KeyInformation({
  name,
  image,
  gender,
  qualifications,
  department,
  rank
}: Props) {
  let src: string = '/images/doctor/male.png';

  if (image) src = image;
  else if (gender && gender === EGender.FEMALE)
    src = '/images/doctor/female.png';

  return (
    <div className="flex justify-start items-center gap-x-4 rounded-md p-2">
      <figure className="relative size-60 rounded-md overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          className="rounded-md hover:scale-105 ease-in-out transition duration-500"
        />
      </figure>

      <div>
        <h3 className="text-primary">{name + ' ' + qualifications}</h3>
        <p className="text-foreground-500">{enumReader(rank)}</p>
        <p className="mt-2">{enumReader(department)}</p>
      </div>
    </div>
  );
}
