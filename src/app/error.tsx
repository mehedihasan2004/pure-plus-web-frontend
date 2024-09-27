'use client';

import Link from 'next/link';
import { Button } from '@nextui-org/react';

export default function ErrorPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h5 className="text-danger-700 text-center">Something went wrong!</h5>
        <Button as={Link} href="/" size="sm" className="text-md">
          Back to home
        </Button>
      </div>
    </div>
  );
}
