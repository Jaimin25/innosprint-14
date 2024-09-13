'use client';

import React, { useEffect, useState } from 'react';

import AuctionClaimSection from './Sections/gigs-claim-section';
import AuctionDetailsSection from './Sections/gigs-details-section';
import AuctionImagesSection from './Sections/gigs-images-section';
import AuctionOwnerSection from './Sections/gigs-owner-section';

export default function AuctionDetails() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex w-full lg:w-3/4">
        <div className="flex w-full flex-col justify-center gap-8">
          <AuctionImagesSection isLoading={isLoading} />
          <AuctionDetailsSection isLoading={isLoading} />
          <AuctionOwnerSection isLoading={isLoading} />
        </div>
      </div>
      <div className="flex w-full lg:w-1/4">
        <div className="flex w-full flex-col gap-8">
          <AuctionClaimSection isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
