
import { useLanguage } from "../contexts/LanguageContext";
import { Layout } from "../components/Layout";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="section">
        <h1 className="section-title">{t('experience.title')}</h1>
        
        <div className="space-y-12">
          {/* Apprenticeship Experience */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll">
            <div className="absolute top-0 left-12 bottom-0 w-1 bg-portfolioblue-light dark:bg-portfolioblue-lighter -ml-10 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:pr-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('experience.alternance.period')}
                  </span>
                </div>
                
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('experience.alternance.company')}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('experience.alternance.location')}
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-portfolioblue dark:text-white mb-4">
                  {t('experience.alternance.title')}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-portfolioblue-light dark:text-portfolioblue-lighter mb-2">
                      🖥 Développement Full Stack
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Front-end : Vue.js (TypeScript, composants réutilisables, tests avec Jest)
                      </li>
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Back-end : Java Spring Boot (API REST, gestion des services, tests avec JUnit)
                      </li>
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Base de données : MariaDB (Conception, optimisation, requêtes SQL avancées)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-portfolioblue-light dark:text-portfolioblue-lighter mb-2">
                      ⚙ DevOps & CI/CD
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Git/GitLab : Branching, Merge Requests (MR), rebase, gestion des conflits
                      </li>
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Jenkins : Automatisation des builds et déploiements
                      </li>
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Docker : Environnement conteneurisé pour le développement et le déploiement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Internship Experience */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll">
            <div className="absolute top-0 left-12 bottom-0 w-1 bg-portfolioblue-light dark:bg-portfolioblue-lighter -ml-10 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:pr-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('experience.stage.period')}
                  </span>
                </div>
                
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('experience.stage.company')}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-portfolioblue dark:text-portfolioblue-lighter mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t('experience.stage.location')}
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-portfolioblue dark:text-white mb-4">
                  {t('experience.stage.title')}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-portfolioblue-light dark:text-portfolioblue-lighter mb-2">
                      🛠️ Technologies & Outils Utilisés
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Angular</span>
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>

                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Java</span>
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">GitLab CI/CD</span>
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">MySQL</span>
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">JPA</span>
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Spring Batch</span>
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Bootstrap</span>
                      <span
                          className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Cloud Foundry</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-portfolioblue-light dark:text-portfolioblue-lighter mb-2">
                      📌 Tâches Réalisées
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Création d'une application Angular + Spring Boot from scratch
                      </li>

                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Développement d'API pour consultation des données batch
                      </li>
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Gestion des relations entre entités (JPA, @ManyToOne, @OneToMany)
                      </li>
                      <li className="flex items-start">
                        <span className="text-portfolioblue dark:text-portfolioblue-lighter mr-2">•</span>
                        Implémentation de la pagination et recherche multi-critères
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
