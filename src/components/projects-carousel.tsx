"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/github";
import { projectData } from "@/app/data";

export function ProjectCarousel() {
  return (
    <Carousel className="w-full p-6">
      <CarouselContent>
        {projectData.map((item, index) => (
          <CarouselItem className="md:basis-1/2" key={index}>
            <div className="p-4 rounded-xl relative h-[30rem] border-2">
              <div className="space-y-2">
                {/* <span>#1</span> */}
                <h3 className="text-2xl mb-4 font-semibold">{item.name}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {item.users || item.visitors ? (
                    <>
                      <Badge className="bg-accent rounded-md text-foreground">
                        {item.users}+ users
                      </Badge>
                      <Badge className="bg-accent rounded-md text-foreground">
                        {item.visitors}+ total Visitors
                      </Badge>
                    </>
                  ) : (
                    <>
                      {item.skills.map((item, index) => (
                        <Badge
                          key={index}
                          className="bg-accent rounded-md text-foreground"
                        >
                          {item}
                        </Badge>
                      ))}
                    </>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm">{item.description}</p>

              <div className="flex flex-wrap items-center mt-4 gap-2">
                <Button
                  onClick={() => window.open(item.liveLink, "_blank")}
                  className="h-7 font-bold text-xs"
                >
                  Live <SquareArrowOutUpRight className="w-3 h-3" />{" "}
                </Button>
                <Button
                  onClick={() => window.open(item.liveLink, "_blank")}
                  className="h-7 font-bold text-xs"
                >
                  Github <GithubIcon />
                </Button>
              </div>

              <Image
                className={`w-[22rem] aspect-video rounded-xl object-cover absolute shadow-lg shadow-${item.bgColor} bottom-4 left-[50%] translate-x-[-50%]`}
                width={400}
                height={400}
                src={item.image}
                alt="merged-and-share"
              />
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
