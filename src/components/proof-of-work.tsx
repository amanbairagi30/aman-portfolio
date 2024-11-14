"use client";
import GithubIcon from "@/components/icons/github";
import Link from "next/link";
import React from "react";
import { GithubGraph } from "./ui/github";
import { ProjectCarousel } from "./projects-carousel";
import Heading from "./heading";
import { useTheme } from "next-themes";

export default function ProofofWork() {
  const { theme } = useTheme();
  return (
    <>
      <section className="flex flex-col gap-8 my-8 justify-center ">
        <h1 className="text-xl px-6 py-2 border-l-8 border-primary bg-gradient-to-r from-accent dark:from-accent/40 flex items-center gap-2 font-semibold">
          Github Contributions{" "}
          <Link href={"https://github.com/amanbairagi30"} target="_blank">
            <GithubIcon className="cursor-pointer" />
          </Link>
        </h1>
        <div className="flex items-center justify-center">
          <GithubGraph
            username="amanbairagi30"
            blockMargin={3}
            colorPallete={[
              theme === "dark" ? "#202020" : "#f4f4f4",
              "#9be9a8",
              "#40c463",
              "#30a14e",
              "#216e39",
            ]}
          />
        </div>
      </section>

      <section className="flex flex-col gap-8 my-12">
        <Heading title="Recent Projects" />

        <article className="">
          <ProjectCarousel />
        </article>
      </section>

      <section className="flex flex-col gap-8 my-12">
        <Heading title="Open source Contributions" />
        <section className="">
          <widget-web-component
            theme={theme}
            username="amanbairagi30"
            lg-cols={2}
            md-cols={2}
            base-cols={1}
            card-view="list"
            font-variable="--font-manrope"
            top-visible="true"
          />
        </section>
      </section>
    </>
  );
}
