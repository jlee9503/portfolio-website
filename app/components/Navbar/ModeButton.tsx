"use client";

import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface ModeButtonProps {
  mode: string;
  handleMode: () => void;
}

const ModeButton = ({ mode, handleMode }: ModeButtonProps) => {
  return (
    <button
      className={`md:ml-4 flex items-center rounded-full py-2 px-2 w-fit mx-auto ${
        mode === "dark" ? "bg-orange-400" : "bg-indigo-400"
      }`}
      onClick={handleMode}
    >
      {mode === "dark" ? (
        <BsSunFill size={15} />
      ) : (
        <BsFillMoonStarsFill size={15} />
      )}
    </button>
  );
};

export default ModeButton;
