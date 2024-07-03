import Link from 'next/link';
import { Branding } from '.';
import Image from 'next/image';
import { Link as NextUILink } from '@nextui-org/react';
import {
  ALL_FOOTER_ITEMS,
  AllFooterItems,
  FooterItem,
  SOCIAL_LINKS,
  SocialLink
} from '@/lib/footer';

type ColumnProps = { heading: string; items: FooterItem[] };

function Column({ heading, items }: ColumnProps) {
  return (
    <div>
      <h4 className="text-foreground underline underline-offset-4 decoration-gray-400 dark:decoration-gray-600 decoration-2 mb-3 decoration-wavy">
        {heading}
      </h4>
      <div className="flex flex-col items-start gap-y-1.5">
        {items.map(({ label, href }: FooterItem, i: number) => (
          <NextUILink
            key={i}
            href={href}
            as={Link}
            color="foreground"
            size="sm"
          >
            {label}
          </NextUILink>
        ))}
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-x-4">
      <h4>Follow Us</h4>
      <div className="flex gap-x-4">
        {SOCIAL_LINKS.map(({ src, href }: SocialLink) => (
          <NextUILink key={src} href={href}>
            <Image
              src={`/images/social/${src}.png`}
              alt={src}
              height={40}
              width={40}
              className="size-10"
            />
          </NextUILink>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-20">
      <div className="bg-gray-300/70 dark:bg-gray-500/70 h-[1px] mb-8" />

      <Branding className="sm:block" />
      <div className="flex flex-wrap gap-10 justify-between items-center">
        {ALL_FOOTER_ITEMS.map(({ heading, items }: AllFooterItems) => (
          <Column key={heading} heading={heading} items={items} />
        ))}
        <Social />
      </div>

      <div className="bg-gray-300/70 dark:bg-gray-500/70 h-[1px] my-8" />

      <div className="flex flex-col items-center gap-y-1 md:flex-row md:justify-between md:items-center">
        <p>
          All &copy; rights reserved by{' '}
          <NextUILink
            as={Link}
            href="/privacy-policy"
            size="sm"
            color="foreground"
            className="underline"
          >
            Pure Plus
          </NextUILink>{' '}
          2024.
        </p>
        <div className="flex gap-x-4">
          <NextUILink
            as={Link}
            href="/privacy-policy"
            size="sm"
            color="foreground"
            className="underline"
          >
            Privacy Policy
          </NextUILink>
          <NextUILink
            as={Link}
            href="/terms-and-conditions"
            size="sm"
            color="foreground"
            className="underline"
          >
            Terms & Conditions
          </NextUILink>
        </div>
      </div>
    </footer>
  );
}
