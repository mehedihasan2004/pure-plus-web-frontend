import { ERank } from '@/enums/doctor';
import { EDepartment } from '@/enums/common';
import { User } from './user';

type Doctor = {
  department: EDepartment;
  rank: ERank;
  qualifications: string;
  description: string | null;

  userId: string;
  user: User;

  appointments: [];
  testimonials: [];

  createdAt: string;
  updatedAt: string;
};

export type { Doctor };
