import { format } from "date-fns";
import React from "react";
import { urlFor } from "../sanity";
import { IExperiences } from "../typings";

type Props = {
  experience: IExperiences;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-900 p-10">
      <div className="px-0 md:px-10">
        <div className="text-2xl font-normal">{experience?.jobTitle}</div>
        <div className="font-thin text-lg mt-1">{experience?.company}</div>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-5 w-5 rounded-full"
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>
        <div className="uppercase py-5 text-sm font-light text-gray-300">
          {format(new Date(experience.dateStarted), "MMM yyyy")} -{" "}
          {experience.isCurrentWorking
            ? "Present"
            : format(new Date(experience.dateEnded), "MMM yyyy")}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          {experience.dutiesResponsibilities.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
