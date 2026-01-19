import { motion } from 'framer-motion';
import { Search, CreditCard, PlayCircle } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Elegís tu curso',
    description: 'Mirá los cursos disponibles y elegí el que más te interese. Podés empezar con el nivel 1 o ir directo a un tema específico.'
  },
  {
    number: '2',
    icon: CreditCard,
    title: 'Comprás de forma segura',
    description: 'Pagás online con MercadoPago. Es rápido, seguro y aceptamos todos los medios de pago.'
  },
  {
    number: '3',
    icon: PlayCircle,
    title: 'Accedés cuando quieras',
    description: 'Recibís el acceso al curso en tu email. Desde ese momento, podés empezar a aprender a tu ritmo, cuando y donde quieras.'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F7F2] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600">
            Es muy simple, en solo 3 pasos empezás a aprender
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#7C9885] via-[#7C9885] to-[#7C9885]" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#7C9885]">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-[#7C9885]">{step.number}</span>
                    <step.icon className="w-8 h-8 mx-auto mt-1 text-[#7C9885]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}