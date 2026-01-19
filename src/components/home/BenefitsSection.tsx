import { motion } from 'framer-motion';
import { GraduationCap, Timer, PiggyBank, Home, Users, Eye } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Aprendés desde cero',
    description: 'No necesitás saber nada de plantas. Te acompañamos paso a paso, explicando todo con palabras simples.'
  },
  {
    icon: Timer,
    title: 'A tu propio ritmo',
    description: 'Sos vos quien decide cuándo y cuánto estudiar. Sin presiones, sin horarios fijos. Tu tiempo, tu forma.'
  },
  {
    icon: PiggyBank,
    title: 'Sin errores costosos',
    description: 'Aprendés qué hacer (y qué no hacer) antes de gastar en plantas o materiales. Te ahorrás tiempo, dinero y frustraciones.'
  },
  {
    icon: Home,
    title: 'Tu espacio soñado',
    description: 'Convertís tu jardín o balcón en el lugar donde querés estar. Un espacio tuyo, para disfrutar y sentirte bien.'
  },
  {
    icon: Users,
    title: 'Acompañamiento cercano',
    description: 'No estás sola. Tenés un grupo de consultas y podés escribirnos cuando necesites ayuda. Respondemos personalmente.'
  },
  {
    icon: Eye,
    title: 'Resultados que se ven',
    description: 'No es solo teoría. Vas a ver cómo tu jardín o plantas cambian. Y vas a sentir la satisfacción de haberlo logrado vos misma.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F0F7F2]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            ¿Qué vas a lograr?
          </h2>
          <p className="text-lg text-gray-600">
            Transformá tu relación con las plantas y disfrutá del proceso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-[#7C9885]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}