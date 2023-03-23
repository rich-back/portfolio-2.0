import { motion } from "framer-motion";
import React from "react";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 3,
      }}
      animate={{
        scale: [3, 0, 2, 0.5, 1.5, 0.8, 1],
        opacity: [1, 0.2, 1, 0.2, 1, 0.2, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-red-400/70 rounded-full h-[200px] w-[200px] mt-52 animate-ping-bg" />
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52 " />
      <div className="absolute border border-[#333333] rounded-full h-[550px] w-[550px] mt-52 " />
      <div className="absolute border border-red-400/50 rounded-full h-[670px] w-[670px] mt-52 animate-pulse-bg1" />
      <div className="absolute border border-red-400/20 rounded-full h-[800px] w-[800px] mt-52 animate-pulse-bg2" />
      <div className="absolute border border-red-400/20 rounded-full h-[800px] w-[900px] mt-52 animate-pulse-bg3" />
      <div className="absolute border border-red-400/10 rounded-full h-[800px] w-[1000px] mt-52 animate-pulse-bg4" />
      <div className="absolute border border-red-400/10 rounded-full h-[800px] w-[1100px] mt-52 animate-pulse-bg5" />
      <div className="absolute border border-red-400/5 rounded-full h-[800px] w-[1200px] mt-52 animate-pulse-bg6" />
    </motion.div>
  );
}
