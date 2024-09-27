'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { TanstackQueryProvider } from './tanstack-query-provider';

type Props = { children: ReactNode };

export function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </ThemeProvider>
  );
}
