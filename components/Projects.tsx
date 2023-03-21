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
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        &nbsp;Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-7 items-center justify-center p-20 md:p-44 h-screen"
            key={project._id}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[350px] rounded-lg"
              src={urlFor(project.projectImage).url()}
              alt="project screenshot"
            />
            <div className="space-y-3 md:space-y-10 lg:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                Project {index + 1} : <span className="underline decoration-red-400">&nbsp;{project.title}&nbsp;</span>
                <span>
                  <SocialIcon
                    className="scale-125 hover:scale-150 transition-all"
                    url={project.linkToBuild}
                    fgColor="#f87171"
                    bgColor="transparent"
                    target={"_blank"}
                  />
                </span>
              </h4>
              <div className="flex space-x-6 my-2 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain p-1 bg-gray-300/40 rounded-md"
                    src={urlFor(technology.skillImage).url()}
                    alt={`${technology.title} logo`}
                  />
                ))}
              </div>
              <p className="text-md text-center w-lg md:max-w-lg lg:max-w-lg ">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[23%] xl:top-[24%] bg-red-400/10 left-0 h-[450px] -skew-y-12"></div>
    </motion.div>
  );
}
