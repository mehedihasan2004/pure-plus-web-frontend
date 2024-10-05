import { ReactNode } from 'react';
import { auth } from '@/lib/paths/auth';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/layout';
import { Sidebar } from '@/components/layout/sidebar';
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
      <div className="h-[calc(100vh-64px)] border relative">
        <Sidebar userId={user.id} />

        <div className="border border-green-400 md:w-[calc(100%-5rem)] md:ml-20 lg:ml-52 h-full pt-4 pl-4 overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}
