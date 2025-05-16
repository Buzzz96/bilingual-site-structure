
import React, { createContext, useState, useEffect, useContext } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Home page
    'home.title': 'Développeur Full Stack & DevOps',
    'home.subtitle': 'Bientôt diplômé. Ouvert aux opportunités en CDI',
    'home.about': 'À propos',
    'home.about.text': 'Ingénieur Full Stack & DevOps en dernière année à l\'ENIB, avec une double expérience chez Orange (stage et alternance). Spécialiste Java Spring Boot, Vue.js, Angular, CI/CD (Jenkins, GitLab), Docker, MariaDB, SQL et déploiement Cloud. Disponible pour un CDI dès septembre 2025.',
    'home.cta': 'Voir mon parcours',
    
    // Experience page
    'experience.title': 'Expérience',
    'experience.current': 'Présent',
    'experience.alternance.title': 'Développeur Full Stack et DevOps (Alternance)',
    'experience.alternance.company': 'Orange Business',
    'experience.alternance.period': 'Septembre 2024 - Présent',
    'experience.alternance.location': 'Tours',
    'experience.stage.title': 'Stage Assistant Ingénieur Full Stack',
    'experience.stage.company': 'Orange',
    'experience.stage.period': 'Février 2024 - Août 2024',
    'experience.stage.location': 'Marseille',
    
    // Projects page
    'projects.title': 'Projets et Réalisations',
    'projects.caisse.title': 'Développeur Full Stack, Chef de Projet – Logiciel de Caisse | ENIB | Brest',
    'projects.caisse.role': 'Développeur Full Stack, Chef de Projet',
    'projects.calculatrice.role' : 'Projet de développement d’un mini OS multitâche sur microcontrôleur.',
    'projects.caisse.company': 'ENIB',
    'projects.caisse.location': 'Brest',
    'projects.robot.title': 'Développement embarqué - Projet pluridisciplinaire | ENIB | Brest',
    'projects.ai.title': 'Développement Logiciel, Réalité Virtuelle et IA | ENIB | Brest',
    'projects.calculatrice.title' : ' Système d’exploitation embarqué – Projet LPC55S69 | ENIB | Brest',
    'project.bma.title' : 'Système embarqué de lecture et visualisation temps réel du capteur BMA456 sur STM32',
    'projects.robot.company': 'ENIB',
    'projects.robot.location': 'Brest',
    
    // Education page
    'education.title': 'Formation',
    'education.enib.title': 'Diplôme d\'Ingénieur en Génie Informatique',
    'education.enib.institution': 'ENIB',
    'education.enib.period': '2022 - 2025',
    'education.enib.location': 'Brest, France',
    'education.enib.specialization': 'Spécialisation en Développement Logiciel & DevOps',
    'education.balamand.license.title': 'Licence en génie des télécommunications et des réseaux',
    'education.balamand.license.institution': 'Université de Balamand',
    'education.balamand.license.period': '2018-2021',
    'education.balamand.bachelor.title': 'Génie Informatique BAC+4',
    'education.balamand.bachelor.period': '2021-2022',
    
    // Skills page
    'skills.title': 'Compétences',
    'skills.languages': 'Langues',
    'skills.french': 'Français - Langue d\'usage',
    'skills.english': 'English - Niveau professionnel',
    'skills.expertise': 'Expertise',
    'skills.tech': 'Technologies',
    
    // Contact page
    'contact.title': 'Contact',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.info': 'Informations de contact',

    // cv
    'cv.langue':'Télécharger mon CV',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Home page
    'home.title': 'Full Stack & DevOps Developer',
    'home.subtitle': 'Soon to be graduated. Open to full-time opportunities',
    'home.about': 'About',
    'home.about.text': 'Full Stack & DevOps Engineer in final year at ENIB, with dual experience at Orange (internship and apprenticeship). Specialist in Java Spring Boot, Vue.js, Angular, CI/CD (Jenkins, GitLab), Docker, MariaDB, SQL and Cloud deployment. Available for a permanent position from September 2025.',
    'home.cta': 'View my journey',
    
    // Experience page
    'experience.title': 'Experience',
    'experience.current': 'Present',
    'experience.alternance.title': 'Full Stack and DevOps Developer (Apprenticeship)',
    'experience.alternance.company': 'Orange Business',
    'experience.alternance.period': 'September 2024 - Present',
    'experience.alternance.location': 'Tours',
    'experience.stage.title': 'Full Stack Engineer Assistant Internship',
    'experience.stage.company': 'Orange',
    'experience.stage.period': 'February 2024 - August 2024',
    'experience.stage.location': 'Marseille',
    
    // Projects page
    'projects.title': 'Projects and Achievements',
    'projects.caisse.title': 'Full Stack Developer, Project Manager – Point of Sale Software | ENIB | Brest',
    'projects.caisse.role': 'Full Stack Developer, Project Manager',
    'projects.calculatrice.role' : 'Implementation of a lightweight embedded OS on a microcontroller',
    'projects.caisse.company': 'ENIB',
    'projects.caisse.location': 'Brest',
    'projects.robot.title': 'Embedded Development - Multidisciplinary Project',
    'projects.ai.title': 'Software Development, Virtual Reality, and AI | ENIB | Brest',
    'projects.calculatrice.title' : ' Embedded Operating System – LPC55S69 Project | ENIB | Brest',
    'projects.robot.company': 'ENIB',
    'projects.robot.location': 'Brest',
    
    // Education page
    'education.title': 'Education',
    'education.enib.title': 'Engineering Degree in Computer Science',
    'education.enib.institution': 'ENIB',
    'education.enib.period': '2022 - 2025',
    'education.enib.location': 'Brest, France',
    'education.enib.specialization': 'Specialization in Software Development & DevOps',
    'education.balamand.license.title': 'Bachelor in Telecommunications and Network Engineering',
    'education.balamand.license.institution': 'University of Balamand',
    'education.balamand.license.period': '2018-2021',
    'education.balamand.bachelor.title': 'Computer Engineering - 4 Years',
    'education.balamand.bachelor.period': '2021-2022',
    
    // Skills page
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.french': 'French - Native',
    'skills.english': 'English - Professional level',
    'skills.expertise': 'Expertise',
    'skills.tech': 'Technologies',
    
    // Contact page
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Contact Information',

    // CV Langue
    'cv.langue':'Download CV',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  // Initialize language from localStorage or browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('fr');
    }

  }, []);

  // Update HTML lang attribute and localStorage when language changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const langData = translations[language];
    return langData[key as keyof typeof langData] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
