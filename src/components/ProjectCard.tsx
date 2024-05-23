import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import { CardActionArea } from "@mui/material";
import ProjectInterface from "./ProjectInterface";

export default function ProjectCard({
  projectName,
  detail,
  stack,
  imagePath,
  link,
}: ProjectInterface) {
  return (
    <CustomizedCard onClick={() => window.open(link)}>
      <CardActionArea className="h-full">
        <CustomizedCardMedia image={imagePath} />
        <CustomizedCardContent>
          <div>
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
          <div className="pt-3 pb-3 mt-auto flex flex-wrap gap-[1rem]">
            {stack.map((item, index) => (
              <CustomizedChipContent
                key={index}
                className="font-poppins tracking-wider rounded-full py-1 px-4"
              >
                {item}
              </CustomizedChipContent>
            ))}
          </div>
        </CustomizedCardContent>
      </CardActionArea>
    </CustomizedCard>
  );
}

const CustomizedCard = styled(Card)`
  border: 2px solid #17a76f;
  border-radius: 24px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  box-sizing: border-box;
  max-width: 100%;
  box-shadow: 0px 9px 30px #09432c;

  &:hover {
    box-shadow: 0 0 0 2px #09432c, 8px 8px 0 0 #09432c;
    transform: scale(1.01);
    transition: transform 0.2s ease-in;
  }
`;

const CustomizedCardMedia = styled(CardMedia)`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;

const CustomizedCardContent = styled(CardContent)`
  background-color: #2a2a2a;
  height: calc(100% - 20rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CustomizedChipContent = styled("span")({
  fontSize: "1.2rem",
  background:
    "linear-gradient(300deg, rgba(23, 167, 111, 1) 0%, rgba(58, 99, 70, 1) 78%)",
  border: "2px solid #fff",
});
