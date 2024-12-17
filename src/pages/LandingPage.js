import React from "react";
import "./LandingPage.css";
import Navbar from "../components/navbarComponent/Navbar.js";

import steefy_pic from "../assets/steefy2.png";

function LandingPage() {
  return (
    <>
      <div className="landing-page-container">
        <Navbar />
        <div className="flex justify-between pl-[10%] pr-[10%] pt-[5%] min-h-screen">
          {/* Left Column */}
          <div className="first flex-1 max-w-[60%] text-white font-[Baumans] bg-frame bg-contain bg-no-repeat bg-start pt-[12%] pl-[8%] pr-[10%] text-justify ">
            <h1 className="text-5xl font-bold mb-6">Hi there!</h1>
            <p className="text-[120%] mb-3">
              I'm an aspiring web developer who loves to sprinkle a bit of my
              personality into every project I create.
            </p>
            <p className="text-[120%] mb-3">
              I’m also a bit of a detail fanatic - super organized, with an eye
              for the small things that make a big difference.
            </p>
            <p className="text-[120%] mb-3">
              I’m creative, love problem-solving, and prefer learning by doing,
              which means I'm always ready to dive into new challenges and get
              hands-on!
            </p>
          </div>

          {/* Middle Empty Column */}
          <div className="second flex-1 max-w-[10%]"></div>

          {/* Right Column */}
          <div className="third flex-1 max-w-[30%] flex relative pt-[12%]">
            <div
              className="absolute w-72 h-72 bg-[#ffecff] rounded-full shadow-mainShadow outline outline-2 outline-[#c24498] overflow-visible"
              style={{ boxSizing: "content-box" }}
            >
              <img
                src={steefy_pic}
                alt="Steefy"
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(95, 40, 78, 0.7))",
                }}
                className="absolute bottom-[-2px] left-[-21px] max-w-96 h-96 clip-circle"
              />
              <div style={{ marginTop: "250px" }}>
                <svg width="100%" height="100%">
                  <ellipse
                    cx="50%"
                    cy="50%"
                    rx="90"
                    ry="10"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
