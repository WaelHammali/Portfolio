import { Hero }       from "@/components/sections/Hero";
import { Skills }     from "@/components/sections/Skills";
import { Projects }   from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Reports }    from "@/components/sections/Reports";
import { Education }  from "@/components/sections/Education";
import { Contact }    from "@/components/sections/Contact";
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
      <Skills />
      <Projects />
      <Experience />
      <Reports />
      <Education />
      <Contact />
    </>
  );
}
