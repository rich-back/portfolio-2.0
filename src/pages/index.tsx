import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../../components/About";
import Contact from "../../components/Contact";
import WorkExperience from "../../components/WorkExperience";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import { ArrowUpIcon } from "@sanity/icons";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="bg-[rgb(10,10,10)] bg-[radial-gradient(_rgba(255,255,255,0.2)_5.5%,transparent_6%_)] lg:bg-size-custom md:bg-size-custom bg-size-custom-mb text-white/75 h-screen snap-y snap-mandatory overflow-x-hidden z-0">
      <Head>
        <title>RJB - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      {/* spotify playlist */}
      <section
        id="spotify"
        className="snap-start h-screen flex justify-center items-center"
      >
        <motion.iframe
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 1.5,
            delay: 1.5,
          }}
          src="https://open.spotify.com/embed/playlist/7ru8LhIjFNlAyT1JkCl3SD?utm_source=generator&theme=0"
          width="80%"
          height="70%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></motion.iframe>
      </section>

      <footer className="sticky bottom-0 w-full">
        <div className="flex flex-col items-center justify-center">
          <Link href="#hero">
            <ArrowUpIcon className="text-5xl font-thin animate-pulse text-gray-500 hover:text-gray-200 hover:animate-bounce cursor-pointer" />{" "}
          </Link>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
