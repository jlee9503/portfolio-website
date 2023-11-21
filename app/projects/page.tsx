"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import ProjectGrid from "./ProjectGrid";
import Arrow from "../components/Arrow";

const data = {
  title: "Projects",
  projects: [
    {
      id: "reactjs",
      section: "React JS",
      items: [
        {
          itemId: 1,
          url: "/",
          name: "react project 1",
          description: "This is a project 1",
        },
        {
          itemId: 2,
          url: "/",
          name: "react project 2",
          description: "This is a project 2",
        },
        {
          itemId: 3,
          url: "/",
          name: "react project 3",
          description: "This is a project 3",
        },
      ],
    },
    {
      id: "python",
      section: "Python",
      items: [
        {
          itemId: 1,
          url: "/",
          name: "python project 1",
          description: "This is a project 1",
        },
        {
          itemId: 2,
          url: "/",
          name: "python project 2",
          description: "This is a project 2",
        },
      ],
    },
    {
      id: "oldprojects",
      section: "Old projects",
      items: [
        {
          itemId: 1,
          url: "/",
          name: "old project 1",
          description: "This is a project 1",
        },
        {
          itemId: 2,
          url: "/",
          name: "old project 2",
          description: "This is a project 2",
        },
      ],
    },
  ],
};

const Projects = () => {
  const [selected, setSelected] = useState("reactjs");

  const handleClick = useCallback((section: React.MouseEvent<HTMLElement>) => {
    data.projects.map((project) => {
      if (project.section === section.currentTarget.innerText) {
        setSelected(project.id);
      }
    });
  }, []);

  return (
    <>
      <Container className="min-h-screen flex justify-center items-center w-full px-32 gap-48">
        <Arrow direction="left" href="/about" />
        <motion.div
          className="flex flex-col justify-start gap-6"
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-semibold">{data.title}</h1>
          <div>
            {data.projects.map((project) => (
              <div
                key={project.id}
                className={`w-fit cursor-pointer m-2 pt-2 border-b-2 transition-[border] ease-linear duration-300 hover:border-b-neutral-800 ${
                  selected === project.id
                    ? "border-b-neutral-800"
                    : "border-transparent"
                }`}
                onClick={handleClick}
              >
                {project.section}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ y: -200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {data.projects
            .filter((project) => project.id === selected)
            .map((project) =>
              project.items.map((item) => (
                <ProjectGrid
                  key={item.itemId}
                  url={item.url}
                  name={item.name}
                  description={item.description}
                />
              ))
            )}
        </motion.div>
        <Arrow direction="right" href="/contact" />
      </Container>
    </>
  );
};

export default Projects;
