import React from "react";
import SocailMedia from "./socail-media";

export default function Contacts() {
  return (
    <>
      <div className="border-2 p-8 flex flex-col items-center gap-2 justify-center">
        <div>
          <SocailMedia />
        </div>
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </>
  );
}
