"use client";

import Image from "next/image";
import Container from "../Container";
import { motion } from "framer-motion";
import Arrow from "../components/Arrow";

const data = {
  title_intro: "About",
  title_experience: "Experience",
  title_skill: "Skill",
  introduction:
    "Hi, I'm Jungsu. Software Developer - Over 2 years experience in web development. Eager to explore my creativity and new technologies. I enjoy working on both frontend and backend, converting unstructured and complex dataset to nice and clean visual application. I consider myself to be a fast-learner, able to grasp new concepts quickly with excellent capacity to remember new information. Over the past 2 years, I worked in healthcare management company, building web/desktop application, creating visual displays of clinical/patient data and updating database structure.",
  profilePic: "profile.png",
};

const About = () => {
  return (
    <main>
      <Container className="min-h-[calc(100vh-10rem)] flex flex-col-reverse justify-center items-center w-full xl:flex-row px-10 md:px-32 gap-12">
        <Arrow href="/" direction="left" />
        <motion.div
          className="basis-1/2 xl:basis-2/3"
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="font-semibold text-3xl mb-4 text-indigo-500 dark:text-orange-400">{data.title_intro}</h1>
          <p>{data.introduction}</p>
        </motion.div>
        <motion.div
          className="basis-1/2 xl:basis-1/3 flex justify-center items-center w-full relative pt-[50%] xl:pt-[30%]"
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={`/images/${data.profilePic}`}
            alt="profile-picture"
            objectFit="cover"
            fill
            sizes="100%"
            className="object-contain rounded-2xl"
          />
        </motion.div>
        <Arrow href="/experience" direction="right" />
      </Container>
    </main>
  );
};

export default About;
