import React from "react";
import Arrow from "../components/Arrow";
import Container from "../Container";
import Education from "./Education";
import Work from "./Work";

const Experience = () => {
  return (
    <main>
      <Container className="min-h-[calc(100vh-10rem)] flex justify-center items-center w-full md:px-32">
        <Arrow href="/about" direction="left" />
        <Education />
        <Work />
        <Arrow href="/projects" direction="right" />
      </Container>
    </main>
  );
};

export default Experience;
