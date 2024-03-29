import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { IProjects } from "../../typings";

const query = groq`*[_type == "projects"] {
    ...,
    technologies[] ->
}`;

type Data = {
  projects: IProjects[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: IProjects[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
