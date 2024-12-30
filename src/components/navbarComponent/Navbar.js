import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

import navbarCircle from "../../assets/navbar-circle2.png";
import navbarFrame from "../../assets/navbar-frame.png";
import logo from "../../assets/logo2.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-me", label: "About Me" },
  { to: "/personal-projects", label: "Personal Projects" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

const NavLinks = () => {
  return (
    <>
      {navLinks.map(({ to, label }) => (
        <h3
          key={to}
          className="relative font-audiowide text-[var(--navbar-text-color)] text-shadow-nav transition-all duration-300 cursor-pointer"
        >
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? `text-shadow-navActive bg-no-repeat bg-center bg-cover p-[5px]`
                : "p-[5px]"
            }
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundImage: `url(${navbarCircle})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    display: "block",
                  }
                : {}
            }
          >
            {label}
          </NavLink>
        </h3>
      ))}
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky md:absolute z-20 flex flex-row justify-between md:justify-center items-center md:gap-[5%] top-0 m-0 w-[100svw] lg:top-[20px] lg:mx-[15%] lg:w-[70%] min-h-[var(--navbar-height)] backdrop-blur-[50px] lg:backdrop-blur-[5px] bg-[var(--navbar-background-color-transparent)] md:bg-[var(--navbar-background-color)] bg-opacity-80 border-b-2 border-b-[var(--primary-blue)] lg:border lg:border-[--navbar-background-color] px-[10px] md:px-0 py-[10px] text-[110%] lg:text-[initial] lg:clip-navbar">
        {/* Logo */}
        <Link to="/">
          <img
            alt="navbar-frame"
            src={logo}
            className={`${
              isOpen ? "hidden" : ""
            }  block lg:hidden h-[calc(var(--navbar-height)-25px)] cursor-pointer`}
          />
        </Link>
        {/* Navbar frame */}
        <img
          alt="navbar-frame"
          src={navbarFrame}
          className="invisible lg:visible absolute w-[100%] h-[100%] mx-auto"
        />
        {/* Navbar buttons */}
        <div className="hidden md:contents">
          <NavLinks />
        </div>

        {isOpen && (
          <>
            <div className="min-w-[10%] self-start pr-[10px]">
              <Link to="/">
                <img
                  alt="logo"
                  src={logo}
                  className="block aspect-square cursor-pointer"
                />
              </Link>
            </div>
            <div className="min-w-[80%] self-center z-20 flex basis-full flex-col gap-[10px] items-center">
              <NavLinks />
            </div>
          </>
        )}

        <button
          className={`${isOpen ? "self-start" : ""}  min-w-[10%] md:hidden`}
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <X className="text-[var(--primary-blue)] justify-self-center" />
          ) : (
            <Menu className="text-[var(--primary-blue)] justify-self-center" />
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
