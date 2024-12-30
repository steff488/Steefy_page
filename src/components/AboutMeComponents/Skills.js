import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Skills({ data }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const { ref: myRef, inView } = useInView();

  useEffect(() => {
    // Reset animation when the component enters the viewport
    if (inView) {
      setVisibleCount(0);
    }
  }, [inView]); // This effect runs whenever `inView` changes

  useEffect(() => {
    if (visibleCount < 20) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 90); // 0.09-second delay for each element
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [visibleCount]);

  const createDivElement = (name, level) => {
    const element = [];
    let leftPosition = 0;

    // Color definitions
    let colorRed = "#dc3462";
    let colorOrange = "#ed773e";
    let colorYellow = "#f6ba32";
    let colorGreen = "#50d942";

    element.push(
      <div
        key="main"
        className="grid relative w-[25%] right-[-5px]"
        style={{ filter: `drop-shadow(0 0 5px ${colorRed})` }}
      >
        <div className="absolute h-fit w-fit text-[white] justify-self-center self-center font-[Audiowide] text-[1.2em] mb-[10px]">
          {name}
        </div>
        <div
          className="w-full h-full bg-gradient-to-r from-[#ff30aa] to-[#dc3462] rounded-l-full border-b-2 border-[#ffffff30]"
          style={{
            clipPath: "inset(80% 0 0 0)",
            WebkitClipPath: "inset(80% 0 0 0)",
          }}
        ></div>
      </div>
    );

    // Function to interpolate between two colors
    const interpolateColor = (color1, color2, factor) => {
      const hex = (x) => {
        const r = parseInt(x.substr(1, 2), 16);
        const g = parseInt(x.substr(3, 2), 16);
        const b = parseInt(x.substr(5, 2), 16);
        return { r, g, b };
      };

      const toHex = (r, g, b) => {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b)
          .toString(16)
          .slice(1)}`;
      };

      const color1RGB = hex(color1);
      const color2RGB = hex(color2);

      const r = Math.round(color1RGB.r + (color2RGB.r - color1RGB.r) * factor);
      const g = Math.round(color1RGB.g + (color2RGB.g - color1RGB.g) * factor);
      const b = Math.round(color1RGB.b + (color2RGB.b - color1RGB.b) * factor);

      return toHex(r, g, b);
    };

    for (let i = 0; i <= 19; i++) {
      let color = colorRed;

      // Transition from red to orange
      if (i >= 3) {
        color = interpolateColor(colorRed, colorOrange, (i - 3) / 5);
      }
      // Transition from orange to yellow
      if (i >= 6) {
        color = interpolateColor(colorOrange, colorYellow, (i - 6) / 5);
      }
      // Transition from yellow to green
      if (i >= 11) {
        color = interpolateColor(colorYellow, colorGreen, (i - 11) / 7);
      }

      element.push(
        <div
          key={i}
          className="w-[3.7%] relative"
          style={{
            left: `-${leftPosition}%`,
            filter:
              i < level && i < visibleCount && inView
                ? `drop-shadow(0 0 5px ${color})`
                : null, // Only apply shadow if visible
          }}
        >
          <div
            className="h-full w-full border-t-2 border-b-2 border-[#ffffff30]"
            style={{
              background:
                i < visibleCount && i < level && inView
                  ? color
                  : "linear-gradient(#00000080, #00000050, #00000080)", // For items not in `level`
              clipPath: "polygon(0 100%, 50% 100%, 100% 0, 50% 0)",
              WebkitClipPath: "polygon(0 100%, 50% 100%, 100% 0, 50% 0)",
              transition: "background 0.5s ease",
            }}
          ></div>
        </div>
      );

      leftPosition += 1.2;
    }

    return (
      <div className="flex w-full h-[30px] md:h-[35px] lg:h-[40px]">
        {element}
      </div>
    );
  };

  return (
    <>
      {/* Skill Section */}
      <div className="overflow-hidden snap-end md:snap-center h-[calc(100svh-var(--navbar-height))] md:h-[100svh] pt-[50px] pb-[20px] md:pt-[calc(var(--navbar-height)+50px)] lg:pt-[calc(var(--navbar-height)+70px)] bg-clip-border bg-[#0b002e]">
        {/* Content container */}
        <div className="w-[90%] lg:w-[70%] flex flex-col md:flex-row justify-self-center">
          {/* Left Side */}
          <div
            className="overflow-hidden overflow-y-scroll box-border bg-[#ffffff12] w-[100%] md:w-[60%] py-[45px] pl-[20px] md:pl-[50px] border-2 border-[var(--primary-blue)]
            text-[var(--primary-light)]
            flex flex-col gap-[60px]
            md:h-[calc(100svh-var(--navbar-height)-180px)]
            h-[calc(100svh-var(--navbar-height)-200px)]
            [&::-webkit-scrollbar]:w-4
            [&::-webkit-scrollbar-track]:bg-[#ffffff12]
            [&::-webkit-scrollbar-thumb]:bg-[var(--primary-pink)]
            [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {Object.keys(data.skills).length > 0 &&
              // Render Skills
              Object.entries(data.skills).map(([key, value]) =>
                value.map((line, i) =>
                  // If it is the name of a skill
                  i % 2 === 1 ? (
                    <div key={i} className="flex justify-center">
                      {createDivElement(line, value[i + 1])}
                    </div>
                  ) : null
                )
              )}
          </div>
          {/* Right Side */}
          <div className="lg:flex lg:flex-col w-[40%]">
            {/* Title */}
            <div
              ref={myRef}
              className="flex justify-center items-center bg-[var(--primary-blue)] py-[10px] ml-[5px] mb-[5px]"
            >
              <div className="select-none font-audiowide text-[#0b002e] text-center animate-textFade text-2xl lg:text-4xl">
                Skills
              </div>
            </div>
            {/* Soft skills container */}
            <div className="hidden md:flex flex-row justify-around lg:p-[10px] lg:ml-[5px] h-[100%] bg-[#ffffff12] border-2 border-[var(--primary-blue)]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
