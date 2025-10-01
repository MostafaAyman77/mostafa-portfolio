import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero animate-gradient -z-10" />
      
      {/* Floating shapes with enhanced animations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Floating icons */}
      <div className="absolute top-32 right-20 text-white/10 animate-float" style={{ animationDelay: "1s" }}>
        <Code2 className="w-16 h-16" />
      </div>
      <div className="absolute bottom-40 left-32 text-white/10 animate-float" style={{ animationDelay: "3s" }}>
        <Rocket className="w-20 h-20" />
      </div>
      <div className="absolute top-1/3 right-40 text-white/10 animate-float" style={{ animationDelay: "2.5s" }}>
        <Sparkles className="w-12 h-12" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white space-y-6 animate-fade-in-up">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4 border border-white/20 shadow-glow">
            {t('heroWelcome')}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
            {t('heroName')}
          </h1>
          
          <div className="relative inline-block">
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-2xl mx-auto font-semibold">
              {t('heroRole')}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full" />
          </div>
          
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-glow hover:shadow-2xl transition-smooth hover:scale-105 group"
            >
              {t('viewProjects')} 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-semibold transition-smooth hover:scale-105"
            >
              {t('contactMe')}
            </Button>
          </div>
          
          {/* Social links with enhanced styling */}
          <div className="flex gap-6 justify-center mt-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20 hover:border-white/40 transition-smooth hover:scale-110 shadow-lg"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20 hover:border-white/40 transition-smooth hover:scale-110 shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:mostafa@example.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20 hover:border-white/40 transition-smooth hover:scale-110 shadow-lg"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1 shadow-glow">
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
