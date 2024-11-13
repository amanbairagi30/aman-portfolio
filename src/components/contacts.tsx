import React from "react";
import SocailMedia from "./socail-media";
import Image from "next/image";
import { logo } from "@/app/constants/image";

export default function Contacts() {
  return (
    <>
      <div className="border-2 relative text-center px-8 overflow-hidden pt-10 pb-12 flex flex-col items-center gap-2 justify-center">
        <div>
          <SocailMedia />
        </div>
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <p className="text-sm text-foreground/60">
          Designed and Developed by Aman Kumar Bairagi
        </p>
        <Image
          className="w-4 opacity-10 absolute bottom-4 object-cover"
          width={400}
          height={400}
          src={logo}
          alt="merged-and-share"
        />
      </div>
    </>
  );
}
