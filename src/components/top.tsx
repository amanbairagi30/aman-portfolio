import React from "react";
import { SelectTheme } from "./theme-toggle";
import SocailMedia from "./socail-media";
import CurrentWork from "./current-work";
import { UserAvatar } from "./user-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { GithubGraph } from "./ui/github";
import { GithubIcon } from "@/app/icons/icon";
import Link from "next/link";

export default function Top() {
  return (
    <>
      <header className="grid grid-cols-4 p-5 w-full">
        <div className="flex flex-col gap-2 col-span-4 ">
          <h3 className="text-gray-400">Hi there ! This is</h3>
          <h1 className="text-4xl font-extrabold">Aman Kumar Bairagi</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            consequuntur vel illo expedita velit eveniet blanditiis adipisci.
            Totam, perferendis odio!
          </p>

          <CurrentWork />
          {/* <SocailMedia /> */}
        </div>
      </header>
    </>
  );
}
