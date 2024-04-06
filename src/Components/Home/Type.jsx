import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "PERN Stack Developer",
          "Passionate Blockchain Enthusiast",
          "Effective Problem Solver",
          "Crtical Thinker",
          "Aspiring Developer",
          "Embedded Systems Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
