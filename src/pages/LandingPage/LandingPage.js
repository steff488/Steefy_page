import React, { useEffect } from "react";
import "./LandingPage.css";
import Navbar from "../../components/navbarComponent/Navbar.js";

import steefy_pic from "../../assets/steefy2.png";

const paragraphData = [
  "I'm an aspiring web developer who loves to sprinkle a bit of my personality into every project I create.",
  "I’m also a bit of a detail fanatic - super organized, with an eye for the mdall things that make a big difference.",
  "I’m creative, love problem-solving, and prefer learning by doing, which means I'm always ready to dive into new challenges and get hands-on!",
];

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
      {/* Landing page container */}
      <div className="h-[100svh] bg-mesh-noise bg-no-repeat bg-cover overflow-hidden">
        <Navbar />
        {/* Columns container */}
        <div className="h-[100svh] flex flex-col lg:flex-row justify-between pl-[10%] pr-[10%] pt-[15%] lg:pt-[calc(var(--navbar-height)+60px)] overflow-hidden overflow-y-scroll lg:overflow-hidden">
          {/* Left Column */}
          <div className="layer max-h-fit lg:max-h-[100%] lg:max-w-[55%] shadow-mainDropShadow flex-1 text-white font-[Baumans] lg:bg-frame lg:bg-contain lg:bg-no-repeat lg:bg-start lg:bg-top lg:bg-opacity-25 lg:pt-[9.5%] lg:pl-[7%] lg:pr-[9%] text-justify box-borders">
            <h1 className="md:text-[3.3vw] lg:text-[2.3vw] font-bold mb-6 text-shadow">
              Hi there!
            </h1>
            {paragraphData.map((text, index) => (
              <p
                key={index}
                className="md:text-[2.3vw] lg:text-[1.3vw] mb-3 color-[var(--main-text-color)] text-shadow"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Middle Empty Column */}
          {/* <div className="second md:flex-1 lg:max-w-[10%]"></div> */}

          {/* Right Column */}
          <div className="justify-center flex-1 lg:max-w-[35%] md:h-auto flex relative pt-[20%] lg:pt-[8%]">
            {/* Steefy pic container (pink background) */}
            <div
              className="animate-floatUpDown absolute w-[50%] lg:w-[70%] aspect-square bg-[#ffecff] rounded-full shadow-mainBoxShadow outline outline-3 outline-[#c24498] overflow-visible"
              style={{ boxSizing: "content-box" }}
            >
              {/* Steefy pic */}
              <img
                src={steefy_pic}
                alt="Steefy"
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(95, 40, 78, 0.7))",
                }}
                className="[clip-path:ellipse(50%_50%_at_50%_50%)] absolute bottom-0 left-[2px]"
              />
            </div>
            <div className="holo m-auto mt-[65%] lg:mt-[87%] w-[23%] lg:w-[30%] h-[5px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
