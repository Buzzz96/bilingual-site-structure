
import { useLanguage } from "../contexts/LanguageContext";
import { Linkedin, Github, Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const ProfileHeader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center mb-16 animate-fade-in">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
          {/* Photo de profil */}
          <img 
            src="/lovable-uploads/9b110760-3b33-461c-8f2d-adb1ee34d0cd.png" 
            alt="Antonio Gerges" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-portfolioblue dark:text-white">
            Antonio Gerges
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-3">
            {t('home.title')} - {t('home.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-300 mt-4">
            <a 
              href="mailto:antoniobgerges@gmail.com" 
              className="flex items-center gap-2 hover:text-portfolioblue dark:hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" /> 
              antoniobgerges@gmail.com
            </a>
            <a 
              href="tel:+33780422228" 
              className="flex items-center gap-2 hover:text-portfolioblue dark:hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" /> 
              +33 7 80 42 22 28
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 
              Tours, France
            </span>
          </div>
          
          <motion.div 
            className="flex justify-center md:justify-start gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-portfolioblue dark:text-gray-300 dark:hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-portfolioblue dark:text-gray-300 dark:hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:antoniobgerges@gmail.com"
              className="p-2 text-gray-600 hover:text-portfolioblue dark:text-gray-300 dark:hover:text-white transition-colors"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/cv-antonio-gerges.pdf" download>
              <Button 
                className="bg-portfolioblue hover:bg-portfolioblue-light text-white font-medium px-6 py-2"
              >
                <Download className="mr-2 h-4 w-4" />
                {t('home.download-cv') || 'Télécharger mon CV'}
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
