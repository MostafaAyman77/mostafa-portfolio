import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero animate-gradient -z-10" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Mostafa Ayman Elalfy
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Frontend & Mobile App Developer
          </p>
          
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-12">
            Crafting beautiful, responsive web and mobile experiences with React, React Native, and modern technologies
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-glow transition-smooth"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-6 justify-center mt-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:mostafa@example.com"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
