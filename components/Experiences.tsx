import { motion } from "framer-motion";
import React from "react";
import { IExperiences } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: IExperiences[];
};

const Experiences = ({ experiences }: Props) => {
  return (
    <div className="sectionHeaderContainer overflow-hidden">
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
        Experiences
      </motion.div>
      <div className="text-left w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-slate-700 scrollbar-thumb-yellow-400">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
