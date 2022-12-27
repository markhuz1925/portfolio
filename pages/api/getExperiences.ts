import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { IExperiences } from "../../typings";

const query = groq`*[_type == "experiences"] {
    ...,
    technologies[] ->
}`;

type Data = {
  experiences: IExperiences[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: IExperiences[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
