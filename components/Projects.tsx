import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0 "
    >
      <h3 className="absolute top-[60px] md:top-16 uppercase tracking-[14px] md:tracking-[18px] text-gray-500 text-lg md:text-2xl">
        &nbsp;projects
      </h3>

      <div className="scrollbar-thin scrollbar-track-slate-200/80 scrollbar-thumb-red-400 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects?.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-44 h-screen"
            key={project?._id}
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-h-[45%] md:max-h-[70%] rounded-lg"
              src={urlFor(project?.projectImage).url()}
              alt={`project ${index + 1} screenshot`}
            />
            <div className="space-y-2 md:space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-3xl md:mt-2 font-semibold text-center">
                Project {index + 1} :{" "}
                <span className="text-red-400">
                  &nbsp;{project?.title}&nbsp;
                </span>
                <span>
                  <SocialIcon
                    className="scale-110 md:scale-125 hover:scale-150 transition-all"
                    url={project?.linkToBuild}
                    fgColor="white"
                    bgColor="transparent"
                    target={"_blank"}
                  />
                </span>
              </h4>
              <div className="relative flex space-x-6 my-2 justify-center">
                {project?.technologies?.map((technology) => (
                  <img
                    key={technology?._id}
                    className="w-9 h-9 md:w-12 md:h-12 object-contain p-1 bg-gray-200/40 rounded-md"
                    src={urlFor(technology?.skillImage).url()}
                    alt={`${technology?.title} logo`}
                  />
                ))}
              </div>
              <p className="text-sm pt-2 md:text-md text-center w-screen md:max-w-lg px-2 md:px-0">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[23%] xl:top-[24%] bg-red-400/10 left-0 h-[450px] -skew-y-6"></div>
    </motion.div>
  );
}
