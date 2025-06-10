"use client";
import AboutMe from "@/components/about-me";
import Doctoralia from "@/components/doctoralia";
import Hero from "@/components/hero";
import Navbar from "@/components/nav-bar";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import { useRef } from "react";

interface SectionRefs {
  name: string;
  scroll: React.RefObject<HTMLDivElement | null>;
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const citaRef = useRef<HTMLDivElement>(null);

  const sections: SectionRefs[] = [
    { name: "inicio", scroll: heroRef },
    { name: "sobre mí", scroll: aboutMeRef },
    { name: "servicios destacados", scroll: servicesRef },
    { name: "opiniones", scroll: reviewsRef },
    { name: "agendar cita", scroll: citaRef },
  ];

  const sectionsMobile: SectionRefs[] = [
    { name: "inicio", scroll: heroRef },
    { name: "agendar cita", scroll: citaRef },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
      <Navbar section={sections} sectionMobile={sectionsMobile} />
      <div className="w-full" ref={heroRef}>
        <Hero />
      </div>
      <div className="w-full" ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div className="space-y-8 w-full">
        <div className="w-full" ref={servicesRef}>
          <Services />
        </div>
        <div className="w-full" ref={reviewsRef}>
          <Reviews />
        </div>
        <div className="w-full" ref={citaRef}>
          <Doctoralia />
        </div>
      </div>
    </div>
  );
}
