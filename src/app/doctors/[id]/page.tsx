import axios from 'axios';
import { Doctor } from '@/types/doctor';
import { api } from '@/lib/api/constants';
import { KeyInformation } from './_key-information';
import { RestInformation } from './_rest-information';
import { BookAnAppointment } from './_book-an-appointment';

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

  return (
    <section className="lg:flex">
      <div className="w-full lg:w-2/3">
        <KeyInformation />
        <BookAnAppointment className="lg:hidden" />
        <RestInformation />
      </div>
      <BookAnAppointment className="hidden lg:block w-1/3" />
    </section>
  );
}
