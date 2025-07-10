"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href="/"
            className="text-neutral-400 text-xl hover:text-white transition-colors"
          >
            Parvez
          </Link>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <Image
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="nemu.svg"
              height={6}
              width={6}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
