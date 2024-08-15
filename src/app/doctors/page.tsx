import axios from 'axios';
import { api } from '@/lib/api/constants';
import { DoctorCard } from './doctor-card';
import { SearchAndFilterSidebar } from './search-and-filter-sidebar';
import { Doctor } from '@/types/doctor';

export default async function Doctors() {
  let doctors: Doctor[] | null = null;

  try {
    const res = await axios.get(`${api}/doctors`);

    doctors = res?.data?.data;
  } catch (error) {
    console.error('Error From Get All Doctors ->', error);
  }

  return (
    <section className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 h-full">
      <SearchAndFilterSidebar />

      <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
        {doctors ? (
          <>
            <h3>Doctors</h3>
            <div className="lg:grid grid-cols-2 gap-4">
              {doctors.map(
                ({
                  user: { id, name, image, gender },
                  rank,
                  department,
                  qualifications
                }: Doctor) => (
                  <DoctorCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    gender={gender}
                    qualifications={qualifications}
                    rank={rank}
                    department={department}
                  />
                )
              )}
            </div>
          </>
        ) : (
          <h5>Sorry, no doctors found!</h5>
        )}
      </div>
    </section>
  );
}
