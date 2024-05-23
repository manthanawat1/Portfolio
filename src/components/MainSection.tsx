import { useRef, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import skillsContext from "../../contexts/skill-context.json";

function MainSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const SocialMedia = () => {
    return (
      <Stack
        direction="row"
        spacing={3}
        className="justify-center sm:justify-start"
      >
        <IconButton
          aria-label="Linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/thanawat-ongkhase-70851929b/"
            )
          }
        >
          <LinkedInIcon sx={{ width: 24, height: 24 }} />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          onClick={() => window.open("https://github.com/manthanawat1")}
        >
          <GitHubIcon sx={{ width: 24, height: 24 }} />
        </IconButton>
      </Stack>
    );
  };

  const SkillIcons = () => {
    return (
      <>
        <span className="pt-28 pb-9 uppercase text-2xl font-medium tracking-wider text-[#8b8b8b]">
          power of abilities
        </span>
        <SkillContainer className="flex gap-[4.5rem] sm:gap-[3rem] flex-wrap justify-center">
          {skillsContext.map(({ skill, path }, index) => (
            <img
              src={path}
              alt={skill}
              key={index}
            />
          ))}
        </SkillContainer>
      </>
    );
  };

  const cardVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: -150,
    },
  };

  return (
    <>
      <MainContainer id="home">
        <ContentContainer
          id="home"
          ref={sectionRef}
        >
          <div className="sm:w-1/2 pt-[2rem] sm:pt-0 text-center sm:text-left">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <span className="text-3xl font-normal text-[#8b8b8b]">
                Software Developer
              </span>
              <h3 className="text-[5rem] md:text-[6rem] xl:text-[7rem] font-medium sm:leading-[9rem] tracking-wider font-spaceMono">
                Hello I'm
              </h3>
              <h3 className="text-[4.8rem] md:text-[6rem] xl:text-[7rem] text-[#21ef9f] font-medium leading-[7rem] tracking-wider font-spaceMono">
                Thanawat O.
              </h3>
              <span className="py-6 sm:py-12 sm:pr-10 md:pr-0 inline-block text-2xl leading-[2.9rem] font-poppins text-[#c6c6c6]">
                I'm passionate about learning and dedicated to creating
                excellent user interfaces. I'm eager to enhance my full-stack
                development skills and improve user experiences. Committed to
                quality and innovation.
              </span>
              <SocialMedia />
            </motion.div>
          </div>
          <div className="order-first sm:order-last sm:w-1/2 sm:h-96 inline sm:flex items-center justify-center py-[2rem] sm:py-0">
            <ImageContainer>
              <img
                src="/images/portrait.png"
                alt="Thanawat Ongkhase"
              />
            </ImageContainer>
          </div>
        </ContentContainer>
        <SkillIcons />
      </MainContainer>
    </>
  );
}

export default MainSection;

const MainContainer = styled("div")({
  height: "calc(100vh - 9rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  "@media (max-width: 40em)": {
    height: "unset",
  },
});

const ContentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  "& .MuiIconButton-root": {
    padding: "4px",
    border: "2px solid #17a76f",
    transition: "all .5s ease-out",
  },

  "& .MuiIconButton-root:hover": {
    backgroundColor: "#17a76f",
  },

  "& .MuiIconButton-root:hover > svg": {
    fill: "#fff",
    filter: "drop-shadow(0 0 5em #61dafbaa)",
  },

  "& .MuiIconButton-root > svg": {
    fill: "#21ef9f",
  },

  "@media (max-width: 40em)": {
    justifyContent: "center",
  },
});

const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "40rem",
  maxHeight: "40rem",
  borderRadius: "50%",
  overflow: "hidden",
  border: "5px solid #fff",
  backgroundImage:
    "radial-gradient(circle, #10754e, #117e54, #12875a, #149161, #159a67, #1fa16d, #27a774, #2eae7a, #3bb382, #47b88a, #52bc92, #5dc19a)",
  boxShadow:
    "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",

  "@media (max-width: 40em)": {
    maxWidth: "26rem",
    maxHeight: "26rem",
  },
});

const SkillContainer = styled("div")({
  "& img": {
    height: "3.5rem",
    objectFit: "contain",
    maskImage: "linear-gradient(to bottom, #17a76f 25%, transparent 100%)",
  },
});
