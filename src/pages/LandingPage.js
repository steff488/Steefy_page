import React, { useEffect } from "react";
import "./LandingPage.css";
import Navbar from "../components/navbarComponent/Navbar.js";

import steefy_pic from "../assets/steefy2.png";

function LandingPage() {
  useEffect(() => {
    const skewEffect = (e) => {
      const layer = document.querySelector(".layer");
      if (layer) {
        const speed = 5;
        const x = (e.pageX / window.innerWidth - 0.5) * speed;
        const y = (e.pageY / window.innerHeight - 0.5) * speed;

        layer.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
      }
    };

    document.addEventListener("mousemove", skewEffect);

    return () => {
      document.removeEventListener("mousemove", skewEffect);
    };
  }, []);

  return (
    <>
      <div className="landing-page-container overflow-hidden">
        <Navbar />
        <div className="flex justify-between pl-[10%] pr-[10%] pt-[3.5%] h-[100%]">
          {/* Left Column */}
          <div className="layer first shadow-mainDropShadow flex-1 max-w-[55%] text-white font-[Baumans] bg-frame bg-contain bg-no-repeat bg-start bg-opacity-25 pt-[9.5%] pl-[7%] pr-[9%] text-justify box-borders">
            <h1 className="text-[2.3vw] font-bold mb-6">Hi there!</h1>
            <p className="text-[1.3vw] mb-3">
              I'm an aspiring web developer who loves to sprinkle a bit of my
              personality into every project I create.
            </p>
            <p className="text-[1.3vw] mb-3">
              I’m also a bit of a detail fanatic - super organized, with an eye
              for the small things that make a big difference.
            </p>
            <p className="text-[1.3vw] mb-3">
              I’m creative, love problem-solving, and prefer learning by doing,
              which means I'm always ready to dive into new challenges and get
              hands-on!
            </p>
          </div>

          {/* Middle Empty Column */}
          <div className="second flex-1 max-w-[10%]"></div>

          {/* Right Column */}
          <div className="third flex-1 max-w-[35%] flex relative pt-[10%]">
            <div
              className="steefy-container absolute w-72 h-72 bg-[#ffecff] rounded-full shadow-mainBoxShadow outline outline-2 outline-[#c24498] overflow-visible"
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

              {/* <div className="container">
                <div className="clock">
                  <div className="t-left" id="time-left"></div>
                  <div className="time-ctrl-container">
                    <div className="time-ctrl">
                      <div className="holo"></div>
                      <div className="holo-border"></div>
                    </div>
                  </div>
                  </div>
                </div> */}
            </div>
            <div className="holo"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
