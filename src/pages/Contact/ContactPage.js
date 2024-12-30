import React from "react";
import { Link } from "react-router-dom";

import "./ContactPage.css";
import Navbar from "../../components/NavbarComponent/Navbar.js";

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
        {/* Personal Information Section */}
        <div className="overflow-hidden snap-end md:snap-center h-[calc(100svh-var(--navbar-height))] md:h-[100svh] pt-[50px] pb-[20px] md:pt-[calc(var(--navbar-height)+50px)] lg:pt-[calc(var(--navbar-height)+70px)]">
          {/* Content container */}
          <div className="w-[90%] lg:w-[70%] justify-self-center h-[calc(100svh-var(--navbar-height)-110px)] lg:h-[calc(100svh-var(--navbar-height)-140px)] text-[var(--primary-light)] bg-[#ffffff12]">
            {/* {createDivElement("React", 10)} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

/* <div className="bg-black h-[100svh]">
<iframe
        className="justify-self-center"
        src="https://my.mail.ru/video/embed/7356037161268806772"
        width="626"
        height="367"
        frameBorder="0"
        scrolling="no"
        allow="fullscreen"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
      ></iframe>
</div> */
