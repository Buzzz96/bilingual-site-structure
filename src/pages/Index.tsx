
import { useLanguage } from "../contexts/LanguageContext";
import { Layout } from "../components/Layout";
import { ProfileHeader } from "../components/ProfileHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="section">
        <ProfileHeader />
        
        <div className="mt-16">
          <h2 className="section-title animate-on-scroll">
            {t('home.about')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll delay-100">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('home.about.text')}
              </p>
              
              <div className="mt-6">
                <Link 
                  to="/experience" 
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  {t('home.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-morphism dark:bg-gray-800/50 rounded-xl p-5 shadow-lg animate-on-scroll delay-200">
                <h3 className="text-xl font-semibold text-portfolioblue dark:text-white mb-3">Full Stack</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    Vue.js / TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    Spring Boot / Java
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    MariaDB / SQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    Angular / React.js
                  </li>
                </ul>
              </div>
              
              <div className="glass-morphism dark:bg-gray-800/50 rounded-xl p-5 shadow-lg animate-on-scroll delay-300">
                <h3 className="text-xl font-semibold text-portfolioblue dark:text-white mb-3">DevOps</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    Jenkins / GitLab CI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    Docker
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    Cloud Foundry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-portfolioblue-light rounded-full"></span>
                    Git / YAML
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
