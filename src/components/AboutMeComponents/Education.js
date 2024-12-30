import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Education({ data }) {
  return (
    <>
      {/* Education Section */}
      <div className="overflow-hidden snap-end md:snap-center h-[calc(100svh-var(--navbar-height))] md:h-[100svh] pt-[50px] pb-[20px] md:pt-[calc(var(--navbar-height)+50px)] lg:pt-[calc(var(--navbar-height)+70px)] bg-clip-border bg-[#28002f]">
        {Object.keys(data.education).length > 0 && (
          <>
            <div className="w-[90%] lg:w-[70%] flex flex-col justify-self-center h-[calc(100svh-var(--navbar-height)-110px)] lg:h-[calc(100svh-var(--navbar-height)-140px)] text-[var(--primary-light)] ">
              {/* Header */}
              <div className="flex justify-center items-center bg-[var(--primary-purple)] py-[10px] mb-[5px]">
                <div className="select-none font-audiowide text-[#28002f] text-center animate-textFade text-2xl lg:text-4xl">
                  Education
                </div>
              </div>
              <div className="py-[30px] md:py-[50px] box-border w-[100%] relative h-full border-2 border-[var(--primary-purple)] bg-[#ffffff12]">
                <table className="overflow-hidden w-[100%] h-[100%] table-fixed border-separate border-spacing-0">
                  <colgroup>
                    <col style={{ width: "29.5%" }} />
                    <col style={{ width: "0.5%" }} />
                    <col style={{ width: "70%" }} />
                  </colgroup>
                  <tbody>
                    {Object.entries(data.education).map(
                      ([key, value], index) => (
                        <tr key={key}>
                          {/* Left Column: Keys */}
                          <td className="align-center text-right px-[20px] md:pl-[20px] md:pr-[30px] text-[0.8em] md:text-[1.3em] lg:text-[1.4em] font-audiowide select-none ">
                            {key}
                          </td>

                          {/* Middle Column: Line and Circles */}
                          <td className="relative align-top">
                            <div className="grid w-full h-full flex flex-col items-center justify-between py-[10px] ">
                              {/* Line */}
                              <div className="absolute h-full w-[2px] md:w-[4px] dashed-line animate-dashUp"></div>
                              {/* Circles */}
                              <div className="relative h-[12px] w-[12px] md:h-[18px] md:w-[18px] rounded-full  bg-[#fdff00] dot justify-self-center left-[-5px] md:left-[-7px]"></div>
                            </div>
                          </td>

                          {/* Right Column: Details */}
                          <td className="align-center px-[20px] md:pr-[20px] md:pl-[30px]">
                            {value.map((line, index) => (
                              <div key={`line-${index}`}>
                                {(index + 1) % 3 === 0 ? (
                                  <div className="mt-[10px] lg:mt-[5px] flex absolute text-[0.7em] md:text-[0.9em] lg:text-[1.2em]">
                                    <FontAwesomeIcon
                                      icon={faLocationDot}
                                      className="hidden md:block fa-xs self-center text-[var(--primary-purple)] mr-[10px]"
                                    />
                                    {line}
                                  </div>
                                ) : (
                                  <div className="text-[0.8em] md:text-[1.3em] lg:text-[1.4em]">
                                    {line}
                                  </div>
                                )}
                              </div>
                            ))}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Education;
