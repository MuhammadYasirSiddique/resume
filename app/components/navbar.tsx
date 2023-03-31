"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setFixed);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setFixed);
      }
    };
  }, []);

  return (
    <div
      className={`
        ${
          fix
            ? "sticky top-0  text-slate-200 bg-cyan-600 w-full flex flex-wrap  items-center justify-between"
            : "  text-gray-600 bg-slate-300 w-full flex flex-wrap  items-center justify-between"
        }`}
    >
      <div
        className={`text-3xl p-2 mx-4 ${
          fix ? "hover:text-white " : " hover:text-black text-5xl"
        } `}
      >
        <a href="/">
          <strong>Yasir</strong>
        </a>
      </div>
      {open ? (
        <RxCross2
          className={`md:hidden block h-6 w-6 cursor-pointer mx-6 ${
            fix ? "hover:text-white" : " hover:text-black"
          } `}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <FiMenu
          className={`md:hidden block h-6 w-6 cursor-pointer mx-6 ${
            fix ? "hover:text-white" : " hover:text-black"
          } `}
          onClick={() => setOpen(!open)}
        />
      )}
      <nav
        className={`
                  ${open ? "block" : "hidden"}
                      w-full md:flex md:itmes-center md:w-auto
                      
                  `}
      >
        <ul className="md:flex md:justify-between text-base text-center">
          <li>
            <a
              href="#about"
              className={` md:px-4 block py-2 ${
                fix ? "hover:text-white" : " hover:text-black"
              }`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education "
              className={` md:px-4 block py-2 ${
                fix ? "hover:text-white" : " hover:text-black"
              }`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={` md:px-4 block py-2 ${
                fix ? "hover:text-white" : " hover:text-black"
              }`}
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
