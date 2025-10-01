import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    
    // Hero Section
    heroWelcome: '👋 Welcome to my portfolio',
    heroName: 'Mostafa Ayman Elalfy',
    heroRole: 'Frontend & Mobile App Developer',
    heroDescription: 'Crafting beautiful, responsive web and mobile experiences with React, React Native, and modern technologies',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutSubtitle: 'Get to know me better',
    aboutIntro: "Hello! I'm Mostafa, a passionate Frontend and Mobile Application Developer based in Egypt. I specialize in creating beautiful, functional, and user-friendly digital experiences.",
    aboutJourney: "My journey in web development started with a curiosity about how websites work. Today, I focus on building responsive web applications and mobile apps that solve real-world problems.",
    aboutFocus: "I'm currently focused on expanding my expertise in React and React Native, while also exploring modern web technologies and best practices.",
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    technologiesMastered: 'Technologies Mastered',
    
    // Skills Section
    skillsTitle: 'Skills & Technologies',
    skillsSubtitle: 'My technical expertise',
    frontend: 'Frontend',
    mobile: 'Mobile',
    styling: 'Styling',
    tools: 'Tools',
    
    // Projects Section
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'Some of my recent work',
    viewLive: 'View Live',
    viewCode: 'View Code',
    
    // Experience Section
    experienceTitle: 'Experience & Education',
    experienceSubtitle: 'My professional journey',
    present: 'Present',
    
    // Contact Section
    contactTitle: "Let's Work Together",
    contactSubtitle: 'Get in touch with me',
    contactDescription: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    sendMessage: 'Send Message',
    messageSent: 'Message sent successfully!',
    messageError: 'Failed to send message. Please try again.',
    
    // Footer
    allRightsReserved: 'All rights reserved',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'عني',
    skills: 'المهارات',
    projects: 'المشاريع',
    experience: 'الخبرة',
    contact: 'تواصل',
    
    // Hero Section
    heroWelcome: '👋 مرحباً بك في معرض أعمالي',
    heroName: 'مصطفى أيمن الألفي',
    heroRole: 'مطور واجهات أمامية وتطبيقات موبايل',
    heroDescription: 'أصمم تجارب ويب وموبايل جميلة ومتجاوبة باستخدام React و React Native والتقنيات الحديثة',
    viewProjects: 'عرض المشاريع',
    contactMe: 'تواصل معي',
    
    // About Section
    aboutTitle: 'عني',
    aboutSubtitle: 'تعرف علي أكثر',
    aboutIntro: 'مرحباً! أنا مصطفى، مطور واجهات أمامية وتطبيقات موبايل شغوف مقيم في مصر. أتخصص في إنشاء تجارب رقمية جميلة وعملية وسهلة الاستخدام.',
    aboutJourney: 'بدأت رحلتي في تطوير الويب بفضول حول كيفية عمل المواقع. اليوم، أركز على بناء تطبيقات ويب متجاوبة وتطبيقات موبايل تحل مشاكل العالم الحقيقي.',
    aboutFocus: 'أركز حالياً على توسيع خبرتي في React و React Native، بينما أستكشف أيضاً تقنيات الويب الحديثة وأفضل الممارسات.',
    yearsExperience: 'سنوات الخبرة',
    projectsCompleted: 'المشاريع المكتملة',
    technologiesMastered: 'التقنيات المتقنة',
    
    // Skills Section
    skillsTitle: 'المهارات والتقنيات',
    skillsSubtitle: 'خبرتي التقنية',
    frontend: 'الواجهة الأمامية',
    mobile: 'الموبايل',
    styling: 'التصميم',
    tools: 'الأدوات',
    
    // Projects Section
    projectsTitle: 'المشاريع المميزة',
    projectsSubtitle: 'بعض من أعمالي الأخيرة',
    viewLive: 'عرض مباشر',
    viewCode: 'عرض الكود',
    
    // Experience Section
    experienceTitle: 'الخبرة والتعليم',
    experienceSubtitle: 'رحلتي المهنية',
    present: 'الحاضر',
    
    // Contact Section
    contactTitle: 'لنعمل معاً',
    contactSubtitle: 'تواصل معي',
    contactDescription: 'أنا دائماً منفتح لمناقشة مشاريع جديدة أو أفكار إبداعية أو فرص لأكون جزءاً من رؤيتك.',
    yourName: 'اسمك',
    yourEmail: 'بريدك الإلكتروني',
    yourMessage: 'رسالتك',
    sendMessage: 'إرسال الرسالة',
    messageSent: 'تم إرسال الرسالة بنجاح!',
    messageError: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'en' ? 'ar' : 'en';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
