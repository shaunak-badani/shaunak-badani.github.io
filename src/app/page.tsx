import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

import {
  personalInfo,
  skills,
  projects,
  experience,
  education,
} from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto flex flex-col gap-16">
        <Hero
          name={personalInfo.name}
          title={personalInfo.title}
          imageUrl={personalInfo.imageUrl}
        />

        <About content={personalInfo.about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Education education={education} />

        <Contact contact={personalInfo.contact} />
      </main>
    </div>
  );
}
