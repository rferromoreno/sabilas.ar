import { motion } from 'framer-motion';
import { Leaf, Play, Clock, Sparkles, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jardinImgUrl from '@/assets/jardin.png';
import logoUrl from '@/assets/logo-con-circulo.jpg';

export default function HeroSection() {
  const scrollToCourses = () => {
    document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5F3]/95 via-white/90 to-[#F0F7F2]/95 z-10" />
        <img 
          src={jardinImgUrl}
          alt="Jardinería"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C9885]/10 rounded-full blur-3xl z-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C4704B]/10 rounded-full blur-3xl z-20" />

      <div className="container mx-auto px-6 py-20 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center">
              <img 
                src={logoUrl}
                alt="SabilaS Logo"
                className="w-56 md:w-64 h-auto"
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-6"
          >
            Creá el jardín de tus sueños
            <span className="block text-[#7C9885] font-medium">sin experiencia previa</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Aprendé jardinería a tu ritmo, desde cero, con acompañamiento cercano. 
            Convertí tu espacio en un lugar de paz y disfrute.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              onClick={scrollToCourses}
              className="bg-[#7C9885] hover:bg-[#6B8574] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Cursos Disponibles
            </Button>
            <Button 
              className="bg-[#C4704B] hover:bg-[#D4805B] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://instagram.com/sabilas.ar', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Consultar por Instagram
            </Button>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Sparkles, text: '100% Online' },
              { icon: Clock, text: 'A tu ritmo' },
              { icon: Leaf, text: 'Sin experiencia previa' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm border border-gray-100"
              >
                <item.icon className="w-4 h-4 text-[#7C9885]" />
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path 
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}