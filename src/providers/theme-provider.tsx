import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Props = { children: ReactNode };

export function ThemeProvider({ children }: Props) {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark" attribute="class">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
