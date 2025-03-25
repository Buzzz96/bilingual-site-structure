
import { useLanguage } from "../contexts/LanguageContext";
import { Layout } from "../components/Layout";
import { Code, Server, MapPin, Building } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="section">
        <h1 className="section-title">{t('projects.title')}</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Caisse Project */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-on-scroll card-hover">
            <div className="bg-portfolioblue-400 h-3"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">
                  {t('projects.caisse.role')}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-portfolioblue dark:text-white mb-2">
                {t('projects.caisse.title')}
              </h3>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{t('projects.caisse.company')}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{t('projects.caisse.location')}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter" />
                    <h4 className="font-semibold text-portfolioblue dark:text-white">
                      Développement Full Stack, Architecture & CI/CD
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-7">
                    Conception et implémentation en React.js, Next.js, Flask, avec gestion et synchronisation des données via SQLite, déploiement via Git/GitHub.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter" />
                    <h4 className="font-semibold text-portfolioblue dark:text-white">
                      Expérience utilisateur, IHM & Product Ownership
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-7">
                    Création d'une interface ergonomique et performante en lien avec les besoins clients, rédaction des User Stories et définition du backlog.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">React.js</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Flask</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">SQLite</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Git</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">GitHub</span>
              </div>
            </div>
          </div>
          
          {/* Robot Project */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-on-scroll delay-100 card-hover">
            <div className="bg-portfolioblue-400 h-3"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-portfolioblue dark:text-white mb-2">
                {t('projects.robot.title')}
              </h3>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{t('projects.robot.company')}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{t('projects.robot.location')}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Robot mobile en utilisant une carte stm32 en C, moteur, camera, capteur de couleur contrôler par une IHM en Python.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">C</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">STM32</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Embedded Systems</span>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Robotics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
