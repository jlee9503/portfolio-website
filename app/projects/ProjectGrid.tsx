"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
interface ProjectGridProps {
  imgUrl: string;
  name: string;
  description: string;
  webLink?: string | undefined;
  skillUsed: string[];
}

const ProjectGrid = ({ imgUrl, name, description, webLink, skillUsed }: ProjectGridProps) => {
  return (
    <motion.div
      className="w-full rounded-2xl mb-8 lg:mb-0"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="h-64 relative">
        <Link
          href={webLink == undefined ? "javascript:void(0);" : webLink}
          target={webLink == undefined ? "_self" : "_blank"}
        >
          <Image
            src={`/images/project_img/${imgUrl}`}
            alt={name}
            objectFit="Cover"
            fill
            className="object-cover rounded-xl w-full h-auto border border-black shadow-md shadow-indigo-400 dark:shadow-orange-400 hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl my-1">{name}</div>
        <div className="flex justify-center items-center gap-1 dark:bg-slate-200 dark:rounded-[4px] dark:p-[2px]">
          {skillUsed.map((skill, idx) => (
            <Tooltip key={idx} content={skill.substring(0, skill.length - 4)}>
              <Image
                src={`/images/skill_img/${skill}`}
                alt={skill}
                width={20}
                height={20}
                className="object-cover"
              />
            </Tooltip>
          ))}
        </div>
      </div>
      <div>{description}</div>
    </motion.div>
  );
};

export default ProjectGrid;
