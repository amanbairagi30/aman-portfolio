import React from "react";

export default function Heading({ title }: { title: string }) {
  return (
    <h1 className="text-xl px-6 py-2 border-l-8 border-primary bg-gradient-to-r from-accent dark:from-accent/40 font-semibold">
      {title}
    </h1>
  );
}
