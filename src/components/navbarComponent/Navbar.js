import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <nav className="navbar">
      <h3
        className={selectedSection === "home" ? "active" : ""}
        onClick={() => handleSectionClick("home")}
      >
        Home
      </h3>
      <h3
        className={selectedSection === "about" ? "active" : ""}
        onClick={() => handleSectionClick("about")}
      >
        About me
      </h3>
      <h3
        className={selectedSection === "projects" ? "active" : ""}
        onClick={() => handleSectionClick("projects")}
      >
        Personal projects
      </h3>
      <h3
        className={selectedSection === "cv" ? "active" : ""}
        onClick={() => handleSectionClick("cv")}
      >
        CV
      </h3>
      <h3
        className={selectedSection === "contact" ? "active" : ""}
        onClick={() => handleSectionClick("contact")}
      >
        Contact
      </h3>

      {/* <ul>
        <li className="one">
          <a href="#">About me</a>
        </li>
        <li className="two">
          <a href="#">Projects</a>
        </li>
        <li className="three">
          <a href="#">CV</a>
        </li>
        <li className="four">
          <a href="#">Contact</a>
        </li>
        <hr />
      </ul> */}
    </nav>
  );
}

export default Navbar;
