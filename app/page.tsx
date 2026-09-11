import { Hero }       from "@/components/sections/Hero";
import { Marquee }    from "@/components/sections/Marquee";
import { About }      from "@/components/sections/About";
import { Skills }     from "@/components/sections/Skills";
import { Projects }   from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Reports }    from "@/components/sections/Reports";
import { Education }  from "@/components/sections/Education";
import { Contact }    from "@/components/sections/Contact";
import { EngineerGlobe } from "@/components/sections/EngineerGlobe";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Reports />
      <Education />
      <Contact />
      <EngineerGlobe />
    </>
  );
}
