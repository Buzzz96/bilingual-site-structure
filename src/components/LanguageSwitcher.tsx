
import { useLanguage } from "../contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`flex items-center justify-center w-8 h-8 rounded-full ${
          language === 'fr' 
            ? 'bg-portfolioblue text-white' 
            : 'bg-transparent text-portfolioblue dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
        } transition-colors duration-200`}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-8 h-8 rounded-full ${
          language === 'en' 
            ? 'bg-portfolioblue text-white' 
            : 'bg-transparent text-portfolioblue dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
        } transition-colors duration-200`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
