import { ReactNode } from 'react';
import { Navbar } from '@/components/layout';

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="border border-green-500 flex-1">{children}</main>
    </div>
  );
}
