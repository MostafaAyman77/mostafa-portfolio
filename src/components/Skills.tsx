import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Palette, Box } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="h-8 w-8" />,
      color: "from-primary to-secondary",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"]
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-secondary to-accent",
      technologies: ["React Native", "iOS", "Android", "Cross-Platform"]
    },
    {
      category: "Styling & Design",
      icon: <Palette className="h-8 w-8" />,
      color: "from-accent to-primary",
      technologies: ["Tailwind CSS", "Bootstrap", "CSS-in-JS", "Responsive Design"]
    },
    {
      category: "Tools & Others",
      icon: <Box className="h-8 w-8" />,
      color: "from-primary via-secondary to-accent",
      technologies: ["Git", "npm", "Webpack", "REST APIs", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.category}
              className="p-6 hover:shadow-lg transition-smooth border-none gradient-card hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {skill.category}
              </h3>
              
              <div className="space-y-2">
                {skill.technologies.map((tech) => (
                  <div 
                    key={tech}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                    {tech}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Technology badges */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-wrap justify-center gap-3">
            {["HTML5", "CSS3", "JavaScript", "React", "React Native", "TypeScript", "Tailwind CSS", "Bootstrap", "Git"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-foreground hover:shadow-md transition-smooth border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
