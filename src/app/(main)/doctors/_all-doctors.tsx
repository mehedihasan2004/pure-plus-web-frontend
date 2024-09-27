'use client';

import axios from 'axios';
import { Doctor } from '@/types/doctor';
import { api } from '@/lib/api/api-routes';
import { Spinner } from '@nextui-org/react';
import { DoctorCard } from './_doctor-card';
import { useQuery } from '@tanstack/react-query';
import { commonHeaders } from '@/lib/api/headers';

export function AllDoctors() {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await axios.get(api.doctors.route, {
        headers: commonHeaders
      });

      return res.data;
    }
  });

  if (isLoading) {
    return (
      <div className="size-full flex justify-center items-center py-20">
        <Spinner color="primary" />;
      </div>
    );
  }

  return (
    <div>
      {doctors?.data.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {doctors?.data?.map(
            ({
              user: { id, name, image, gender },
              qualifications,
              rank,
              department
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
      ) : (
        <>
          <h5 className="text-center py-10 text-secondary">
            Sorry, No doctors found!
          </h5>
        </>
      )}
    </div>
  );
}
