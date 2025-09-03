import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <Experience />
      <Skills />
      <Education />
      <Achievements />
    </div>
  );
};

export default Index;
