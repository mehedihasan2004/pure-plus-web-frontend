import { EGender, EUserRole } from '@/enums/user';

type User = {
  id: string;
  name: string;
  phone?: string;
  email: string;
  gender?: EGender;
  image?: string;
  role: EUserRole;
  dateOfBirth?: string;

  patient?: string;
  doctor?: string;
  admin?: string;
  superAdmin?: string;

  createdAt: string;
  updatedAt: string;
};

export type { User };
