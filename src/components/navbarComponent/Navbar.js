import React from "react";
import { NavLink } from "react-router-dom";

import navbarFrame from "../../assets/navbar-frame.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-me", label: "About Me" },
  { to: "/personal-projects", label: "Personal Projects" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar-frame sticky z-10 flex justify-center items-center gap-[50px] top-[20px] h-[var(--navbar-height)] backdrop-blur-[5px] bg-[var(--navbar-background-color)] bg-opacity-80 border border-[--navbar-background-color] mx-[20%] text-[1.15vw]"
        style={{
          clipPath:
            "polygon(0.22% 15.3%, 2% 2%, 30.9% 2%, 32.09% 9.48%, 65.8% 9.48%, 66.1% 12.1%, 98.2% 12.1%, 99.79% 25%, 99.79% 25%, 99.79% 84.8%, 98.05% 98.05%, 69.1% 98.05%, 67.95% 90.5%, 34.2% 90.5%, 33.9% 87.9%, 1.8% 87.9%, 0.22% 75.4%)",
        }}
      >
        {/* Navbar frame */}
        <img src={navbarFrame} className="absolute w-[100%] h-[100%] mx-auto" />
        {/* Navbar buttons */}
        {navLinks.map(({ to, label }) => (
          <h3
            key={to}
            className="relative p-[5px] font-audiowide text-[var(--navbar-text-color)] text-shadow-nav transition-all duration-300 cursor-pointer"
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? "text-shadow-navActive" : ""
              }
            >
              {label}
            </NavLink>
          </h3>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
