import React from "react";
import FullScreen from "./FullScreen";
import Card from "./Card";
import "../styles/project.css";

import { Box, Heading } from "@chakra-ui/react";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/img1.jpeg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/img2.jpeg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/img3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/img4.jpeg"),
  },
];

const ProjectSection = () => {
  return (
    <FullScreen
      className="project-cont"
      backgroundColor="black"
      DarkMode
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading className="bio" as={"h1"} id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(2,minmax(0,1fr))"}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            className="card"
            key={project.title}
            title={project.title}
            desc={project.description}
            imag_src={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreen>
  );
};

export default ProjectSection;
