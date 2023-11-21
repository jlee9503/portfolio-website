"use client";

import { motion } from "framer-motion";

interface ProjectGridProps {
  url: string;
  name: string;
  description: string;
}

const ProjectGrid = ({ url, name, description }: ProjectGridProps) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div className="w-72 h-48 bg-slate-500">{url}</motion.div>
      <motion.div className="font-semibold text-xl">{name}</motion.div>
      <motion.div className="font-medium">{description}</motion.div>
    </motion.div>
  );
};

export default ProjectGrid;
