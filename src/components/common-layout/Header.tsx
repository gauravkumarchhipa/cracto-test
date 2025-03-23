"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F4EDE4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image src="/slack-logo.svg" alt="Slack" width={100} height={30} />
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-[#1d1c1d]">
            <Link href="/product">Product</Link>
            <Link href="/enterprise">Enterprise</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <button className="text-[#1d1c1d] hover:text-[#611f69]">🔍</button>
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
