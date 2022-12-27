import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { ISkills } from "../../typings";

const query = groq`*[_type == "skills"]`;

type Data = {
  skills: ISkills[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: ISkills[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
