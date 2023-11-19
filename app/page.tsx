"use client";

import Container from "./Container";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon } from "./components/Navbar/SocialIcon";
import { FaShareSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <Container className="min-h-screen flex justify-center items-center w-full px-24">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="font-bold text-4xl">
            Jungsu L.
            <span className="text-indigo-400 ml-4">Software Developer</span>
          </h1>
          <button className="border-[1px] bg-indigo-400 w-fit px-4 py-2 rounded-lg flex justify-between items-center">
            Resume <FaShareSquare className="ml-1" />
          </button>
          <div className="flex justify-center items-center gap-5">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <LinkedInIcon />
            </motion.a>
          </div>
        </div>
      </Container>
    </main>
  );
}
