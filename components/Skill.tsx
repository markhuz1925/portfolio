import React from "react";
import { motion } from "framer-motion";
import { ISkills } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: ISkills;
  directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
        }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-yellow-400 w-20 h-20 p-3 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <div className="text-sm font-bold text-gray-900 opacity-100">
            {skill.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
