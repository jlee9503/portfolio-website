"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
}

const CustomLink = ({ href, title }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="relative mx-4 group">
      {title}
      <span
        className={`absolute h-[2px] inline-block bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
