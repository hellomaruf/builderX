"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { Session } from "next-auth";

export type NavbarWrapperProps = {
  session: Session | null;
};

export default function NavbarWrapper({ session }: NavbarWrapperProps) {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return <Navbar session={session} />;
}
