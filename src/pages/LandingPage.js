import React, { useEffect, useRef } from "react";
import "./LandingPage.css";
import Navbar from "../components/navbarComponent/Navbar.js";
import borderBow from "../assets/icons/bow.png";

import chain52 from "../assets/52.png";
import chain60 from "../assets/60.png";
import chain66 from "../assets/66c.png";
import chain69 from "../assets/69.png";

import bg from "../assets/bg2.jpg";

function LandingPage() {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });

      const backgroundSpeed = 10;
      const backgroundX = (e.pageX / window.innerWidth) * backgroundSpeed;
      const backgroundY = (e.pageY / window.innerHeight) * backgroundSpeed;

      document.body.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    };
    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <>
      <div className="landing-page-container">
        <Navbar />
        <img
          src={chain60}
          data-speed="7"
          className="chain layer"
          style={{
            top: "30px",
            filter: "brightness(40%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "50px",
            color: "#e5e5e5",
            textAlign: "center",
          }}
          className="layer"
          data-speed="4"
        >
          <h2
            style={{
              fontSize: "270px",
              fontFamily: "Audiowide",
              margin: "-40px",
              textShadow: "15px 15px 25px rgba(0, 0, 0, 0.8)",
            }}
          >
            Chains
          </h2>
          <h2
            style={{
              fontSize: "70px",
              fontFamily: "Expletus Sans",
              marginTop: "-70px",
              paddingLeft: "150px",
              textShadow: "15px 15px 25px rgba(0, 0, 0, 0.8)",
            }}
          >
            Omg so many chains...
          </h2>
        </div>
        <img
          src={chain66}
          data-speed="2"
          className="chain layer"
          style={{
            filter: "brightness(75%)",
          }}
        />
        {/* <img src={borderBow} className="bow" alt="decorative bow" />
    <div className="outer">
      <i className="top left"></i>
      <i className="top right"></i>
      <div className="inner">
        <div className="inner-right-bottom">
          <i className="top left" style={{ backgroundImage: "none" }}></i>
          <i className="top right" style={{ backgroundImage: "none" }}></i>
          <div className="content">{""}</div>
          <i className="bottom bottom-right"></i>
          <i className="bottom bottom-left"></i>
        </div>
      </div>
      <i className="bottom right"></i>
      <i className="bottom left"></i>
    </div> */}
      </div>
    </>
  );
}

export default LandingPage;
