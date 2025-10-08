import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Rocket, Heart, Star, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Concept 1: Dynamic Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 animate-gradient -z-10" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 50%)`
        }}
      />
      
      {/* Concept 2: Floating Geometric Shapes with 3D Effect */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl rotate-12 animate-float border border-white/20" style={{ transform: 'perspective(1000px) rotateX(20deg)' }} />
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-white/10 backdrop-blur-sm rounded-full animate-float border-2 border-white/30" style={{ animationDelay: "2s", transform: 'perspective(1000px) rotateY(20deg)' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-300/20 to-pink-300/20 backdrop-blur-sm rounded-2xl -rotate-12 animate-float border border-white/20" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Concept 3: Playful Animated Icons/Emojis */}
      <div className="absolute top-24 right-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
        <Heart className="w-12 h-12 text-pink-300 drop-shadow-lg animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 left-16 animate-float" style={{ animationDelay: "1.5s" }}>
        <Star className="w-10 h-10 text-yellow-300 drop-shadow-lg" fill="currentColor" />
      </div>
      <div className="absolute top-1/2 right-32 animate-float" style={{ animationDelay: "2.8s" }}>
        <Zap className="w-14 h-14 text-cyan-300 drop-shadow-lg" fill="currentColor" />
      </div>
      <div className="absolute bottom-24 left-1/3 animate-float" style={{ animationDelay: "3.5s" }}>
        <Sparkles className="w-11 h-11 text-purple-300 drop-shadow-lg" fill="currentColor" />
      </div>
      <div className="absolute top-40 left-1/2 animate-float" style={{ animationDelay: "0.8s" }}>
        <Code2 className="w-16 h-16 text-blue-300/60 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-40 right-1/3 animate-float" style={{ animationDelay: "4.2s" }}>
        <Rocket className="w-14 h-14 text-orange-300/60 drop-shadow-lg" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        {/* Main Content Card with Glassmorphism Effect */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500">
            <div className="text-center text-white space-y-6 animate-fade-in-up">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-full text-sm font-semibold mb-4 border border-white/30 shadow-lg hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 animate-pulse" />
                {t('heroWelcome')}
                <Heart className="w-4 h-4 text-pink-300 animate-pulse" fill="currentColor" />
              </div>
              
              {/* Name with enhanced styling */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl [text-shadow:_0_4px_30px_rgba(255,255,255,0.3)]">
                {t('heroName')}
              </h1>
              
              {/* Role with decorative elements */}
              <div className="relative inline-block mb-8">
                <p className="text-2xl md:text-4xl text-white mb-4 font-bold tracking-wide">
                  {t('heroRole')}
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                {t('heroDescription')}
              </p>
          
              {/* CTA Buttons with enhanced styling */}
              <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 font-bold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 group px-8 py-6 text-lg rounded-full"
                >
                  {t('viewProjects')} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("contact")}
                  className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 px-8 py-6 text-lg rounded-full"
                >
                  {t('contactMe')}
                </Button>
              </div>
          
              {/* Social links with enhanced styling */}
              <div className="flex gap-6 justify-center">
                <a 
                  href="https://github.com/MostafaAyman77" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50 hover:scale-125 transition-all duration-300 shadow-xl group"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mostafa-ayman77/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50 hover:scale-125 transition-all duration-300 shadow-xl group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="mailto:mostafaelalfy77@gmail.com"
                  className="p-4 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50 hover:scale-125 transition-all duration-300 shadow-xl group"
                  aria-label="Email Contact"
                >
                  <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Playful scroll indicator */}
      <div className="absolute bottom-8 left-3 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-12 border-3 border-white/70 rounded-full p-2 shadow-2xl bg-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full mx-auto animate-pulse" />
          </div>
          <span className="text-white/60 text-xs font-semibold">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
