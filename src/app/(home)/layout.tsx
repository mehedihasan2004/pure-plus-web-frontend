import { ReactNode } from 'react';
import { Footer, Navbar } from '@/components/layout';

type Props = Readonly<{ children: ReactNode }>;

export default function HomeLayout({ children }: Props) {
  return (
    <div className="flex flex-col mx-auto">
      <Navbar />

      <main className="flex-1 border border-green-500">{children}</main>

      <Footer />
    </div>
  );
}
