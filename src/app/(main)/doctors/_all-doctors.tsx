'use client';

import axios from 'axios';
import { api } from '@/lib/api/api-routes';
import { Spinner } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { commonHeaders } from '@/lib/api/headers';

export function AllDoctors() {
  const { data, isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await axios.get(api.doctors.route, {
        headers: commonHeaders
      });

      return res.data;
    }
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="size-full flex justify-center items-center">
        <Spinner color="success" />;
      </div>
    );
  }

  return <div>AllDoctors</div>;
}
