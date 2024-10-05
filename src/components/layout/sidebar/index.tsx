type Props = { userId: string };

export function Sidebar({ userId }: Props) {
  return (
    <aside className="border border-red-400 md:w-20 lg:w-52 fixed h-full bg-secondary-900 hidden md:block"></aside>
  );
}
