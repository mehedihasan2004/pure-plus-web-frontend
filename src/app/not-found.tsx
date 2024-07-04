import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex w-full h-[80vh] md:h-[60vh] lg:h-[80vh]">
      <div className="flex-1 relative hidden md:block">
        <Image
          src="/images/404.jpg"
          alt="404 Not Found Image"
          fill
          className="object-cove pointer-events-none select-none h-full rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h3>Oops!</h3>
        <h4>404 Page Not Found!</h4>
        <p className="text-balance text-center">
          We&apos;re sorry, the page you requested could not be found. Please go
          back to the home page.
        </p>
        <Button
          as={Link}
          href="/"
          variant="solid"
          color="primary"
          className="mt-2"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
