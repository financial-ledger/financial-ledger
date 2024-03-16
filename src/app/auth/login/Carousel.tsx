'use client';

import {
  Carousel as ArkCarousel,
  type CarouselRootProps,
} from '@ark-ui/react/carousel';
import { useEffect, useState } from 'react';

export function CarouselRoot({
  itemLength,
  ...props
}: { itemLength: number } & CarouselRootProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCarouselIndex((prev) => {
        if (prev <= itemLength - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [itemLength]);
  return <ArkCarousel.Root {...props} index={carouselIndex} />;
}

export { ArkCarousel };
