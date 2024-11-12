import { GithubIcon, LinkedIcon, XIcon } from "@/app/icons/icon";
import { FileUser, Mail } from "lucide-react";
import React from "react";

export default function SocailMedia() {
  return (
    <>
      <aside className="flex py-2 items-center gap-4">
        <FileUser />
        <XIcon />
        <GithubIcon />
        <LinkedIcon />
        <Mail />
      </aside>
    </>
  );
}
