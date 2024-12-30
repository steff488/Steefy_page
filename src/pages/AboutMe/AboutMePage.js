import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./AboutMePage.css";

import Navbar from "../../components/NavbarComponent/Navbar.js";
import PersonalInformation from "../../components/AboutMeComponents/PersonalInformation.js";
import Education from "../../components/AboutMeComponents/Education.js";
import Skills from "../../components/AboutMeComponents/Skills.js";

import logo from "../../assets/logo2.png";

function AboutMePage() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState({});
  const [skills, setSkills] = useState({});
  const [error, setError] = useState(null);

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
      })
      .catch((err) => {
        setError(err.message);
      });
    /********** END READ FROM FILE **********/
  }, []);

  /********** READ FROM FILE **********/
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
        } else if (section === "Skills") {
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
  /********** END READ FROM FILE **********/

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

        <PersonalInformation data={{ personalInfo }} />

        <Education data={{ education }} id="education" />

        <Skills data={{ skills }} id="skills" />
      </div>
    </>
  );
}

export default AboutMePage;
