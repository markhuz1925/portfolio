import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { IPageInfo } from "../typings";
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: IPageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, setText] = useTypewriter({
    words: [
      "Hello!",
      "I'm a web and mobile app developer",
      "based in Batangas, Philippines.",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 50,
    deleteSpeed: 10,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt={""}
        className="relative rounded-full h-52 w-52 mx-auto object-cover border border-white"
      />
      <div className="text-3xl font-bold text-slate-200 tracking-widest">
        {pageInfo?.name}
      </div>
      <div>
        <div className="text-sm font-light uppercase text-sky-600 pb-8 tracking-[12px]">
          {pageInfo?.role}
        </div>
        <div className="text-3xl lg:text-4xl font-semibold scroll-px-10 text-yellow-300">
          <span>{text}</span>
          <Cursor />
        </div>
      </div>
      <div>
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experiences">
          <button className="heroButton">Experiences</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="#">
          <button className="heroButton">Sample</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
