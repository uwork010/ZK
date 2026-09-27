import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { ProjectsHeader, ProjectDetail } from "@/components/sections/Projects";
import ProjectSnapZone from "@/components/sections/ProjectSnapZone";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content" className="relative z-10">
        <section id="hero" aria-label="Introduction" className="h-screen">
          <Hero />
        </section>

        <section id="about" aria-label="About the company" className="flex min-h-screen items-center overflow-visible lg:h-screen lg:overflow-hidden">
          <div className="w-full rounded-3xl bg-galaxy-darker/70 py-4 backdrop-blur-sm">
            <About />
          </div>
        </section>

        <section id="projects" aria-label="Sample work concepts" className="flex h-screen items-center overflow-hidden">
          <div className="w-full">
            <ProjectsHeader />
          </div>
        </section>

        <ProjectSnapZone>
          <section id="project-0" aria-label="Sample concept: Connected Product Experience" className="h-screen">
            <ProjectDetail index={0} />
          </section>
          <section id="project-1" aria-label="Sample concept: AI Workflow Studio" className="h-screen">
            <ProjectDetail index={1} />
          </section>
          <section id="project-2" aria-label="Sample concept: Interactive Game World" className="h-screen">
            <ProjectDetail index={2} />
          </section>
          <section id="project-3" aria-label="Sample concept: Cloud Product Platform" className="h-screen">
            <ProjectDetail index={3} />
          </section>
        </ProjectSnapZone>

        <section id="skills" aria-label="Agency capabilities" className="flex min-h-screen items-center overflow-visible lg:h-screen lg:overflow-hidden">
          <div className="w-full rounded-3xl bg-galaxy-darker/70 py-4 backdrop-blur-sm">
            <Skills />
          </div>
        </section>

        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
    </main>
  );
}