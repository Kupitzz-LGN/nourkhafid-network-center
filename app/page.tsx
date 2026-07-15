import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Terminal from "@/components/sections/Terminal";
import Skills from "@/components/sections/Skills";
import Topology from "@/components/sections/Topology";
import About from "@/components/sections/About";
import Dashboard from "@/components/sections/Dashboard";
import Timeline from "@/components/sections/Timeline";

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
        <Topology />
        <About />
        <Dashboard />
        <Timeline />
      </main>
    </>
  );
}