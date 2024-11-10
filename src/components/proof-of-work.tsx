import { GithubIcon } from "@/app/icons/icon";
import Link from "next/link";
import React from "react";
import { GithubGraph } from "./ui/github";

export default function ProofofWork() {
  return (
    <>
      <section className="flex flex-col gap-8 my-8 justify-center px-8">
        <h1 className="text-xl flex items-center gap-2 font-semibold">
          Github Contributions{" "}
          <Link href={"https://github.com/amanbairagi30"} target="_blank">
            <GithubIcon className="cursor-pointer" />
          </Link>
        </h1>
        <GithubGraph username="amanbairagi30" blockMargin={3} />
      </section>

      <section className="p-6">
        <h1 className="text-xl font-semibold">Recent Projects</h1>
      </section>

      {/* <section className="bg-accent h-12 w-full">Hey</section> */}
    </>
  );
}
