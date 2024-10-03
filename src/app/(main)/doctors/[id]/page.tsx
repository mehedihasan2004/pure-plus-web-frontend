import axios from 'axios';
import { Doctor } from '@/types/doctor';
import { KeyInformation } from './_key-information';
import { RestInformation } from './_rest-information';
import { BookAnAppointment } from './_book-an-appointment';
import { api } from '@/lib/api/api-routes';
import { commonHeaders } from '@/lib/api/headers';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

type Props = { params: { id: string } };

export default async function DoctorDetails({ params: { id } }: Props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  let doctor: Doctor | null = null;

  try {
    const res = await axios.get(api.doctors.route + '/' + id, {
      headers: commonHeaders
    });

    doctor = res?.data?.data;
  } catch (error) {
    console.log('Error From Get The Doctor ->', error);
  }

  if (!user) return redirect('/auth/login');

  const patientName = user.given_name + ' ' + user.family_name;

  return (
    <section className="lg:flex">
      <div className="w-full lg:w-2/3">
        <KeyInformation
          name={doctor!.user.name}
          image={doctor?.user.image}
          gender={doctor?.user.gender}
          qualifications={doctor!.qualifications}
          department={doctor!.department}
          rank={doctor!.rank}
        />
        <BookAnAppointment
          patientId={user.id}
          patientName={patientName}
          doctorId={id}
          className="lg:hidden"
        />
        <RestInformation description={doctor?.description} />
      </div>
      <BookAnAppointment
        patientId={user.id}
        patientName={patientName}
        doctorId={id}
        className="hidden lg:block w-1/3"
      />
    </section>
  );
}
