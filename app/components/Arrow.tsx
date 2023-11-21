"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

interface ArrowProps {
  direction: string;
  href: string;
}

const Arrow = ({ direction, href }: ArrowProps) => {
  return (
    <motion.div
      className={`fixed w-fit ${direction === "left" ? "left-4" : "right-4"}`}
      initial={{ opacity: 0 }}
      transition={{ duration: 2, delay: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Link href={href}>
        {direction === "left" ? (
          <FaArrowAltCircleLeft size={30} />
        ) : (
          <FaArrowAltCircleRight size={30} />
        )}
      </Link>
    </motion.div>
  );
};

export default Arrow;
