type Props = { params: { id: string } };

export default function Page({ params: { id } }: Props) {
  return <div>Patient {id}</div>;
}
