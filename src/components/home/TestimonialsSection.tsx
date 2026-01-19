import { motion } from 'framer-motion';
import { Quote, Star, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    quote: 'Nunca había tocado una planta en mi vida. Gracias al curso de Diseño de Jardines 1, hoy mi patio es mi lugar favorito de la casa. Todo explicado con tanta paciencia y claridad.',
    name: 'María Elena',
    age: '58 años',
    location: 'Buenos Aires',
    course: 'Diseño de Jardines 1'
  },
  {
    quote: 'Estaba muy insegura al principio, pero el curso de Plantas de Interior me dio la confianza que necesitaba. Ahora mi casa está llena de verde y yo feliz cuidándolas.',
    name: 'Silvia',
    age: '52 años',
    location: 'Córdoba',
    course: 'Plantas de Interior'
  },
  {
    quote: 'El seminario de poda cambió completamente mi jardín. Ya no tengo miedo de cortar mal. Todo está más sano y florece mejor. ¡Una maravilla!',
    name: 'Graciela',
    age: '63 años',
    location: 'Mendoza',
    course: 'Seminario de Poda'
  },
  {
    quote: 'Me encantó poder hacerlo a mi ritmo. A veces veía los videos de noche, otras veces a la mañana. Y siempre con respuestas claras a mis preguntas.',
    name: 'Patricia',
    age: '47 años',
    location: 'Rosario',
    course: 'Plantas Nativas de Argentina'
  },
  {
    quote: 'Después del curso de Diseño 2, diseñé completamente mi jardín. Cada rincón tiene sentido ahora. Mis amigas no pueden creer que lo hice yo sola.',
    name: 'Marta',
    age: '56 años',
    location: 'La Plata',
    course: 'Diseño de Jardines 2'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FDF5F3]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            Lo que dicen nuestras alumnas
          </h2>
          <p className="text-lg text-gray-600">
            Historias reales de mujeres que transformaron sus jardines y su relación con las plantas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                {/* Quote icon */}
                <div className="w-10 h-10 bg-[#7C9885]/10 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-[#7C9885]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C4704B] text-[#C4704B]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-gray-700 italic leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                  <Badge className="bg-[#7C9885]/10 text-[#7C9885] hover:bg-[#7C9885]/20">
                    {testimonial.course}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Badge className="bg-[#7C9885] text-white px-6 py-3 text-lg">
            Más de 500 alumnas ya transformaron sus jardines
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}