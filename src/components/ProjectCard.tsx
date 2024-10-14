import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import ProjectInterface from "../Interfaces/ProjectInterface";

export default function ProjectCard({
  projectName,
  detail,
  stack,
  imagePath,
  link,
}: ProjectInterface) {
  return (
    <CustomizedCard
      className="bg-[#2a2a2a]"
      onClick={() => window.open(link)}>
      <CardMedia
        component="img"
        image={imagePath}
        sx={{
          height: "auto",
          width: "100%",
          objectFit: "contain",
        }}
      />
      <div className="px-8 pt-8">
        <span className="font-poppins font-medium text-[1.3rem] text-[#8e8e8e] uppercase">
          Click here to visit!
        </span>
        <h2 className="font-poppins leading-[3rem] font-bold text-4xl text-[#f8f8f8]">
          {projectName}
        </h2>
        <div className="py-6 font-poppins leading-[2.5rem] font-light text-2xl text-[#c6c6c6]">
          {detail}
        </div>
      </div>
      <div className="px-8 pt-6 pb-8 mt-auto flex flex-wrap gap-[1rem]">
        {stack.map((item, index) => (
          <CustomizedChipContent
            key={index}
            className="font-poppins tracking-wider rounded-full py-1 px-4">
            {item}
          </CustomizedChipContent>
        ))}
      </div>
    </CustomizedCard>
  );
}

const CustomizedCard = styled(Card)`
  background-color: #2a2a2a;
  border: 2px solid #17a76f;
  border-radius: 24px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  box-sizing: border-box;
  max-width: 100%;
  box-shadow: 0px 9px 30px #09432c;
  transition: transform 0.2s ease-in;

  &:hover {
    border: 2px solid #39d89b;
    cursor: pointer;
    box-shadow: 0 0 0 2px #09432c, 8px 8px 0 0 #09432c;
    transform: scale(1.04);
  }
`;

const CustomizedChipContent = styled("span")({
  fontSize: "1.2rem",
  background:
    "linear-gradient(300deg, rgba(23, 167, 111, 1) 0%, rgba(58, 99, 70, 1) 78%)",
  border: "2px solid #fff",
});
