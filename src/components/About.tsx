import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            About Me
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
              Hi, I'm Mostafa 👋
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Frontend and Mobile App Developer with expertise in creating beautiful, 
              responsive, and user-friendly applications. My journey in web development started with a 
              curiosity about how websites work, and has evolved into a deep love for crafting exceptional 
              digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in modern JavaScript frameworks like React and React Native, and I'm constantly 
              learning and exploring new technologies to stay at the forefront of web development. Whether 
              it's building responsive websites or developing cross-platform mobile applications, I'm 
              committed to writing clean, maintainable code that delivers real value.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-6 text-center hover:shadow-lg transition-smooth border-none gradient-card">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-smooth border-none gradient-card">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-muted-foreground mt-2">Projects Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
