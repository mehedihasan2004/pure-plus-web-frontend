type Props = { params: { id: string } };

export default function Page({ params: { id } }: Props) {
  return (
    <div className="">
      Patient {id}
      <div className="size-80 bg-gray-500"></div>
      <div className="size-80 bg-gray-500"></div>
      <div className="size-80 bg-gray-500"></div>
      <div className="size-80 bg-gray-500"></div>
      <div className="size-80 bg-gray-500"></div>
      <div className="size-80 bg-gray-500"></div>
    </div>
  );
}
