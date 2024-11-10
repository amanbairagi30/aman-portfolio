import { GithubIcon, LinkedIcon, XIcon } from "@/app/icons/icon";
import React from "react";

export default function SocailMedia() {
  return (
    <>
      <aside className="flex py-2 items-center gap-4">
        <GithubIcon />
        <XIcon />
        <LinkedIcon />
      </aside>
    </>
  );
}
