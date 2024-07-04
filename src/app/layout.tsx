import 'swiper/css';
import './globals.css';
import 'swiper/css/pagination';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Kanit as Font } from 'next/font/google';
import { Footer, Navbar } from '@/components/layout';

const font = Font({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Pure Plus',
  description: 'Pure Plus is a hospital management website.'
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          font.className,
          'max-w-[1444px] mx-auto container text-foreground bg-background'
        )}
      >
        <Providers>
          <header>
            <Navbar />
          </header>
          <div className="flex flex-col h-screen">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
