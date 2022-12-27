import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { GetStaticProps } from "next";
import {
  IExperiences,
  IPageInfo,
  IProjects,
  ISkills,
  ISocial,
} from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: IPageInfo;
  experiences: IExperiences[];
  skills: ISkills[];
  projects: IProjects[];
  socials: ISocial[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="mainContainer">
      <Head>
        <title>Marko Luther Antiola&apos;s Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experiences" className="snap-center">
        <Experiences experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe contactInfo={pageInfo} />
      </section>
      <div className="fixed bottom-10 right-10">
        <Link href="#hero">
          <FaArrowAltCircleUp className="text-yellow-400 h-9 w-9" />
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: IPageInfo = await fetchPageInfo();
  const experiences: IExperiences[] = await fetchExperiences();
  const skills: ISkills[] = await fetchSkills();
  const projects: IProjects[] = await fetchProjects();
  const socials: ISocial[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page when a request comes in at most once every 10 seconds.
    revalidate: 10,
  };
};
