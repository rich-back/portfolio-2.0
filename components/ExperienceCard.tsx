import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 md:space-y-7 w-[100%] md:w-[95%] snap-center bg-[#292929] p-4 md:p-7 md:px-16 md:pb-10 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={`${experience?.company} logo`}
      />

      <div className="px-1 md:px-6">
        <h4 className="text-base md:text-xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience?.company}</p>
        <p className="uppercase text-xs md:text-sm py-1 md:py-3 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <div className="flex justify-center space-x-6 my-2 md:my-4">
          {experience?.technologies.map((technology) => (
            <img
              key={technology?._id}
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
              src={urlFor(technology?.skillImage).url()}
              alt={`${technology?.title} logo`}
            />
          ))}
        </div>
        <ul className="list-disc md:space-y-2 ml-5 text-sm md:text-[16px]">
          {experience?.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
