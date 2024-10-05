'use client';

import { Loader } from 'lucide-react';
import { Skeleton } from '@nextui-org/skeleton';
import { useQuery } from '@tanstack/react-query';
import { getAnUserByUserId } from '@/actions/user';
import { USERS_INVALIDATE_KEY } from '@/constants/users';

type Props = { userId: string };

export function Sidebar({ userId }: Props) {
  const { data, isLoading, isPending } = useQuery({
    queryKey: [USERS_INVALIDATE_KEY],
    queryFn: () => getAnUserByUserId(userId)
  });

  if (isLoading || isPending) {
    return <Skeleton className="md:w-20 lg:w-52 h-full" />;
  }

  return (
    <aside className="border border-red-400 md:w-20 lg:w-52 fixed h-full bg-secondary-900 hidden md:block"></aside>
  );
}
