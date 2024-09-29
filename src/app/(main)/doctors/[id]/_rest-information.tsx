import { Doctor } from '@/types/doctor';

type Props = Pick<Doctor, 'description'>;

export function RestInformation({ description }: Props) {
  return (
    <div>
      {description && (
        <>
          <h5 className="underline">Description</h5>
          <p>{description}</p>
        </>
      )}
    </div>
  );
}
