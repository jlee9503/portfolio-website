"use client";

import { motion, useScroll } from "framer-motion";
import Container from "../Container";

interface WorkDetailsProps {
  position: string;
  company: string;
  timeframe: string;
  location: string;
  description: string[];
}

const data = [
  {
    position: "Jr. Web Developer",
    company: "HealthCare Strategies, Inc.",
    timeframe: "Jun 2021 - Nov 2023",
    location: "Columbia MD",
    description: [
      "Build HealthManager web dashboard using patient health data",
      "Update and maintain the desktop application",
      "Retrieve necessary data from SQL database and display on data analytics pages",
    ],
  },
  {
    position: "Crew member",
    company: "Kokee tea",
    timeframe: "Jun 2020 - May 2021",
    location: "Hanover MD",
    description: ["Customer Services", "Managing product stocks in warehouse"],
  },
  {
    position: "Teacher assistant",
    company: "Ace Learning Academy",
    timeframe: "Jun 2015 - May 2020",
    location: "Ellicott City MD",
    description: [
      "Office/Administration works",
      "Managing and recording student data",
    ],
  },
];

const WorkDetails = ({
  position,
  company,
  timeframe,
  location,
  description,
}: WorkDetailsProps) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 flex flex-col items-center justify-between">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h3 className="capitalize font-medium text-lg md:text-2xl">
          {position}&nbsp;<span className="text-indigo-400 dark:text-orange-400">@{company}</span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {timeframe} | {location}
        </span>
        {description.map((list, idx) => (
          <p key={idx}>{list}</p>
        ))}
      </motion.div>
    </li>
  );
};

const Work = () => {

  return (
    <div className="w-full">
      <h1 className="font-semibold text-xl md:text-3xl mb-10 w-full">Experience</h1>
      <div className="w-full relative">
        <motion.div
          className="absolute left-0 top-0 w-[4px] h-full bg-indigo-400 dark:bg-orange-400 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {data.map((work) => (
            <WorkDetails
              key={work.company}
              position={work.position}
              company={work.company}
              timeframe={work.timeframe}
              location={work.location}
              description={work.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
