import './App.css'
import HeroSection from './components/home/HeroSection';
import ForYouSection from './components/home/ForYouSection';
import BenefitsSection from './components/home/BenefitsSection';
import CoursesSection from './components/home/CoursesSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import TeachersSection from './components/home/TeachersSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import FAQSection from './components/home/FAQSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ForYouSection />
      <BenefitsSection />
      <div id="cursos">
        <CoursesSection />
      </div>
      <div id="como-funciona">
        <HowItWorksSection />
      </div>
      <TeachersSection />
      <div id="testimonios">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contacto">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}