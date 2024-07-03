import { SearchIcon } from 'lucide-react';
import { Branding, NavbarItems, ThemeSwitcher, UserMenu } from '.';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  Input
} from '@nextui-org/react';

export function Navbar() {
  return (
    <NextUINavbar maxWidth="full">
      <NavbarBrand>
        <Branding />
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
