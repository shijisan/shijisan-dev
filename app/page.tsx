"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Techs from "@/components/Sections/Techs";
import Header from "@/components/Sections/Header";
import Showcase from "@/components/Sections/Showcase";
import Experience from "@/components/Sections/Experience";
import Contacts from "@/components/Sections/Contacts";
import Projects from "@/components/Sections/Projects";

export type Routes = "About" | "Techs" | "Showcase" | "Experience" | "Projects" | "Contact";

export default function Landing() {
  const [currSect, setCurrSect] = useState<Routes>("About");

  useEffect(() => {
    const sections: Routes[] = ["About", "Techs", "Showcase", "Experience", "Projects", "Contact"];
    const options = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.15,
    };

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as Routes;

          if (timeoutId) clearTimeout(timeoutId);

          timeoutId = setTimeout(() => {
            setCurrSect(id);
            timeoutId = null;
          }, 1500);
        }
      });
    }, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Nav currSect={currSect} onChangeSect={setCurrSect} />

      <main>
        <div className="bg-noise fixed inset-0 pointer-events-none -z-10" />

        <Header currSect={currSect} onChangeSect={setCurrSect} />
        <Techs />
        <div id="Showcase">
          <Showcase />
          <Experience />  
        </div>
        <Projects />
        <Contacts />
      </main>
    </>
  );
}