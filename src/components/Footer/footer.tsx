import Link from 'next/link';

import { Config } from '@/lib/config';

import { Button } from '../ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-top-gray-200 flex flex-col gap-4 border bg-white px-20 pb-4 pt-8">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="mx-auto mb-3 flex flex-col justify-center gap-2 md:mx-0">
          <div className="items-center justify-center">
            <Link href={'/'}>
              <div className="flex items-center justify-center gap-1">
                <h2 className="text-3xl">{Config.APP_NAME}</h2>
              </div>
            </Link>
          </div>
          <div className="border border-black/50" />
          <div className="flex justify-center gap-1">
            <Button variant={'link'}>
              <Instagram size={24} />
            </Button>
            <Button variant={'link'}>
              <Facebook size={24} />
            </Button>
            <Button variant={'link'}>
              <Twitter size={24} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col gap-2 text-center">
            <Link href={'/marketplace?offset=0'} className="hover:underline">
              Buy Item
            </Link>
            <Link href={'/auctions/create'} className="hover:underline">
              Sell Item
            </Link>
            <Link href={'*'} className="hover:underline">
              Privacy Policy
            </Link>
            <Link href={'/contact'} className="hover:underline">
              Contact Us
            </Link>
            <Link href={'/aboutus'} className="hover:underline">
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center">
          © {new Date().getFullYear()} {Config.APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
