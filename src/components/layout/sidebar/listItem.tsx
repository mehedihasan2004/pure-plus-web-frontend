import { cn } from '@/lib/utils';
import { SidebarItem } from '@/types/sidebar';
import { usePathname } from 'next/navigation';

type Props = SidebarItem;

export function ListItem({ icon: Icon, label, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname.includes(label);

  return (
    <li
      className={cn(
        'p-2 rounded-md hover:bg-secondary-800 transition duration-200 cursor-pointer lg:flex items-center justify-start gap-x-2',
        { isActive: 'bg-secondary-800' }
      )}
    >
      <Icon size={20} className="size-5" />{' '}
      <span className="hidden lg:block">{label}</span>
    </li>
  );
}
