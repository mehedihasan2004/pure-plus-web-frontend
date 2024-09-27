import { ReactNode } from 'react';
import { Navbar } from '@/components/layout';

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
}
