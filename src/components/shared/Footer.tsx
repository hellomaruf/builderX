import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/img/builderx.png";
import { FaApple, FaWindows } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* left text + logo */}
          <div className="col-span-2">
            <Link href="/">
              <Image
                height={600}
                width={600}
                src={logo}
                alt="logo"
                className="w-[140px] mb-4"
              />
            </Link>
            <h2 className="font-normal text-lg text-gray-800 leading-snug">
              We growing up your business <br /> with BuilderX website Builder.
            </h2>

            <p className="text-gray-500 mt-4">Maxwell, 2023.</p>
          </div>

          {/* column 1 */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Plans & Pricing</li>
              <li>Personal AI Manager</li>
              <li>AI Business Writer</li>
            </ul>
          </div>

          {/* column 2 */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>

          {/* column 3 */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Documentation</li>
              <li>Papers</li>
              <li>Press Conferences</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-sm mb-3">Get the app</h3>
              <div className="flex flex-col gap-2">
                <button className="border text-sm rounded-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
                  <FaWindows className="text-xl" /> Windows
                </button>
                <button className="border text-sm rounded-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
                  <FaApple className="text-xl" /> macOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-[#5271FF] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center md:justify-between gap-3">
          <p>© 2023 Maxwell Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
