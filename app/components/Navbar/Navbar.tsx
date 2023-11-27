"use client";

import Logo from "./Logo";
import useThemeHook from "../hook/useThemeHook";
import React, { useCallback, useState } from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { mode, setMode } = useThemeHook();

  const handleMode = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [mode, setMode]);

  const handleMobileVersion = useCallback(() => {
    setIsMobile(!isMobile);
  }, [isMobile]);

  const handleShowNavMenu = useCallback(() => {
    setIsMobile(false);
  }, [setIsMobile]);

  return (
    <header className="max-w-[2500px] relative w-full px-12 md:px-24 py-8 font-medium flex md:justify-between items-center bg-light/75 dark:bg-dark/75 md:fixed z-50">
      <button
        onClick={handleMobileVersion}
        className="flex justify-center items-center flex-col md:hidden"
      >
        <span
          className={`bg-indigo-500 dark:bg-orange-400 block h-1 rounded-sm transition-all duration-300 ease-out ${
            isMobile ? "rotate-45 translate-y-1.5 w-7" : "-translate-y-0.5 w-6"
          }`}
        ></span>
        <span
          className={`bg-indigo-500 dark:bg-orange-400 block h-1 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
            isMobile ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-indigo-500 dark:bg-orange-400 block h-1 rounded-sm transition-all duration-300 ease-out ${
            isMobile ? "-rotate-45 -translate-y-1.5 w-7" : "translate-y-0.5 w-6"
          }`}
        ></span>
      </button>

      <div className="md:flex md:items-center md:gap-8 md:mx-0 hidden">
        <Logo />
      </div>

      {isMobile ? (
        <NavMenu
          className="fixed flex flex-col justify-center items-center gap-3 backdrop-blur-md bg-dark/90 dark:bg-light/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-32 md:hidden"
          mode={mode}
          modeSwitch={handleMode}
          isMobile={isMobile}
          handleShowNavMenu={handleShowNavMenu}
        />
      ) : (
        <NavMenu
          className="justify-center gap-3 items-center hidden md:flex"
          mode={mode}
          modeSwitch={handleMode}
          isMobile={isMobile}
        />
      )}
    </header>
  );
};

export default Navbar;
