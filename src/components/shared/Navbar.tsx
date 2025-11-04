// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import logo from "../../../public/assets/img/builderx.png";
// import { Session } from "next-auth";
// import { signOut } from "next-auth/react";

// export default function Navbar({ session }: { session: Session | null }) {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const profileImg = "https://i.pravatar.cc/150?img=3";

//   // Click outside to close dropdown
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Link
//             href="/"
//             className="ml-4 text-xl font-semibold text-gray-800 hover:text-gray-600"
//           >
//             <Image
//               src={logo}
//               alt="logo"
//               height={600}
//               width={600}
//               className="w-[140px]"
//             />
//           </Link>
//         </div>

//         {/* right side */}
//         <div className="flex items-center gap-4">
//           {!session?.user && (
//             <Link
//               href={"/login"}
//               className="px-6 py-2 bg-[#5271ff] hover:bg-opacity-90 text-white rounded-lg"
//             >
//               Login
//             </Link>
//           )}

//           {/* when logged in */}
//           {session?.user && (
//             <div ref={dropdownRef} className="relative">
//               <Image
//                 src={session?.user?.image || profileImg}
//                 width={35}
//                 height={35}
//                 alt="profile"
//                 className="rounded-full cursor-pointer"
//                 onClick={() => setOpen(!open)}
//               />

//               {open && (
//                 <div className="absolute right-0 mt-2 bg-white border shadow-lg w-40 rounded-lg py-2">
//                   <h6 className="text-left text-[15px] px-2 py-2 rounded-md bg-[#5271ff] text-white mx-2">
//                     {session?.user?.name || "User"}
//                   </h6>
//                   <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
//                     Dashboard
//                   </button>

//                   {session?.user ? (
//                     <button
//                       onClick={() => signOut({ callbackUrl: "/login" })}
//                       className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
//                     >
//                       Logout
//                     </button>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/builderx.png";
import { Session } from "next-auth";

type NavbarProps = {
  session: Session | null;
};

export default function Navbar({ session }: NavbarProps) {
  const profileImg = session?.user?.image || "https://i.pravatar.cc/150?img=3";
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(!!session);

  // click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // remove token or invalidate session here
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="ml-4">
          <Image
            src={logo}
            alt="logo"
            height={600}
            width={600}
            className="w-[140px]"
          />
        </Link>

        <div className="flex items-center gap-6">
          {!isLoggedIn && (
            <Link
              href="/login"
              className="px-6 py-2 bg-[#5271ff] text-white rounded-lg"
            >
              Login
            </Link>
          )}
          {isLoggedIn && (
            <Link
              href="/builder"
              className="px-6 py-2 bg-[#5271ff] text-white rounded-lg"
            >
              Build
            </Link>
          )}

          {isLoggedIn && (
            <div ref={dropdownRef} className="relative">
              <Image
                src={profileImg}
                width={35}
                height={35}
                alt="profile"
                className="rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="absolute right-0 mt-2 bg-white border shadow-lg w-40 rounded-lg py-2">
                  <h6 className="text-left text-[15px] px-2 py-2 rounded-md bg-[#5271ff] text-white mx-2">
                    {session?.user?.name || "User"}
                  </h6>

                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                  >
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
