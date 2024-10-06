import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Props = { label: string };

export function ListItem({ label }: Props) {
  const pathname = usePathname();
  const isActive = pathname.includes(label);

  return (
    <li
      className={cn(
        'p-2 rounded-md hover:bg-secondary-800 transition duration-200 cursor-pointer',
        { isActive: 'bg-secondary-800' }
      )}
    >
      {label}
    </li>
  );
}
