"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
  toggle?: () => void;
  isMobile: boolean;
}

const CustomLink = ({ href, title, toggle, isMobile }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`relative mx-4 group text-center md:text-left ${isMobile ? 'text-light dark:text-dark' : 'text-dark dark:text-light'}`} onClick={toggle}>
      {title}
      <span
        className={`absolute h-[2px] inline-block bg-indigo-500 dark:bg-orange-400 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
