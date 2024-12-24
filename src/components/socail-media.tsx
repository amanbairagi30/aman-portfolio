import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import { FileUser, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SocailMedia() {
  return (
    <>
      <aside className="flex py-2 items-center gap-4">
        <a href={"/aman_kumar_bairagi_resume.pdf"} target="_blank">
          <FileUser />
        </a>
        <Link href={"https://x.com/AMANBAIRAGI_30"} target="_blank">
          <XIcon />
        </Link>
        <Link href={"https://github.com/amanbairagi30"} target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/aman-kumar-bairagi-9315b3242/"}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link href={"mailto:amanbairagi1089@gmail.com"} target="_blank">
          <Mail />
        </Link>
      </aside>
    </>
  );
}
