import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:text-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/markhuz1925"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/markhuz1925"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/19_markhuz_25/"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-white cursor-pointer"
      >
        <SocialIcon
          url="mailto:antiolamarkoluther@gmail.com"
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-white">
          Contact Me
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
