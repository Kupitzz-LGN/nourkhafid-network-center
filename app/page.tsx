import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Terminal from "@/components/sections/Terminal";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <Stats />
        <FeaturedProjects />
        <Terminal />
        <Skills />
      </main>
    </>
  );
}