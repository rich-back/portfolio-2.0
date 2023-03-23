import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-md p-2 object-contain border border-gray-500"
        initial={{
          x: directionLeft ? 150 : -150,
          opacity: 0,
          scale: 0,
        }}
        transition={{ duration: 2 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        src={urlFor(skill?.skillImage).url()}
        alt={`${skill?.title} logo`}
      />
    </div>
  );
}
