import React from "react";
import { SelectTheme } from "./theme-toggle";
import CurrentWork from "./current-work";
import { Button } from "./ui/button";

export default function Top() {
  return (
    <>
      <header className="grid grid-cols-4 p-5 w-full">
        <div className="flex flex-col gap-2 col-span-4 ">
          <h3 className="text-gray-400">Hi there ! This is</h3>
          <h1 className="text-4xl flex items-center gap-4 font-extrabold">
            Aman Kumar Bairagi <SelectTheme />
          </h1>
          <p className="text-foreground/60">
            A developer from India who enjoys building website frontends and is
            also a full-stack developer. Passionate about creating various tech
            projects and learning along the way.
          </p>

          <CurrentWork />

          <aside className="flex items-center gap-2 mt-4">
            <Button
              // Icon={SquareChartGantt}
              // iconPlacement="right"
              className="h-8 shadow-xl shadow-primary/40 dark:shadow-primary/40 font-semibold"
            >
              Projects
            </Button>
            <Button className="h-8" variant={"ghost"}>
              Contact me
            </Button>
          </aside>
          {/* <SocailMedia /> */}
        </div>
      </header>
    </>
  );
}
