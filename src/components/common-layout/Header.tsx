"use client";
import Link from "next/link";
import { useState } from "react";
import SlackIcon from "../icons/slackicon";
import { SearchIcon } from "../icons/searchicon";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F4EDE4]  border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex gap-2 justify-center items-center">
              <SlackIcon />
              <div className="text-xl font-extrabold">slack</div>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-[#1d1c1d]">
            <div className="group relative">
              <span className="cursor-pointer flex items-center gap-1">
                Product <span>▾</span>
              </span>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded border border-gray-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 invisible group-hover:visible z-50">
                <Link
                  href="/product/features"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Features
                </Link>
                <Link
                  href="/product/integrations"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Integrations
                </Link>
                <Link
                  href="/product/security"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Security
                </Link>
              </div>
            </div>
            <Link href="/enterprise">Enterprise</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <button>
            <SearchIcon className="w-5 h-5" />
          </button>
          <Link href="#" className="hover:underline">
            Sign in
          </Link>
          <Link
            href="#"
            className="px-4 py-2 border border-[#611f69] text-[#611f69] rounded hover:bg-[#f1e4f4]"
          >
            Talk to Sales
          </Link>
          <Link
            href="#"
            className="px-4 py-2 bg-[#611f69] text-white rounded hover:bg-[#4a154b]"
          >
            Try for Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-[#1d1c1d]">
          <Link href="#">Product</Link>
          <Link href="#">Enterprise</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Pricing</Link>
          <hr />
          <Link href="#">Sign in</Link>
          <Link href="#" className="block text-[#611f69]">
            Talk to Sales
          </Link>
          <Link
            href="#"
            className="block bg-[#611f69] text-white px-4 py-2 rounded"
          >
            Try for Free
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
