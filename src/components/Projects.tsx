import React from "react";
import { styled } from "@mui/material/styles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectCard";
import ProjectInterface from "../Interfaces/ProjectInterface";
import projectContext from "../contexts/ProjectContext";

const Projects = () => {
  const myProjects: ProjectInterface[] = projectContext;
  const [scrollTriggered, setScrollTriggered] = React.useState(false);
  const handleScrollRef = React.useRef<(() => void) | null>(null);

  handleScrollRef.current = () => {
    if (!scrollTriggered && window.scrollY > 430) {
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
        duration: 1.1,
      },
    },
    hidden: {
      opacity: 0,
      y: 600,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={scrollTriggered ? "visible" : "hidden"}
      id="project"
    >
      <MainContainer>
        <h2 className="text-center text-7xl sm:text-8xl font-bold font-spaceMono">
          Projects
          <RocketLaunchIcon
            sx={{
              width: "8rem",
              height: "8rem",
              marginLeft: "1.4rem",
              fill: "#fcd53f",
            }}
          />
        </h2>
        <div className="px-14 lg:px-0 pt-[9rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-24 sm:gap-20 lg:gap-24">
          {myProjects.map((item, index) => (
            <ProjectDetail
              key={index}
              {...item}
            />
          ))}
        </div>
      </MainContainer>
    </motion.div>
  );
};

export default Projects;

const MainContainer = styled("div")({
  marginTop: "10rem",

  "& .card-container > .MuiPaper-elevation": {
    justifySelf: "center",
  },

  "@media (max-width: 40em)": {
    marginTop: "16rem",
  },
});
