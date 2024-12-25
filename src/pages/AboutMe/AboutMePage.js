import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../utils/CustomHoverEffect.js";

import "./AboutMePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCaretRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbarComponent/Navbar.js";

import logo from "../../assets/logo2.png";

function AboutMePage() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState({});
  const [skills, setSkills] = useState({});
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

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
    fetch("/about_me.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch the information file. HTTP status: ${response.status}`
          );
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.includes("text/plain")) {
          throw new Error(
            "Failed to fetch the information file. The file is not in plain text format or it is missing."
          );
        }
        return response.text();
      })
      .then((content) => {
        const { personalInfo, education, skills } = parseFileContent(content);
        setPersonalInfo(personalInfo);
        setEducation(education);
        setSkills(skills);

        const initialSectionsState = {
          Name: true,
          Age: true,
          Nationality: true,
          Gender: true,
          Hobbies: false,
          "Things I Adore": false,
        };

        setExpandedSections(initialSectionsState);
      })
      .catch((err) => {
        setError(err.message);
      });

    const interval = setInterval(() => {
      // Generate a random change between -20 and 20
      const randomChange1 = Math.floor(Math.random() * (40 + 1)) - 20;
      const newPercentage1 = Math.min(
        85,
        Math.max(10, bar1Percentage + randomChange1)
      );
      setBar1Percentage(newPercentage1);

      // Generate a random change between -10 and 10
      const randomChange2 = Math.floor(Math.random() * (20 + 1)) - 10;
      const newPercentage2 = Math.min(
        50,
        Math.max(5, bar2Percentage + randomChange2)
      );
      setBar2Percentage(newPercentage2);

      // Generate a random change between -50 and 50
      const randomChange3 = Math.floor(Math.random() * (100 + 1)) - 50;
      const newPercentage3 = Math.min(
        90,
        Math.max(50, bar3Percentage + randomChange3)
      );
      setBar3Percentage(newPercentage3);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const parseFileContent = (content) => {
    const lines = content.split("\n");
    const personalInfo = {};
    const education = {};
    const skills = {};
    let currentSection = null;
    let currentKey = null;

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("-")) {
        const section = trimmedLine.replace("-", "").trim();
        if (section === "Personal Information") {
          currentSection = personalInfo;
        } else if (section === "Education") {
          currentSection = education;
        } else if (section === "Soft Skills") {
          currentSection = skills;
        } else {
          currentSection = null;
        }

        currentKey = null;
      } else if (currentSection && trimmedLine) {
        const colonIndex = trimmedLine.indexOf(":");
        if (colonIndex !== -1) {
          const key = trimmedLine.slice(0, colonIndex).trim();
          const value = [trimmedLine.slice(colonIndex + 1).trim()];
          currentSection[key] = value;
          currentKey = key;
        } else if (currentKey) {
          currentSection[currentKey].push(trimmedLine);
        }
      }
    });

    return {
      personalInfo,
      education,
      skills,
    };
  };

  const toggleExpand = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* About me page container */}
      <div className="snap-mandatory snap-y h-[100svh] bg-mesh-noise bg-no-repeat bg-cover overflow-hidden overflow-y-scroll lg:overflow-auto">
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            className="hidden lg:block absolute left-[5%] top-[25px] h-[calc(var(--navbar-height)-15px)] cursor-pointer"
          />
        </Link>
        <Navbar />
        {/* Error if file can't be read */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Personal Information Section */}
        <div className="overflow-hidden snap-end md:snap-center h-[calc(100svh-var(--navbar-height))] md:h-[100svh] pt-[50px] pb-[20px] md:pt-[calc(var(--navbar-height)+50px)] lg:pt-[calc(var(--navbar-height)+70px)] bg-clip-border bg-[#3f1333]">
          {/* Content container */}
          <div className="w-[80%] lg:w-[70%] flex flex-col lg:flex-row justify-self-center">
            {/* Left Side */}
            <div className="lg:flex lg:flex-col">
              {/* Title */}
              <div className="h-fit bg-[var(--primary-pink)] text-[#3f1333] font-audiowide py-[10px] px-[10px] mb-[5px] lg:mr-[5px]">
                <h1 className="animate-textFade">Personal</h1>
                <h1 className="animate-textFade pr-[10px]">Information</h1>
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
                      className="z-[10] shadow-barGlow bg-[var(--primary-pink)] mx-[3px] bar"
                      style={{ height: `${bar1Percentage}%` }}
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
                      className="z-[10] shadow-barGlow bg-[var(--primary-pink)] mx-[3px] bar"
                      style={{ height: `${bar2Percentage}%` }}
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
                      className="z-[10] shadow-barGlow bg-[var(--primary-pink)] mx-[3px] bar"
                      style={{ height: `${bar3Percentage}%` }}
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
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {/* Render Personal Information */}
              {Object.keys(personalInfo).length > 0 &&
                Object.entries(personalInfo).map(([key, value], index) => (
                  <div
                    key={index}
                    className="text-[var(--primary-light)] text-[1.5rem] opacity-0 animate-fadeIn mb-[10px]"
                    style={{
                      animationDelay: `${index * 0.2}s`, // Delay for each section
                    }}
                  >
                    <span
                      className="select-none mx-[15px] py-[5px] pl-[5%] cursor-pointer flex items-center font-[Audiowide] custom-hover-bg hover:text-[var(--primary-blue)]"
                      onClick={() => toggleExpand(key)}
                    >
                      <FontAwesomeIcon
                        icon={
                          expandedSections[key] ? faCaretDown : faCaretRight
                        }
                        className="fa-xs text-[var(--primary-blue)]"
                      />
                      &nbsp;<strong>{key}</strong>
                    </span>
                    {/* Toggle visibility of the value lines */}
                    {expandedSections[key] && (
                      <div>
                        {value.map(
                          (line, i) =>
                            line &&
                            line.trim() !== "" && (
                              <span
                                className="mx-[15px] py-[5px] pl-[15%] md:pl-[12%] lg:pl-[12%] block custom-hover-bg hover:text-[var(--primary-blue)]"
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

        {/* Education Section */}
        <div className="snap-end md:snap-center h-[calc(100svh-var(--navbar-height))] md:h-[100svh] pt-[calc(var(--navbar-height)+100px)] px-[10%] bg-clip-border bg-[#28002f]">
          {Object.keys(education).length > 0 && (
            <div className="text-[var(--primary-light)]">
              <h1>Education</h1>
              {/* Render Education */}
              {Object.entries(education).map(([key, value], index) => (
                <p key={index}>
                  <strong>{key}:</strong>
                  {value.map((line, i) => (
                    <span key={i}>
                      {/* Conditionally render the icon only for locations */}
                      {(i + 1) % 3 === 0 && (
                        <>
                          <FontAwesomeIcon icon={faLocationDot} />
                          &nbsp;
                        </>
                      )}
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="snap-end md:snap-center h-[calc(100svh-var(--navbar-height))] md:h-[100svh] pt-[calc(var(--navbar-height)+100px)] px-[10%] bg-clip-border bg-[#0b002e]">
          {Object.keys(skills).length > 0 && (
            <div className="text-[var(--primary-light)]">
              <h1>Skills</h1>
              {/* Render Skills */}
              {Object.entries(skills).map(([key, value], index) => (
                <p key={index}>
                  <strong>{key}:</strong>
                  {value.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AboutMePage;
