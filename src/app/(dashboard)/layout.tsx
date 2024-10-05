import { ReactNode } from 'react';

type Props = { children: ReactNode };

export function DashboardLayout({ children }: Props) {
  return <>{children}</>;
}
