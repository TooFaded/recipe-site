"use client";
import { usePathname } from "next/navigation";
import { lato } from "./fonts";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isLinkActive = (href, pathname) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <Link
      href={href}
      className={`${
        lato.className
      } font-base text-black hover:text-white hover:bg-gradient-to-r from-pink-500 to-orange-400 ${
        isLinkActive(href, pathname)
          ? "text-white bg-gradient-to-r from-pink-500 to-orange-400"
          : ""
      } text-xl rounded-lg p-1 px-2`}
    >
      {children}
    </Link>
  );
}
