import { EGender, ERole } from '@/enums/user';

type User = {
  id: string;
  name: string;
  phone: string | null;
  email: string;
  gender: EGender | null;
  image: string | null;
  role: ERole;
  dateOfBirth: string | null;

  patient: string | null;
  doctor: string | null;
  admin: string | null;
  superAdmin: string | null;

  createdAt: string;
  updatedAt: string;
};

export type { User };
