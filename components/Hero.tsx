import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `{ Hello! This is ${pageInfo?.name} }`,
      "{ Welcome to my portfolio... }",
    ],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 2000,
    deleteSpeed: 30,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.img
        initial={{
          y: -500,
          scale: 0.5,
        }}
        animate={{
          y: [-500, -500, 0],
          scale: [0.5, 0.5, 0.5, 0.5, 1],
        }}
        transition={{
          duration: 5,
        }}
        className="relative rounded-full h-36 w-36 mx-auto object-cover "
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile photo"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[14px]">
          &nbsp;{pageInfo?.role}
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold px-10 pt-5">
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h1>
      </div>
    </div>
  );
}
