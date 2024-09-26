import { ReactNode } from 'react';
import { Footer, Navbar } from '@/components/layout';

type Props = Readonly<{ children: ReactNode }>;

export default function HomeLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
      <body className="max-w-[1444px] mx-auto container text-foreground bg-background">
        <div className="flex flex-col mx-auto">
          <Navbar />
          <main className="flex-1 border border-green-500">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
