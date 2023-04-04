import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-1 md:px-6 justify-center mx-auto space-y-4 md:space-y-0 items-center"
    >
      <h3 className="absolute top-[60px] md:top-16 uppercase tracking-[14px] md:tracking-[18px] text-gray-500 text-lg md:text-2xl">
        &nbsp;about
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="about section photo"
        className="md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[500px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-0 md:space-y-10 px-0 md:px-10"
      >
        <h4 className="text-xl mb-2 md:text-4xl font-semibold">
          A <span className="underline decoration-red-400">wee bit</span> about
          me...
        </h4>
        <div className="space-y-2 md:space-y-5">
          {pageInfo?.backgroundInfo?.map((block) => (
            <p key={block._key} className="text-sm md:text-[16px]">
              {block.children[0].text}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
