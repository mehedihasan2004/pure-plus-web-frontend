type Props = { params: { id: string } };

export default function Page({ params: { id } }: Props) {
  return <div className="">Patient {id}</div>;
}
