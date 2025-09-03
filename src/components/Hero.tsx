import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-up">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">Prem Kagrani</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Senior Software Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bangalore, Karnataka</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(+91) 8564814753</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>premkagrani.mnnit@gmail.com</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="glow-effect" asChild>
              <a href="https://github.com/premkagrani" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="glow-effect" asChild>
              <a href="https://linkedin.com/in/premkagrani" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-glow glow-effect text-lg px-8 py-3">
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;