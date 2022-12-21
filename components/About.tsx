import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h1>
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
        src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/314729262_10223198626499148_7019278765858409839_n.jpg?stp=dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeH7cPInCToSMJpkLIri_3UM83kuLsXRHiXzeS4uxdEeJYjVdLKLpdBEPBUkPSRrJ1Q&_nc_ohc=oPeQCYTNDfgAX_gGbsr&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfA13fn1FrbFG3zrGI07mVqzJbTYe7rShJ_sPF0xzsavOg&oe=63A7A5B3"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          I&apos;m <span className="text-yellow-400">Marko Luther Antiola</span>
        </h4>
        <p>
          A former OFW (Overseas Filipino Worker) in Saudi Arabia. Being a OFW
          he still managed to do his passion in programming and web development.
          He continue learning and harness his skills in different programming
          languages and web/mobile technologies. During the COVID-19 pandemic he
          decided to go home and pursue his new career in mobile and web
          development. He landed his first freelance work as an{" "}
          <span className="underline decoration-yellow-400">
            Angular Frontend developer
          </span>{" "}
          and hired by different local and abroad companies to build an mobile
          application and web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
