import { SearchIcon } from 'lucide-react';
import {
  Input,
  NavbarBrand,
  NavbarContent,
  Navbar as NextUINavbar
} from '@nextui-org/react';
import {
  Branding,
  NavbarItems,
  ThemeSwitcher,
  UserMenuAndSigninButtonConditionalRendering
} from '.';

export function Navbar() {
  return (
    <NextUINavbar className="h-16" maxWidth="full">
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
        <UserMenuAndSigninButtonConditionalRendering />
      </NavbarContent>
    </NextUINavbar>
  );
}
