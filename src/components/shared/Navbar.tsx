"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/assets/img/builderx.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // example (tumi real auth state use korba firebase / next-auth theke)
  const isLoggedIn = true;
  const profileImg = "https://i.pravatar.cc/150?img=3"; // user profile image

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="ml-4 text-xl font-semibold text-gray-800 hover:text-gray-600"
          >
            <Image
              src={logo}
              alt="logo"
              height={600}
              width={600}
              className="w-[140px]"
            ></Image>
          </Link>
        </div>

        {/* right side */}
        <div className="flex items-center gap-4">
          {!isLoggedIn && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Login
            </button>
          )}

          {/* when logged in */}
          {isLoggedIn && (
            <div className="relative">
              <Image
                src={profileImg}
                width={35}
                height={35}
                alt="profile"
                className="rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="absolute right-0 mt-2 bg-white border shadow-lg w-36 rounded-lg py-2">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                    Dashboard
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
