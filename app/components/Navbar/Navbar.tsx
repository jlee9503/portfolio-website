"use client";

import CustomLink from "./CustomLink";
import Logo from "./Logo";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import useThemeHook from "../hook/useThemeHook";
import React, { useCallback } from "react";

const Navbar = () => {
  const { mode, setMode } = useThemeHook();

  const handleClick = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [mode, setMode]);

  return (
    <header className="max-w-[2500px] w-full px-24 py-8 font-medium flex justify-between items-center bg-light/75 fixed z-50">
      <div className="flex items-center gap-8">
        <Logo />
      </div>

      <div className="flex gap-3 items-center">
        <nav className="flex">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contact" title="Contact" />
        </nav>

        <button
          className={`ml-4 flex items-center rounded-full py-2 px-2 ${
            mode === "dark" ? "bg-orange-400" : "bg-indigo-400"
          }`}
          onClick={handleClick}
        >
          {mode === "dark" ? (
            <BsSunFill size={15} />
          ) : (
            <BsFillMoonStarsFill size={15} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
