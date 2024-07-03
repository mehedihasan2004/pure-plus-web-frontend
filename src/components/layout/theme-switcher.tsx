'use client';

import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';

type SwitchButtonProps = { children: ReactNode; onClick: () => void };

function SwitchButton({ children, onClick }: SwitchButtonProps) {
  return (
    <Button isIconOnly radius="full" onClick={onClick}>
      {children}
    </Button>
  );
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === 'dark' ? (
        <SwitchButton onClick={() => setTheme('light')}>
          <SunIcon />
        </SwitchButton>
      ) : (
        <SwitchButton onClick={() => setTheme('dark')}>
          <MoonIcon />
        </SwitchButton>
      )}
    </>
  );
}
