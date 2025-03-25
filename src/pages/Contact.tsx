
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Layout } from "../components/Layout";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="section">
        <h1 className="section-title">{t('contact.title')}</h1>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-portfolioblue focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-portfolioblue focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-portfolioblue focus:border-transparent dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t('contact.send')}
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-200 p-3 rounded-md text-center animate-fade-in">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-on-scroll delay-100">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-portfolioblue dark:text-white mb-4">
                {t('contact.info')}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-portfolioblue-50 dark:bg-portfolioblue-dark rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-portfolioblue dark:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a 
                      href="mailto:antoniobgerges@gmail.com" 
                      className="text-gray-800 dark:text-gray-200 hover:text-portfolioblue dark:hover:text-portfolioblue-lighter transition-colors"
                    >
                      antoniobgerges@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-portfolioblue-50 dark:bg-portfolioblue-dark rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-portfolioblue dark:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a 
                      href="tel:+33780422228" 
                      className="text-gray-800 dark:text-gray-200 hover:text-portfolioblue dark:hover:text-portfolioblue-lighter transition-colors"
                    >
                      +33 7 80 42 22 28
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-portfolioblue-50 dark:bg-portfolioblue-dark rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-portfolioblue dark:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      25 Rue Edouard Vaillant, 37000 Tours, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-portfolioblue dark:text-white mb-4">
                Social Media
              </h2>
              
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-portfolioblue-50 dark:bg-portfolioblue-dark rounded-full flex items-center justify-center text-portfolioblue dark:text-white hover:bg-portfolioblue hover:text-white dark:hover:bg-white dark:hover:text-portfolioblue transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
                <a 
                  href="https://github.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-portfolioblue-50 dark:bg-portfolioblue-dark rounded-full flex items-center justify-center text-portfolioblue dark:text-white hover:bg-portfolioblue hover:text-white dark:hover:bg-white dark:hover:text-portfolioblue transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                
                <a 
                  href="mailto:antoniobgerges@gmail.com"
                  className="w-12 h-12 bg-portfolioblue-50 dark:bg-portfolioblue-dark rounded-full flex items-center justify-center text-portfolioblue dark:text-white hover:bg-portfolioblue hover:text-white dark:hover:bg-white dark:hover:text-portfolioblue transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
