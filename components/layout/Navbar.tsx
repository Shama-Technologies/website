"use client";
import { NavLinks } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState, memo } from "react";
import MobileNav from "../layout/MobileNav";
import { usePathname } from "next/navigation";

const Navbar = memo(() => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="px-5 md:px-10 fixed left-0   z-50 bg-white backdrop-blur-md  w-full py-4 ">
      <div className="flex z-50 relative justify-between items-center">
        <div className=" absolute -right-10  bg-[#483FB2] z-10  blur-[100px]  md:blur-[80px] h-[250px] w-[70px] "></div>

        <div className="max-md:w-[100px] max-md:h-[28px]">
          <Link href="/" className="outline-none">
            <Image
              src="/icons/shamaLogo.svg"
              alt="Shama Logo"
              width={166}
              height={47}
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10 ">
          <ul className="flex gap-5">
            {NavLinks.map((link) => {
              return (
                <li key={link.href} className="text-[text-[#161617]]">
                  <Link
                    href={link.href}
                    prefetch={true}
                    className={`text-base  font-medium ${
                      pathname === link.href && "text-[#4835b2]"
                    } `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/ambassador" prefetch={true}>
            <button
              type="button"
              className="text-base cursor-pointer font-medium px-4 z-30 py-[10px] text-white rounded-lg bg-[#483FB2]"
            >
              {" "}
              Ambassadors
            </button>
          </Link>

          {/* <button
            type="button"
            className="text-base curson-pointer font-medium px-4 z-30 py-[10px] text-white rounded-lg bg-[#483FB2]"
          ></button> */}
        </div>
        <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
        <button
          type="button"
          className="md:hidden cursor-pointer  z-30"
          onClick={() => setOpenNav(true)}
        >
          <ul className="grid gap-[3px] md:hidden">
            <li className="w-[22px] h-[2px] bg-black rounded-full"></li>
            <li className="w-[22px] h-[2px] bg-black rounded-full"></li>
            <li className="w-[22px] h-[2px] bg-black rounded-full"></li>
            <li className="w-[22px] h-[2px] bg-black rounded-full"></li>
          </ul>
        </button>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
