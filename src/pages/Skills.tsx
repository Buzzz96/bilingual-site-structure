
import { useLanguage } from "../contexts/LanguageContext";
import { Layout } from "../components/Layout";
import { Globe, Star, Cpu } from "lucide-react";

const Skills = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="section">
        <h1 className="section-title">{t('skills.title')}</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-portfolioblue dark:text-portfolioblue-lighter" />
              <h2 className="text-2xl font-bold text-portfolioblue dark:text-white">
                {t('skills.languages')}
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {t('skills.french')}
                </h3>
                <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded-full">
                  <div className="bg-portfolioblue h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {t('skills.english')}
                </h3>
                <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded-full">
                  <div className="bg-portfolioblue h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Expertise Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll delay-100">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-portfolioblue dark:text-portfolioblue-lighter" />
              <h2 className="text-2xl font-bold text-portfolioblue dark:text-white">
                {t('skills.expertise')}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Communication</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-gray-200 dark:bg-gray-700 h-2 w-8 rounded-full"></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Travail d'équipe</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Résolution de problèmes</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Adaptabilité</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-gray-200 dark:bg-gray-700 h-2 w-8 rounded-full"></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Gestion du temps</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-gray-200 dark:bg-gray-700 h-2 w-8 rounded-full"></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Gestion de projet</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-gray-200 dark:bg-gray-700 h-2 w-8 rounded-full"></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Méthodologie Agile</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 mb-1">Collaboration Dev/DevOps</span>
                <div className="flex gap-1">
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                  <span className="bg-portfolioblue h-2 w-8 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technologies Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:col-span-2 animate-on-scroll delay-200">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="h-6 w-6 text-portfolioblue dark:text-portfolioblue-lighter" />
              <h2 className="text-2xl font-bold text-portfolioblue dark:text-white">
                {t('skills.tech')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-portfolioblue dark:text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">C#</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-portfolioblue dark:text-white">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">JAVA</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">SPRING</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">SQL</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">API REST</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">JUnit</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">MariaDB</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-portfolioblue dark:text-white">DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Jira (Agile - Scrum)</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Cloud Foundry</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Jenkins</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">GitLab</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-portfolioblue-50 text-portfolioblue dark:bg-portfolioblue-dark dark:text-white px-3 py-1 rounded-full text-sm">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
