import { Circle } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

export default function CurrentWork() {
  return (
    <aside className="flex flex-wrap items-center md:gap-2">
      <Badge className="flex items-center gap-2 rounded-lg py-2 bg-green-200/40 dark:bg-green-800/40 text-foreground px-4 mt-2 w-fit ">
        <Circle className="text-green-500 w-5 h-5 fill-green-500" />
        <p className="text-xs font-extrabold">Open to Work</p>
      </Badge>
      <Badge className="flex items-center gap-2 rounded-lg py-2 bg-gray-200/40 dark:bg-gray-800/40 text-foreground px-4 mt-2 w-fit ">
        <Circle className="text-gray-500 w-5 h-5 fill-gray-500" />
        <p className="text-xs font-extrabold">
          Prev Frontend Dev @Purpose Driven
        </p>
      </Badge>
      <Badge className="flex items-center gap-2 rounded-lg py-2 bg-blue-200/40 dark:bg-blue-800/40 text-foreground px-4 mt-2 w-fit ">
        <Circle className="text-blue-500 w-5 h-5 fill-blue-500" />
        <p className="text-xs font-extrabold">Open to freelancing</p>
      </Badge>
      <Badge className="flex items-center gap-2 rounded-lg py-2 bg-orange-200/40 dark:bg-orange-800/40 text-foreground px-4 mt-2 w-fit ">
        <Circle className="text-orange-500 w-5 h-5 fill-orange-500" />
        <p className="text-xs font-extrabold">Learning new stuffs regularly</p>
      </Badge>
    </aside>
  );
}
