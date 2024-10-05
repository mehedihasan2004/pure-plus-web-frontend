import { ReactNode } from 'react';
import { auth } from '@/lib/paths/auth';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Navbar } from '@/components/layout';

type Props = { children: ReactNode };

export default async function DashboardLayout({ children }: Props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    return redirect(auth.login.path);
  }

  return (
    <div className="h-screen">
      <div className="border">
        <Navbar />
      </div>
      <div className="border h-screen">{children}</div>
    </div>
  );
}
