
import { useLanguage } from "../contexts/LanguageContext";
import { Layout } from "../components/Layout";
import { ProfileHeader } from "../components/ProfileHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <Layout>
      <div className="section">
        <ProfileHeader />
        
        <motion.div 
          className="mt-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title animate-on-scroll"
            variants={itemVariants}
          >
            {t('home.about')}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll delay-100"
              variants={itemVariants}
            >
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
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                className="glass-morphism dark:bg-gray-800/50 rounded-xl p-5 shadow-lg animate-on-scroll delay-200"
                variants={itemVariants}
              >
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
              </motion.div>
              
              <motion.div 
                className="glass-morphism dark:bg-gray-800/50 rounded-xl p-5 shadow-lg animate-on-scroll delay-300"
                variants={itemVariants}
              >
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
