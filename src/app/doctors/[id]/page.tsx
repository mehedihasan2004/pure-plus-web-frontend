import axios from 'axios';
import { Doctor } from '@/types/doctor';
import { api } from '@/lib/api/constants';

type Props = { params: { id: string } };

export default async function DoctorDetails({ params: { id } }: Props) {
  let doctor: Doctor | null = null;

  try {
    const res = await axios.get(`${api}/doctors/${id}`);

    console.log(res);
  } catch (error) {
    console.log('Error From Get The Doctor ->', error);
  }

  console.log(doctor);

  return <div>Doctor</div>;
}
