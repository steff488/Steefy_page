import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function PersonalInformation({ data }) {
  const [expandedSections, setExpandedSections] = useState({});
  const { ref: myRef, inView } = useInView();

  const [bar1Percentage, setBar1Percentage] = useState(
    () => Math.floor(Math.random() * (85 - 10 + 1)) + 10
  );
  const [bar2Percentage, setBar2Percentage] = useState(
    () => Math.floor(Math.random() * (50 - 5 + 1)) + 5
  );
  const [bar3Percentage, setBar3Percentage] = useState(
    () => Math.floor(Math.random() * (90 - 50 + 1)) + 50
  );

  useEffect(() => {
    /* Bars Animation */
    const interval = setInterval(() => {
      setBar1Percentage((prev) => {
        const randomChange = Math.floor(Math.random() * (40 + 1)) - 20;
        return Math.min(85, Math.max(10, prev + randomChange));
      });

      setBar2Percentage((prev) => {
        const randomChange = Math.floor(Math.random() * (20 + 1)) - 10;
        return Math.min(50, Math.max(5, prev + randomChange));
      });

      setBar3Percentage((prev) => {
        const randomChange = Math.floor(Math.random() * (100 + 1)) - 50;
        return Math.min(90, Math.max(50, prev + randomChange));
      });
    }, 500);
    /* End Bars Animation */

    /* Initial default category state - open or closed */
    const initialSectionsState = {
      Name: true,
      Age: true,
      Nationality: true,
      Gender: true,
      Hobbies: false,
      "Things I Adore": false,
    };
    setExpandedSections(initialSectionsState);

    return () => clearInterval(interval);
  }, []);

  const toggleExpand = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Personal Information Section */}
      <div className="overflow-hidden snap-end md:snap-center h-[calc(100svh-var(--navbar-height))] md:h-[100svh] pt-[50px] pb-[20px] md:pt-[calc(var(--navbar-height)+50px)] lg:pt-[calc(var(--navbar-height)+70px)] bg-clip-border bg-[#3f1333]">
        {/* Content container */}
        <div className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row justify-self-center">
          {/* Left Side */}
          <div className="lg:flex lg:flex-col">
            {/* Title */}
            <div
              ref={myRef}
              className="h-fit bg-[var(--primary-pink)] text-[#3f1333] font-audiowide py-[10px] px-[10px] mb-[5px] lg:mr-[5px]"
            >
              <div className="select-none animate-textFade text-2xl lg:text-4xl">
                Personal
              </div>
              <div className="select-none animate-textFade pr-[10px] text-2xl lg:text-4xl">
                Information
              </div>
            </div>
            {/* Bars container */}
            <div className="hidden lg:flex flex-row justify-around lg:p-[10px] lg:mr-[5px] h-[100%] bg-[#ffffff12] border-2 border-[var(--primary-pink)]">
              {/* Bar 1 section */}
              <div className="grid w-[30%] h-[100%] py-[10%] border border-[var(--primary-light)] bg-[#ffffff12]">
                {/* Bar */}
                <div className="relative flex flex-col h-[100%] w-[40%] py-[3px] justify-self-center border border-[var(--primary-light)]">
                  {/* Grey Part */}
                  <div className="absolute top-0 bg-[#ffffff99] h-[100%] w-[100%] p-[3px] bg-clip-content"></div>
                  {/* Glow Part */}
                  <div
                    className="z-[10] shadow-barGlow bg-[var(--primary-pink)] mx-[3px]"
                    style={{
                      height: `${bar1Percentage}%`,
                      transition: "height 0.8s",
                    }}
                  ></div>
                  {/* Line */}
                  <div className="relative left-[-20%] h-[3px] bg-[var(--primary-pink)] w-[140%]"></div>
                </div>
              </div>

              {/* Bar 2 section */}
              <div className="grid w-[30%] h-[100%] py-[10%] border border-[var(--primary-light)] bg-[#ffffff12]">
                {/* Bar */}
                <div className="relative flex flex-col h-[100%] w-[40%] py-[3px] justify-self-center border border-[var(--primary-light)]">
                  {/* Grey Part */}
                  <div className="absolute top-0 bg-[#ffffff99] h-[100%] w-[100%] p-[3px] bg-clip-content"></div>
                  {/* Glow Part */}
                  <div
                    className="z-[10] shadow-barGlow bg-[var(--primary-pink)] mx-[3px]"
                    style={{
                      height: `${bar2Percentage}%`,
                      transition: "height 0.8s",
                    }}
                  ></div>
                  {/* Line */}
                  <div className="relative left-[-20%] h-[3px] bg-[var(--primary-pink)] w-[140%]"></div>
                </div>
              </div>

              {/* Bar 3 section */}
              <div className="grid w-[30%] h-[100%] py-[10%] border border-[var(--primary-light)] bg-[#ffffff12]">
                {/* Bar */}
                <div className="relative flex flex-col h-[100%] w-[40%] py-[3px] justify-self-center border border-[var(--primary-light)]">
                  {/* Grey Part */}
                  <div className="absolute top-0 bg-[#ffffff99] h-[100%] w-[100%] p-[3px] bg-clip-content"></div>
                  {/* Glow Part */}
                  <div
                    className="z-[10] shadow-barGlow bg-[var(--primary-pink)] mx-[3px]"
                    style={{
                      height: `${bar3Percentage}%`,
                      transition: "height 0.8s",
                    }}
                  ></div>
                  {/* Line */}
                  <div className="relative left-[-20%] h-[3px] bg-[var(--primary-pink)] w-[140%]"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div
            className="overflow-hidden overflow-y-scroll box-border bg-[#ffffff12] w-[100%] py-[15px] lg:w-[100%] border-2 border-[var(--primary-pink)]
                  lg:h-[calc(100svh-var(--navbar-height)-140px)]
                  h-[calc(100svh-var(--navbar-height)-200px)]
                  [&::-webkit-scrollbar]:w-4
                  [&::-webkit-scrollbar-track]:bg-[#ffffff12]
                  [&::-webkit-scrollbar-thumb]:bg-[var(--primary-blue)]
                  [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {/* Render Personal Information */}
            {Object.keys(data.personalInfo).length > 0 &&
              Object.entries(data.personalInfo).map(([key, value], index) => (
                <div
                  key={index}
                  className={`text-[var(--primary-light)] mb-[5px] lg:mb-[10px] ${
                    inView ? "opacity-0 animate-fadeIn" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`, // Delay for each section
                  }}
                >
                  <span
                    className="select-none mx-[15px] py-[5px] pl-[5%] cursor-pointer flex items-center font-[Audiowide] hover:bg-[linear-gradient(90deg,_rgba(255,_49,_186,_1)_2%,_rgba(194,_68,_152,_0.5)_2%,_rgba(194,_68,_152,_0.5)_98%,_rgba(255,_49,_186,_1)_98%)] hover:text-[var(--primary-blue)]"
                    onClick={() => toggleExpand(key)}
                  >
                    <FontAwesomeIcon
                      icon={expandedSections[key] ? faCaretDown : faCaretRight}
                      className="fa-xs text-[var(--primary-blue)]"
                    />
                    &nbsp;
                    <p className="text-[1em] lg:text-[1.5em]">{key}</p>
                  </span>
                  {/* Toggle visibility of the value lines */}
                  {expandedSections[key] && (
                    <div>
                      {value.map(
                        (line, i) =>
                          line &&
                          line.trim() !== "" && (
                            <span
                              className="text-[1em] lg:text-[1.2em] mx-[15px] py-[5px] pl-[15%] md:pl-[12%] lg:pl-[12%] block hover:bg-[linear-gradient(90deg,_rgba(255,_49,_186,_1)_2%,_rgba(194,_68,_152,_0.5)_2%,_rgba(194,_68,_152,_0.5)_98%,_rgba(255,_49,_186,_1)_98%)] hover:text-[var(--primary-blue)]"
                              key={i}
                            >
                              {line}
                            </span>
                          )
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
