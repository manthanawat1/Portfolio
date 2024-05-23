import React from "react";
import { TypeAnimation } from "react-type-animation";

interface TypewriterInterface {
  textShowing: string[];
}

const Typewriter: React.FC<TypewriterInterface> = ({ textShowing }) => {
  const context = textShowing.flatMap((item) => [item, 3000]);

  return (
    <TypeAnimation
      sequence={context}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        display: "inline-block",
        fontFamily: "Space Mono",
        fontWeight: "500",
        fontSize: "3rem",
        letterSpacing: "0.2rem",
      }}
    />
  );
};

export default Typewriter;
