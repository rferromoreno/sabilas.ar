import { motion } from 'framer-motion';
import { Sprout, Clock, Heart, Shield } from 'lucide-react';

const profiles = [
  {
    icon: Sprout,
    title: 'Personas sin experiencia previa',
    description: 'Si nunca cuidaste una planta o no sabés por dónde empezar, este es tu lugar.'
  },
  {
    icon: Clock,
    title: 'Personas que quieren aprender a su ritmo',
    description: 'Sin horarios fijos, sin presiones. Aprendés cuando podés y querés.'
  },
  {
    icon: Heart,
    title: 'Personas que buscan disfrutar el jardín',
    description: 'No se trata de ser experta, se trata de crear tu espacio de paz y disfrute.'
  },
  {
    icon: Shield,
    title: 'Quienes quieren evitar errores comunes',
    description: 'Aprendé desde el principio lo que realmente funciona y ahorrá tiempo y dinero.'
  }
];

export default function ForYouSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            ¿Este curso es para vos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Si te identificás con alguna de estas situaciones, este es tu lugar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-[#FDF5F3] to-white p-8 rounded-3xl border border-gray-100 hover:border-[#7C9885]/30 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#7C9885]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#7C9885]/20 transition-colors duration-300">
                    <profile.icon className="w-7 h-7 text-[#7C9885]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {profile.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 text-[#7C9885] font-medium text-lg"
        >
          No necesitás conocimientos previos. Todo se explica desde cero.
        </motion.p>
      </div>
    </section>
  );
}