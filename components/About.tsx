import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >

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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[500px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-red-400">wee bit</span> about
          me...
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          molestie mauris. Fusce diam nunc, pharetra pharetra tortor vel,
          sagittis congue nisi. Aenean sollicitudin dui vel scelerisque
          convallis. Morbi at eros sit amet magna consequat aliquet. Aliquam
          erat volutpat. Vivamus sagittis purus ac felis lobortis condimentum.
          Vestibulum vitae mollis lacus.
        </p>
      </motion.div>
    </motion.div>
  );
}
