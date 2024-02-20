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
      id: "web",
      section: "Web Application",
      items: [
        {
          itemId: 1,
          url: "airbnbClone.png",
          name: "Rent app",
          description:
            "Rent property web app that allows to sign-in with an account and reserve your favorite property. Also able to search and add your property saved in the database.",
          skillUsed: [
            "next-js.svg",
            "typescript.svg",
            "tailwindcss.svg",
            "mongodb.svg",
            "prisma.svg",
          ],
          webLink: "https://rent-your-home-five.vercel.app/",
        },
        {
          itemId: 2,
          url: "threejs.png",
          name: "3D Landing page",
          description:
            "Business landing page using Three.js and react map library.",
          skillUsed: ["react.svg", "javascript.svg", "css.svg"],
          webLink: "https://react-threejs-web.vercel.app/",
        },
        {
          itemId: 3,
          url: "ai-image-generator.png",
          name: "AI Image Generator",
          description:
            "Image generating web app using OpenAI API and store generated image in database to share with other users.",
          skillUsed: [
            "react.svg",
            "tailwindcss.svg",
            "express.svg",
            "mongodb.svg",
          ],
          webLink: "https://ai-image-generator-opal-chi.vercel.app/",
        },
      ],
    },
    {
      id: "desktop",
      section: "Desktop Application",
      items: [
        {
          itemId: 1,
          url: "gmailOrganizer_delete.png",
          name: "Gmail Organizer",
          description:
            "Quickly send or schedule email. Delete old emails using date filter feature. Created using Tkinter library.",
          skillUsed: ["python.svg"],
          webLink: "https://github.com/jlee9503/gmail-organizer",
        },
        {
          itemId: 2,
          url: "youtube_downloader.png",
          name: "Youtube Downloader",
          description:
            "Created using Tkinter library. Download your favorite youtube video and store it in your local storage.",
          skillUsed: ["python.svg"],
          webLink: "https://github.com/jlee9503/youtube-downloader",
        },
      ],
    },
    {
      id: "oldprojects",
      section: "Old Projects",
      items: [
        {
          itemId: 1,
          url: "oldPortfolio.png",
          name: "Portfolio website",
          skillUsed: ["react.svg", "Html.svg", "css.svg"],
          webLink: "https://jlee9503.github.io/personal-portfolio/",
          description: "Previous portfolio website created using React.js.",
        },
        {
          itemId: 2,
          url: "amazon_clone.png",
          name: "Amazon Clone",
          skillUsed: ["react.svg", "Html.svg", "css.svg"],
          webLink: "https://jlee9503.github.io/amazon-clone/",
          description: "Amazon UI clone using react.js.",
        },
        {
          itemId: 3,
          url: "ball_destroy.png",
          name: "Pygame projects",
          skillUsed: ["python.svg"],
          webLink: "https://github.com/jlee9503/pygame_projects",
          description: "2D game created using pygame library.",
        },
        {
          itemId: 4,
          url: "grocery_app.png",
          name: "Grocery List",
          skillUsed: ["Html.svg", "css.svg", "javascript.svg"],
          webLink: "https://jlee9503.github.io/simple-grocery-list-using-JS/",
          description: "Simple grocery to-do list using vanlia JS.",
        },
      ],
    },
  ],
};

const Projects = () => {
  const [selected, setSelected] = useState("web");

  const handleClick = useCallback((section: React.MouseEvent<HTMLElement>) => {
    data.projects.map((project) => {
      if (project.section === section.currentTarget.innerText) {
        setSelected(project.id);
      }
    });
  }, []);

  return (
    <main>
      <Container className="min-h-[calc(100vh-10rem)] flex flex-col 2xl:flex-row justify-start md:justify-center items-center w-full px-10 md:px-28 xl:px-60 gap-5 2xl:gap-0">
        <Arrow href="/experience" direction="left" />
        <motion.div
          className="flex flex-col justify-start gap-6 basis-1/3 w-full 2xl:w-fit"
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-semibold text-indigo-500 dark:text-orange-400">{data.title}</h1>
          <div className="flex 2xl:block">
            {data.projects.map((project) => (
              <div
                key={project.id}
                className={`w-fit cursor-pointer m-2 pt-2 border-b-2 transition-[border] ease-linear duration-300 hover:border-b-indigo-400 hover:dark:border-b-orange-400 ${
                  selected === project.id
                    ? "border-b-indigo-400 dark:border-b-orange-400"
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
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 basis-2/3 w-full"
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
                  imgUrl={item.url}
                  name={item.name}
                  description={item.description}
                  webLink={item.webLink}
                  skillUsed={item.skillUsed}
                />
              ))
            )}
        </motion.div>
      </Container>
    </main>
  );
};

export default Projects;
