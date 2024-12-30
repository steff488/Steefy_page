import React from "react";
import { Link } from "react-router-dom";

import "./PersonalProjectsPage.css";
import Navbar from "../../components/NavbarComponent/Navbar.js";

import logo from "../../assets/logo2.png";

function PersonalProjectsPage() {
  return (
    <>
      <div className="h-[100svh] bg-mesh-noise bg-no-repeat bg-cover overflow-hidden overflow-y-scroll lg:overflow-auto">
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            className="hidden lg:block absolute left-[5%] top-[25px] h-[calc(var(--navbar-height)-15px)] cursor-pointer"
          />
        </Link>
        <Navbar />
        <p>Personal projects!</p>
      </div>
    </>
  );
}

export default PersonalProjectsPage;
