import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon } from 'lucide-react';
import { NavbarItems, ThemeSwitcher, UserMenu } from '.';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  Link as NextUILink,
  Input
} from '@nextui-org/react';

export function Navbar() {
  return (
    <NextUINavbar maxWidth="full" className="border-2 border-green-500">
      <NavbarBrand>
        <NextUILink as={Link} href="/">
          <Image src="/images/logo.png" alt="Logo" height={60} width={60} />
          <p className="hidden md:block font-semibold text-inherit text-xl">
            Pure Plus
          </p>
        </NextUILink>
      </NavbarBrand>

      <NavbarItems />

      <NavbarContent as="div" className="items-center" justify="center">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-5xl h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          placeholder="Search"
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
        <UserMenu />
      </NavbarContent>
    </NextUINavbar>
  );
}
