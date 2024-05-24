import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import experienceContext from "../contexts/ExperienceContext";

function Experience() {
  const [scrollTriggered, setScrollTriggered] = React.useState(false);
  const handleScrollRef = React.useRef<(() => void) | null>(null);

  handleScrollRef.current = () => {
    if (!scrollTriggered && window.scrollY > 1500) {
      setScrollTriggered(true);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => handleScrollRef.current?.();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTriggered]);

  const cardVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      y: 200,
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={scrollTriggered ? "visible" : "hidden"}
      id="experience"
    >
      <div className="mt-[20rem] mb-[10rem] sm:mb-0">
        <h2 className="text-center text-7xl sm:text-8xl font-bold font-spaceMono">
          Experience
          <span className="spin">&#x2B50;</span>
        </h2>
        <div className="pt-[6rem] sm:pt-[7rem]">
          {experienceContext.map((item, index) => (
            <ExperienceCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
