import React from "react";
import Heading from "./heading";
import { BriefcaseBusiness } from "lucide-react";

export default function WorkExperience() {
  return (
    <>
      <section className="flex flex-col gap-8 my-12">
        <Heading title="Work Experience" />
        <article className="px-6">
          <div className="flex items-center w-full h-20 gap-5">
            <div className="border-2 !w-20 h-full rounded-xl bg-accent flex items-center justify-center">
              <BriefcaseBusiness />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Purpose Driven Studio</h2>
              <p className="text-sm text-foreground/60">
                Frontend Developer Intern
              </p>
              <p className="text-sm text-foreground/60">June 2024 - Nov 2024</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
