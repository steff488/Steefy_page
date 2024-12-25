import React from "react";
import { Link } from "react-router-dom";

import "./ContactPage.css";
import Navbar from "../../components/navbarComponent/Navbar.js";

import logo from "../../assets/logo2.png";

function ContactPage() {
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
        <p>Contact!</p>
      </div>
    </>
  );
}

export default ContactPage;
