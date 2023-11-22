"use client";

import Image from "next/image";
import Container from "../Container";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";

const data = {
  title_intro: "About",
  title_experience: "Experience",
  title_skill: "Skill",
  introduction:
    "Hi, I'm Jungsu. Software Developer - Over 2 years experience in web development. Eager to explore my creativity and new technologies. I enjoy working on both frontend and backend, converting unstructured and complex dataset to nice and clean visual application. I consider myself to be a fast-learner, able to grasp new concepts quickly with excellent capacity to remember new information. Over the past 2 years, I worked in healthcare management company, building web/desktop application, creating visual displays of clinical/patient data and updating database structure.",
  profilePic: "/images/profile.jpg",
};

const About = () => {
  return (
    <>
      <Container className="min-h-screen flex justify-center items-center w-full px-32 gap-12">
        <motion.div
          className="basis-2/3"
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="font-semibold text-3xl mb-4">{data.title_intro}</h1>
          <p>{data.introduction}</p>
        </motion.div>
        <motion.div
          className="basis-1/3 flex justify-center items-center w-full relative pt-[30%]"
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={data.profilePic}
            alt="profile-picture"
            objectFit="cover"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </Container>

      <Education />
      <Experience />
    </>
  );
};

export default About;
