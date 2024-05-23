import { styled } from "@mui/material/styles";
import CustomScrollEvent from "./CustomScrollEvent";

function Footer() {
  return (
    <footer className="bg-[#181817] sm:mt-[12rem] flex justify-center">
      <div className="max-w-7xl py-[2rem]">
        <p className="text-center text-[4rem] font-spaceMono">
          <strong className="font-spaceMono text-[#21ef9f]">Thank you</strong>{" "}
          for visiting!
        </p>
        <nav className="pt-[3rem] text-[1.8rem]">
          <p className="text-center pb-4 uppercase text-[#8b8b8b] font-light">
            Navigation
          </p>
          <NavigationContainer className="flex space-x-8 justify-center font-light">
            <li>
              <a onClick={() => CustomScrollEvent("#home")}>Home</a>
            </li>
            <li>|</li>
            <li>
              <a onClick={() => CustomScrollEvent("#project")}>Project</a>
            </li>
            <li>|</li>
            <li>
              <a onClick={() => CustomScrollEvent("#experience")}>Experience</a>
            </li>
          </NavigationContainer>
        </nav>
        <p className="text-center font-light pt-[4rem] text-[1.5rem] text-[#c7c7c7]">
          © 2024 <strong className="text-[#21ef9f]">Thanawat.oks</strong> All
          Rights Reserved , Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

const NavigationContainer = styled("ul")({
  "& li": {
    color: "#8b8b8b",
    transition: "all .5s ease-out",
    fontSize: "1.6rem",
  },

  "& li:hover > a": {
    color: "#21ef9f",
    transition: "all .5s ease-out",
  },

  "& li:hover > a:hover": {
    cursor: "pointer",
  },
});
