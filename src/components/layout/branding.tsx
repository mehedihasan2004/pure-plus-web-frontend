import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Link as NextUILink } from '@nextui-org/react';

type Props = { className?: string };

export function Branding({ className }: Props) {
  return (
    <NextUILink as={Link} href="/" className="flex items-end">
      <Image
        src="/images/logo.png"
        alt="Logo"
        height={56}
        width={56}
        className="md:size-14"
      />
      <p
        className={cn(
          '-ml-2 hidden lg:block font-semibold text-inherit text-xl',
          className
        )}
      >
        ure Plus
      </p>
    </NextUILink>
  );
}
