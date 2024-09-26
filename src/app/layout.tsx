import 'swiper/css';
import './globals.css';
import 'swiper/css/pagination';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Providers } from '@/providers';
import { Kanit as Font } from 'next/font/google';

const font = Font({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Pure Plus',
  description: 'Pure Plus is a hospital management system.'
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          font.className,
          'max-w-[1444px] mx-1 px-1 sm:max-lg:mx-2 sm:px-2 xl:mx-auto text-foreground bg-background border'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
