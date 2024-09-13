import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Frown, House } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <p>Oops! Looks like you are lost</p> <Frown size={24} />
      </h2>
      <p>This page could not be found</p>
      <Link href="/">
        <Button className="flex items-center gap-2">
          <House size={20} /> <p>Go to home</p>
        </Button>
      </Link>
    </div>
  );
}
