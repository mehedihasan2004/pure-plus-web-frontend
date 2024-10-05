import { ReactNode } from 'react';
import { auth } from '@/lib/paths/auth';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

type Props = { children: ReactNode };

export default async function DashboardLayout({ children }: Props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    return redirect(auth.login.path);
  }

  return <>{children}</>;
}
