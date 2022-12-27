import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { ISocial } from "../typings";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: ISocial[];
};

function Header({ socials }: Props) {
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="white"
            bgColor="transparent"
          />
        ))}
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
        className="flex flex-row items-center"
      >
        <Link href={"#contact"}>
          <FaEnvelope className="h-6 w-6" />
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
