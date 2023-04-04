import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-4 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[60px] md:top-16 uppercase tracking-[14px] md:tracking-[18px] text-gray-500 text-lg md:text-2xl">
        &nbsp;Experience
      </h3>

      <div className="flex flex-row space-x-1 overflow-x-scroll snap-x mt-2 md:mt-6 snap-mandatory justify-center">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
