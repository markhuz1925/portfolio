import React from "react";

type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute blur bg-yellow-300 rounded-full h-52 w-52 animate-pulse mt-[270px]" />
      <div className="absolute blur bg-white rounded-full h-52 w-52 animate-pulse mt-[270px]" />
    </div>
  );
};

export default BackgroundCircle;
