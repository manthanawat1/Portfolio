import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "./Typewriter";
import CustomScrollEvent from "./CustomScrollEvent";

interface Props {
  window?: () => Window;
}

const navItems = [
  {
    section: "Home",
    href: "#home",
    icon: <HomeIcon sx={{ width: 32, height: 32 }} />,
  },
  {
    section: "Project",
    href: "#project",
    icon: <GitHubIcon sx={{ width: 32, height: 32 }} />,
  },
  {
    section: "Experience",
    href: "#experience",
    icon: <BusinessCenterIcon sx={{ width: 32, height: 32 }} />,
  },
];

export default function DrawerAppBar(props: Props) {
  const { window: windowProps } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2 }}
      >
        <Typewriter textShowing={["#WELCOME", "<My world!/>"]} />
      </Typography>
      <Divider />
      <CustomizedList>
        {navItems.map(({ section, href, icon }) => (
          <ListItem
            key={section}
            disablePadding
          >
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => CustomScrollEvent(href)}
            >
              {icon}
              <ListItemText
                className="font-4xl"
                primary={section}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </CustomizedList>
      <span className="mt-auto pb-6 text-2xl font-light text-[#8b8b8b]">
        Developed by Thanawat O.
      </span>
    </Box>
  );

  const container =
    windowProps !== undefined ? () => windowProps().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          boxShadow: "none",
          position: "fixed",
          backgroundColor: "#1e1e1d",
        }}
      >
        <CustomizedToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Typewriter textShowing={["#WELCOME✌", "<My world!/>"]} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ section, href }) => (
              <Button
                key={section}
                sx={{ color: "#fff" }}
                disableRipple={true}
                onClick={() => CustomScrollEvent(href)}
              >
                {section}
              </Button>
            ))}
          </Box>
        </CustomizedToolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
              backgroundColor: "#353534",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

const CustomizedToolbar = styled(Toolbar)`
  background-color: #1e1e1d;
  font-family: "Poppins", sans-serif;

  & .MuiBox-root > .MuiButtonBase-root {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 8px 14px;
    letter-spacing: 2px;
    color: #c6c6c6;
  }

  & .MuiBox-root > .MuiButtonBase-root:hover {
    color: white;
    transform: scale(1.05);
    transition: all 0.2s ease-in;
    background: none;
    text-shadow: 2px 2px 8px white;
  }

  & .MuiIconButton-root {
    padding-left: 3rem;
  }

  & .MuiIconButton-root > svg {
    font-size: 3.5rem;
  }

  @media (max-width: 750px) {
    padding: 0 0 0 1rem;
  }

  @media (min-width: 600px) {
    min-height: 9rem;
  }
`;

const CustomizedList = styled(List)`
  & li > .MuiListItemButton-root {
    padding: 16px;
  }

  & li > .MuiListItemButton-root > .MuiListItemText-root {
    text-align: left;
    padding-left: 1.5rem;
  }

  & li > .MuiListItemButton-root:hover > svg > path {
    fill: #21ef9f;
    transition: fill 0.5s ease-out;
  }

  & li > .MuiListItemButton-root > .MuiListItemText-root > .MuiTypography-root {
    text-transform: uppercase;
    color: #8b8b8b;
    font-size: 3rem;
    font-weight: 500;
    font-family: "Space Mono";

    border-radius: 1.4px;
    display: inline-block;
    position: relative;
  }

  &
    li
    > .MuiListItemButton-root
    > .MuiListItemText-root
    > .MuiTypography-root:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -5px;
    left: 0;
    background-color: #21ef9f;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }

  &
    li
    > .MuiListItemButton-root
    > .MuiListItemText-root
    > .MuiTypography-root:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &
    li
    > .MuiListItemButton-root
    > .MuiListItemText-root
    > .MuiTypography-root:hover {
    color: #21ef9f;
  }
`;
