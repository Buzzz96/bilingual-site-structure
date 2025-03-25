
import { useLanguage } from "../contexts/LanguageContext";
import { Layout } from "../components/Layout";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="section">
        <h1 className="section-title">{t('education.title')}</h1>
        
        <div className="space-y-12">
          {/* ENIB Education */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll">
            <div className="absolute top-0 left-12 bottom-0 w-1 bg-portfolioblue-light dark:bg-portfolioblue-lighter -ml-10 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:pr-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('education.enib.period')}
                  </span>
                </div>
                
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('education.enib.institution')}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('education.enib.location')}
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-portfolioblue dark:text-white mb-3">
                  {t('education.enib.title')}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('education.enib.specialization')}
                </p>
                
                <div className="bg-portfolioblue-50 dark:bg-portfolioblue-dark p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-portfolioblue dark:text-white mb-2">
                    Compétences clés acquises :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-portfolioblue rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Développement Web</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-portfolioblue rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">DevOps & CI/CD</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-portfolioblue rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Architecture Logicielle</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-portfolioblue rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Gestion de Projet Agile</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-portfolioblue rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Base de Données</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-portfolioblue rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Développement Mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Balamand University Education */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll">
            <div className="absolute top-0 left-12 bottom-0 w-1 bg-portfolioblue-light dark:bg-portfolioblue-lighter -ml-10 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:pr-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    2018-2022
                  </span>
                </div>
                
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('education.balamand.license.institution')}
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-portfolioblue dark:text-white mb-2">
                    {t('education.balamand.bachelor.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('education.balamand.bachelor.period')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-portfolioblue dark:text-white mb-2">
                    {t('education.balamand.license.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('education.balamand.license.period')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
