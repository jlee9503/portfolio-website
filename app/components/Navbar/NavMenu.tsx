'use client';

import CustomLink from "./CustomLink";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface MobileNavProps {
  className: string;
  mode: string;
  modeSwitch: () => void;
  handleShowNavMenu?: () => void;
  isMobile: boolean;
}

const NavMenu = ({className, mode, modeSwitch, handleShowNavMenu, isMobile}: MobileNavProps) => {
  return (
    <div className={className}>
      <nav className="flex flex-col md:flex-row">
        <CustomLink
          href="/"
          title="Home"
          toggle={handleShowNavMenu}
          isMobile={isMobile}
        />
        <CustomLink
          href="/about"
          title="About"
          toggle={handleShowNavMenu}
          isMobile={isMobile}
        />
        <CustomLink
          href="/experience"
          title="Experience"
          toggle={handleShowNavMenu}
          isMobile={isMobile}
        />
        <CustomLink
          href="/projects"
          title="Projects"
          toggle={handleShowNavMenu}
          isMobile={isMobile}
        />
      </nav>

      <button
        className={`md:ml-4 flex items-center rounded-full py-2 px-2 w-fit mx-auto ${
          mode === "dark" ? "bg-orange-400" : "bg-indigo-400"
        }`}
        onClick={modeSwitch}
      >
        {mode === "dark" ? (
          <BsSunFill size={15} />
        ) : (
          <BsFillMoonStarsFill size={15} />
        )}
      </button>
    </div>
  );
}

export default NavMenu