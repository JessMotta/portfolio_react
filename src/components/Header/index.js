import React from "react";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className="bg-english-violet text-white flex items-center justify-around h-24">
      <div className="flex items-center justify-around w-full max-w-screen-2xl">
        <div>LOGO</div>
        <Menu />
      </div>
    </header>
  );
}
