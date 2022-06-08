import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="bg-english-violet text-white flex items-center justify-around h-24">
      <div className="flex items-center justify-around w-full max-w-screen-2xl">
        <a href="."><img className="h-14" src="./assets/logo.png" alt="logo Jéssica Motta"/></a>
        <Menu/>
      </div>
    </header>
  );
}
