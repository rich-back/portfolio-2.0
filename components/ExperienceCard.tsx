import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[95%] md:w-[95%] xl:w-[95%] snap-center bg-[#292929] p-10 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-28 h-28 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={`${experience?.company} logo`}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience?.company}</p>
        <div className="flex justify-center space-x-6 my-2">
          {experience?.technologies.map((technology) => (
            <img
              key={technology?._id}
              className="w-10 h-10 object-contain"
              src={urlFor(technology?.skillImage).url()}
              alt={`${technology?.title} logo`}
            />
          ))}
        </div>
        <p className="uppercase text-sm py-3 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience?.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
