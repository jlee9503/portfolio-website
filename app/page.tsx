"use client";

import Container from "./Container";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon } from "./components/Navbar/SocialIcon";
import { FaShareSquare } from "react-icons/fa";
import Arrow from "./components/Arrow";

export default function Home() {
  return (
    <main>
      <Container className="min-h-screen flex justify-center items-center w-full px-24">
        <div className="flex flex-col gap-8 justify-center items-center">
          <motion.h1
            className="font-bold text-4xl"
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Jungsu L.
            <span className="text-indigo-400 ml-4">Software Developer</span>
          </motion.h1>
          <motion.button
            className="border-[1px] bg-indigo-400 w-fit px-4 py-2 rounded-lg flex justify-between items-center"
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Resume <FaShareSquare className="ml-1" />
          </motion.button>
          <motion.div
            className="flex justify-center items-center gap-5"
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
        <Arrow direction="right" href="/about" />
      </Container>
    </main>
  );
}
