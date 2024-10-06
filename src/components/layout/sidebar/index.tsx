'use client';

import { ListItem } from './listItem';
import { EUserRole } from '@/enums/user';
import { SidebarItem } from '@/types/sidebar';
import { Skeleton } from '@nextui-org/skeleton';
import { useQuery } from '@tanstack/react-query';
import { getAnUserByUserId } from '@/actions/user';
import { USERS_INVALIDATE_KEY } from '@/constants/users';
import { PATIENT_SIDEBAR_ITEMS } from '@/constants/sidebar';

type Props = { userId: string };

export function Sidebar({ userId }: Props) {
  const { data, isLoading, isPending } = useQuery({
    queryKey: [USERS_INVALIDATE_KEY],
    queryFn: () => getAnUserByUserId(userId)
  });

  if (isLoading || isPending) {
    return <Skeleton className="md:w-20 lg:w-52 h-full" />;
  }

  let items: SidebarItem[] | null;
  if (data?.data?.role === EUserRole.PATIENT) {
    items = PATIENT_SIDEBAR_ITEMS;
  } else if (data?.data?.role === EUserRole.DOCTOR) {
    items = null; // doctorItems
  } else if (data?.data?.role === EUserRole.ADMIN) {
    items = null; // adminItems
  } else {
    items = null;
  }

  return (
    <aside className="border border-red-400 md:w-14 lg:w-52 fixed h-full bg-secondary-900 hidden md:block p-2">
      <ul className="space-y-2 md:max-lg:flex flex-col items-center">
        {items &&
          items.map((item: SidebarItem) => (
            <ListItem key={item.label} {...item} />
          ))}
      </ul>
    </aside>
  );
}
