import Image from 'next/image';

import ImageViewer from '@/components/Modal/image-viewer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useState } from 'react';

const images = [
  'https://cdn.pixabay.com/photo/2015/11/03/08/56/service-1019821_640.jpg'
];

export default function AuctionImagesSection({
  isLoading,
}: {
  isLoading: boolean;
}) {
  const [open, setOpenChange] = useState(false);
  const [imgUrl, setImgUrl] = useState('');


  return (
    <div className="flex w-full justify-center">
      <Carousel className="w-full max-w-64 sm:max-w-lg lg:max-w-3xl">
        <CarouselContent className="w-full">
          {images.map((url, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="w-full">
                  <CardContent className="flex aspect-square items-center justify-center p-0 md:aspect-video">
                    <Image
                      src={url}
                      width={250}
                      alt={url}
                      className="h-full w-full rounded-md object-cover hover:cursor-pointer"
                      height={100}
                      onClick={() => {
                        setImgUrl(url);
                        setOpenChange(true);
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <ImageViewer open={open} imgUrl={imgUrl} setOpenChange={setOpenChange} />
    </div>
  );
}
