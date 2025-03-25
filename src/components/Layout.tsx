
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Intersection Observer for animations
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {children}
      </main>
      <footer className="py-6 bg-portfolioblue text-white text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Antonio Gerges. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
