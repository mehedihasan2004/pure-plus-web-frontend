'use client';

import { EUserRole } from '@/enums/user';
import { Skeleton } from '@nextui-org/skeleton';
import { useQuery } from '@tanstack/react-query';
import { getAnUserByUserId } from '@/actions/user';
import { USERS_INVALIDATE_KEY } from '@/constants/users';
import { ListItem } from './listItem';

type Props = { userId: string };

const patientItems = [
  'P Item 1',
  'P Item 2',
  'P Item 3',
  'P Item 4',
  'P Item 5'
];
const doctorItems = [
  'D Item 1',
  'D Item 2',
  'D Item 3',
  'D Item 4',
  'D Item 5'
];
const adminItems = ['A Item 1', 'A Item 2', 'A Item 3', 'A Item 4', 'A Item 5'];

export function Sidebar({ userId }: Props) {
  const { data, isLoading, isPending } = useQuery({
    queryKey: [USERS_INVALIDATE_KEY],
    queryFn: () => getAnUserByUserId(userId)
  });

  if (isLoading || isPending) {
    return <Skeleton className="md:w-20 lg:w-52 h-full" />;
  }

  let items: string[] | null;
  if (data?.data?.role === EUserRole.PATIENT) {
    items = patientItems;
  } else if (data?.data?.role === EUserRole.DOCTOR) {
    items = doctorItems;
  } else if (data?.data?.role === EUserRole.ADMIN) {
    items = adminItems;
  } else {
    items = null;
  }

  console.log(items);

  return (
    <aside className="border border-red-400 md:w-20 lg:w-52 fixed h-full bg-secondary-900 hidden md:block lg:p-2">
      <ul className="space-y-2">
        {items && items.map(item => <ListItem key={item} label={item} />)}
      </ul>
    </aside>
  );
}
