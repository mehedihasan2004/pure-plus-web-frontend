'use client';

import { EUserRole } from '@/enums/user';
import { Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { dashboard } from '@/lib/paths/dashboard';
import { getAnUserByUserId } from '@/actions/user';
import { USERS_INVALIDATE_KEY } from '@/constants/users';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

export default function Page() {
  const { push } = useRouter();
  const { user } = useKindeBrowserClient();

  const { data, isLoading, isPending } = useQuery({
    queryKey: [USERS_INVALIDATE_KEY],
    queryFn: () => getAnUserByUserId(user!.id)
  });

  if (isLoading || isPending) {
    return (
      <div className="size-full flex items-center justify-center">
        <Spinner color="primary" size="md" className="py-10" />;
      </div>
    );
  }

  if (data?.data?.role === EUserRole.PATIENT) {
    return push(dashboard.patient.path + '/' + user?.id);
  } else if (data?.data?.role === EUserRole.DOCTOR) {
    return push(dashboard.doctor.path + '/' + user?.id);
  } else if (data?.data?.role === EUserRole.ADMIN) {
    return push(dashboard.admin.path + '/' + user?.id);
  } else {
    return push('/');
  }
}
