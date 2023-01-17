import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMenu2Fill, RiSunFill } from "react-icons/ri";
import logoLight from "../public/assets/logo-light.png";
import logoDark from "../public/assets/logo-dark.png";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <RiSunFill
          className="w-5 h-5 text-yellow-500"
          role="button"
          onClick={() => {
            setTheme("light");
          }}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="w-5 h-5 text-gray-900"
          role="button"
          onClick={() => {
            setTheme("dark");
          }}
        />
      );
    }
  };

  return (
    <div
      style={{ backdropFilter: "blur(16px)" }}
      className={
        shadow
          ? "shadow-xl opacity-95 fixed w-full h-18 md:h-20 z-[100]"
          : "fixed w-full h-18 md:h-20 z-[100]"
      }>
      {/* Desktop View */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={theme == "light" ? logoLight : logoDark}
          alt=""
          width="50"
          height="50"
        />
        <div>
          <ul className="hidden md:flex items-center">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <li className="ml-10 items-center justify-center dark:text-blue-600">
              {renderThemeChanger()}
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <RiMenu2Fill size={25} />
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div
          className={
            nav
              ? "fixed right-5 top-5 w-[350px] h-[450px] rounded-3xl px-8 py-8 ease-out duration-500 backdrop-blur-xl bg-[#eeeeee] dark:bg-[#111111]"
              : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
          }>
          <div className="flex w-full items-center justify-between">
            <Image
              src={theme == "light" ? logoLight : logoDark}
              alt=""
              width="35"
              height="35"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer dark:shadow-black">
              <AiOutlineClose className="bg-red" />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[98%] py-4">
              Let's build something legendary together
            </p>
          </div>
          <div>
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="pt-3 py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <li className="py-4">{renderThemeChanger()}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
