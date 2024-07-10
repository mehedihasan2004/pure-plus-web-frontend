import { Skeleton } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="rounded-lg">
        <div className="h-[50vh] rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-4">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </div>
  );
}
