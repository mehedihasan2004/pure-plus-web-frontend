import { cn } from '@/lib/utils';

type Props = { className?: string };

export function BookAnAppointment({ className }: Props) {
  return <div className={cn(className)}>BookAnAppointment</div>;
}
