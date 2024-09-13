'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function AuctionClaimSection({
  isLoading,
}: {
  isLoading: boolean;
}) {
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
        <h3 className='text-xl font-semibold'>Services</h3>
        </CardHeader>
        <CardContent>
          <Button variant={'default'}>₹2000</Button>
        </CardContent>
      </Card>
    </div>
  );
}
