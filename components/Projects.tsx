import React from "react";
import { motion } from "framer-motion";
import { IProjects } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: IProjects[];
};

const Projects = ({ projects }: Props) => {
  return (
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="sectionTitle">Projects</div>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-yellow-400">
        {projects.map((prj) => (
          <div
            key={prj._id}
            className="flex w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center"
          >
            <img
              className="w-[300px] md:w-[700px]"
              src={urlFor(prj.image).url()}
            />
            <div className="flex items-center justify-center space-x-3">
              {prj.technologies.map((pt) => (
                <img
                  key={pt._id}
                  className="h-10 w-10"
                  src={urlFor(pt.image).url()}
                />
              ))}
            </div>
            <div className="space-y-10 px-20 md:px-10 max-w-6xl pb-10">
              <div className="text-xl font-semibold text-center">
                {prj.title}
              </div>
              <div className="text-base text-center md:text-left">
                {prj.summary}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
