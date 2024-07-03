import './globals.css';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

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
          inter.className,
          'max-w-[1444px] mx-auto container text-foreground bg-background'
        )}
      >
        <Providers>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
