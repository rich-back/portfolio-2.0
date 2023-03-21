import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import social from "../sanity/schemas/social";
import { Social } from "../typings";
import { NavLink } from "./NavLink";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: 500,
          rotate: -25,
          opacity: 0,
          scale: 0.1,
        }}
        animate={{
          x: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Icons */}
        {socials.map((social) => (
          <SocialIcon
            className="hover:scale-125 transition-all"
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target={"_blank"}
          />
        ))}
      </motion.div>

      {/* <div className="">
          <NavLink></NavLink>
      </div> */}

      <motion.div
        initial={{
          x: -500,
          rotate: 25,
          opacity: 0,
          scale: 0.1,
        }}
        animate={{
          x: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
      >
        {/* Contact Me Link */}
        <SocialIcon
          className="cursor-pointer hover:scale-125 transition-all"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
        />

        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Contact Me
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
