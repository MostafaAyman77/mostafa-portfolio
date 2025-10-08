import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, MessageSquare  } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t('messageSent'),
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "mostafaelalfy77@gmail.com",
      href: "mailto:mostafaelalfy77@gmail.com",
      color: "from-primary to-secondary"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/mostafa77",
      href: "https://github.com/MostafaAyman77",
      color: "from-secondary to-accent"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mostafa-ayman77",
      href: "https://www.linkedin.com/in/mostafa-ayman77/",
      color: "from-accent to-primary"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />, // Using MessageSquare icon
      label: "WhatsApp",
      value: "wa.me/201020934202", 
      href: "https://wa.me/201020934202", 
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-white">
            {t('contactTitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-none gradient-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t('sendMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  {t('yourName')}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('yourName')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  {t('yourEmail')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('yourEmail')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  {t('yourMessage')}
                </label>
                <Textarea
                  id="message"
                  placeholder={t('yourMessage')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                {t('sendMessage')}
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
            
            {contactLinks.map((link) => (
              <Card 
                key={link.label}
                className="p-6 border-none gradient-card hover:shadow-lg transition-smooth group"
              >
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-smooth`}>
                    {link.icon}
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </a>
              </Card>
            ))}
            
            <Card className="p-8 border-none gradient-card mt-8">
              <h4 className="font-bold text-lg mb-4 text-foreground">Let's Build Something Amazing</h4>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to drop me a message!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
