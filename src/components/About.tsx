import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            {t('aboutTitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-20" />
              <img 
                src={profileImage} 
                alt="Mostafa Ayman Elalfy - Frontend Developer" 
                className="relative rounded-3xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-3xl font-bold text-foreground">
              {t('heroWelcome')}
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('aboutIntro')}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('aboutJourney')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-6 text-center hover:shadow-lg transition-smooth border-none gradient-card">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-muted-foreground mt-2">{t('yearsExperience')}</div>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-smooth border-none gradient-card">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-muted-foreground mt-2">{t('projectsCompleted')}</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
