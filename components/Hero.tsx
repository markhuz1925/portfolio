import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

function Hero({}: Props) {
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
        src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.18169-9/13394200_10207262054054797_771342677404245927_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFDe8FSrUlwBzmjSDwNja7nzwTJLB65hobPBMksHrmGhvBRELoE_cQ4VK2fBAC87P8&_nc_ohc=N3awnJiL5KQAX9WVHos&_nc_ht=scontent.fmnl3-2.fna&oh=00_AfADmNWNjKIjVer7GD_ntOogkJjtFqQRW9XA6CQI1AQTRQ&oe=63CA6282"
        alt={""}
        className="relative rounded-full h-52 w-52 mx-auto object-cover border border-white"
      />
      <h1 className="text-3xl font-bold text-slate-200 tracking-widest">
        Marko Luther Antiola
      </h1>
      <div>
        <h1 className="text-sm font-light uppercase text-sky-600 pb-8 tracking-[12px]">
          Software Developer
        </h1>
        <h1 className="text-3xl lg:text-4xl font-semibold scroll-px-10 text-yellow-300">
          <span>{text}</span>
          <Cursor />
        </h1>
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
      </div>
    </div>
  );
}

export default Hero;
