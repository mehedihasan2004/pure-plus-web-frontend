import { ReactNode } from 'react';
import { auth } from '@/lib/paths/auth';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/layout';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

type Props = { children: ReactNode };

export default async function DashboardLayout({ children }: Props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    return redirect(auth.login.path);
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[calc(100vh-64px)]">{children}</div>
    </div>
  );
}
