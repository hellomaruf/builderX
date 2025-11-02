"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { Session } from "next-auth";

export default function NavbarWrapper({
  session,
}: {
  session: Session | null;
}) {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return <Navbar session={session} />;
}
