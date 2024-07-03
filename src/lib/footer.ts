export type SocialLink = { src: string; href: string };
export type FooterItem = { label: string; href: string };
export type AllFooterItems = { heading: string; items: FooterItem[] };

export const ITEMS1: FooterItem[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' }
];
export const ITEMS2: FooterItem[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' }
];
export const ITEMS3: FooterItem[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' }
];
export const ITEMS4: FooterItem[] = [
  { label: 'Contact', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'About Us', href: '/about-us' }
];

export const ALL_FOOTER_ITEMS: [
  AllFooterItems,
  AllFooterItems,
  AllFooterItems,
  AllFooterItems
] = [
  { heading: 'Services', items: ITEMS1 },
  { heading: 'Useful Links', items: ITEMS2 },
  { heading: 'Contact', items: ITEMS3 },
  { heading: 'Info', items: ITEMS4 }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { src: 'facebook', href: '/' },
  { src: 'instagram', href: '/' },
  { src: 'linkedin', href: '/' },
  { src: 'twitter', href: '/' },
  { src: 'youtube', href: '/' }
];
