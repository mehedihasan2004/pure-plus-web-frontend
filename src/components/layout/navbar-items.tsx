'use client';

import Link from 'next/link';
import {
  NavbarContent,
  NavbarItem,
  Link as NextUILink
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';

const NAVBAR_ITEMS = [
  { label: 'Doctors', href: '/doctors' },
  { label: 'Medecine', href: '/medecine' },
  { label: 'Appointment', href: '/appointment' }
];

export function NavbarItems() {
  const pathname = usePathname();

  return (
    <NavbarContent justify="start" className="hidden sm:flex gap-3">
      {NAVBAR_ITEMS.map(({ label, href }) => (
        <NavbarItem key={label} isActive={pathname.includes(href)}>
          <NextUILink as={Link} href={href} color="foreground">
            {label}
          </NextUILink>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}
