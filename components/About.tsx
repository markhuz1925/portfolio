import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { IPageInfo } from "../typings";

type Props = {
  pageInfo: IPageInfo;
};

const About = ({ pageInfo }: Props) => {
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
        About
      </motion.div>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePicture).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <div className="text-4xl font-semibold">
          I&apos;m <span className="text-yellow-400">{pageInfo?.name}</span>
        </div>
        <div className="text-base">{pageInfo?.backgroundInformation}</div>
      </motion.div>
    </div>
  );
};

export default About;
