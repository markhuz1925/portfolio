import { motion } from "framer-motion";
import React from "react";
import { ISkills as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="sectionHeaderContainer">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="sectionTitle"
      >
        Skills
      </motion.div>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((sk) => (
          <Skill key={sk._id} skill={sk} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((sk) => (
          <Skill key={sk._id} skill={sk} directionLeft />
        ))}
      </div>
    </div>
  );
};

export default Skills;
