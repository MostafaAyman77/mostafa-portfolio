import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Frontend Developer",
      organization: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Developing and maintaining responsive web applications using React and modern JavaScript frameworks. Collaborating with design and backend teams to deliver high-quality user experiences.",
      skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      type: "work",
      title: "Mobile App Developer",
      organization: "Digital Innovations",
      period: "2021 - 2022",
      description: "Built cross-platform mobile applications using React Native. Implemented features for iOS and Android platforms, ensuring smooth performance and excellent user experience.",
      skills: ["React Native", "JavaScript", "Mobile Development"]
    }
  ];

  const education = [
    {
      type: "education",
      title: "Bachelor's Degree in Computer Science",
      organization: "University of Technology",
      period: "2017 - 2021",
      description: "Focused on software engineering, web technologies, and mobile application development. Graduated with honors.",
      skills: ["Computer Science", "Software Engineering", "Web Development"]
    },
    {
      type: "education",
      title: "Frontend Development Certification",
      organization: "Online Learning Platform",
      period: "2020",
      description: "Completed comprehensive training in modern frontend development including React, JavaScript, and responsive design principles.",
      skills: ["React", "JavaScript", "CSS"]
    }
  ];

  const renderTimeline = (items: typeof experiences, icon: React.ReactNode) => (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div 
          key={item.title}
          className="relative pl-8 pb-8 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Timeline line */}
          <div className="absolute left-[11px] top-0 h-full w-0.5 bg-gradient-to-b from-primary to-secondary" />
          
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-glow">
            {icon}
          </div>
          
          <Card className="p-6 border-none gradient-card hover:shadow-lg transition-smooth ml-4">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                {item.period}
              </span>
            </div>
            
            <p className="text-primary font-medium mb-3">{item.organization}</p>
            
            <p className="text-muted-foreground mb-4">{item.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>
            {renderTimeline(experiences, <Briefcase className="h-3 w-3" />)}
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            {renderTimeline(education, <GraduationCap className="h-3 w-3" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
