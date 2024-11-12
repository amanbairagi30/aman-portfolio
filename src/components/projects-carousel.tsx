import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectCarousel() {
  return (
    <Carousel className="w-full p-6">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="md:basis-1/2" key={index}>
            <div className="p-4 rounded-xl h-[30rem] border-2">
              <div className="space-y-2">
                <span>#1</span>
                <h3 className="text-xl font-semibold">Merged&Share</h3>
              </div>

              <p className="mt-4 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto facere quidem harum.
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center gap-4 mt-8 justify-end">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
