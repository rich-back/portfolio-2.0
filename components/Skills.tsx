import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-[60px] md:top-16 uppercase tracking-[14px] md:tracking-[18px] text-gray-500 text-lg md:text-2xl">
        &nbsp;skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 p-20">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
