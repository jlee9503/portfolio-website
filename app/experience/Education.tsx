"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Container from "../Container";

const data = {
  degree: "Bachelor of Science in Information Systems",
  timeframe: "2015-2020",
  school: "University of Maryland, Baltimore County (UMBC)",
};

interface EducationDeatilsProps {
  degree: string;
  timeframe: string;
  school: string;
}

const EducationDetails = ({
  degree,
  timeframe,
  school,
}: EducationDeatilsProps) => {
  return (
    <li className="my-4 first:mt-0 last:mb-0 flex flex-col items-center justify-between">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h3 className="capitalize font-medium text-lg md:text-2xl">{degree}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {timeframe} | {school}
        </span>
      </motion.div>
    </li>
  );
};

const Education = () => {

  return (
    <div className="w-full">
      <h1 className="font-semibold text-xl md:text-3xl mb-10 w-full">Education</h1>
      <div className="w-full relative">
        <motion.div
          className="absolute left-0 top-0 w-[4px] h-full bg-indigo-400 dark:bg-orange-400 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <EducationDetails
            degree={data.degree}
            timeframe={data.timeframe}
            school={data.school}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
