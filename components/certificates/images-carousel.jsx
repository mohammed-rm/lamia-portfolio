"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageCard from "@/components/certificates/image-card";

export function ImagesCarousel({ images }) {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(1);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, images]);

  return (
    <div className="flex flex-col gap-y-2 items-center">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <ImageCard image={image.src} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-primary">
        {current}/{Object.keys(images).length}
      </p>
    </div>
  );
}
