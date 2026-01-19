import { motion } from 'framer-motion';
import { GraduationCap, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import nosotrosImgUrl from '@/assets/sandra-y-silvia.jpg';

/* const teachers = [
  {
    name: 'Sandra Anabel Stanziani',
    title: 'Técnica Universitaria en Parques y Jardines - Paisajista',
    university: 'Universidad Nacional del Sur',
    bio: 'Egresada de la Universidad Nacional del Sur, con amplios conocimientos en diseño de jardines y experiencia en educación. Su enfoque práctico y creativo ayuda a las alumnas a transformar espacios con confianza y criterio profesional.',
    specialties: ['Diseño de jardines', 'Paisajismo profesional', 'Enseñanza práctica de jardinería']
  },
  {
    name: 'Silvia Patricia Clavel',
    title: 'Profesora de Geografía y Técnica Universitaria en Parques y Jardines',
    university: 'Universidad Nacional del Sur',
    bio: 'Egresada de la Universidad Nacional del Sur, con amplia experiencia en educación. Su pasión por la enseñanza y el conocimiento profundo de la geografía y el diseño de espacios verdes la convierten en una guía excepcional para quienes quieren aprender jardinería desde cero.',
    specialties: ['Educación en jardinería', 'Diseño de parques y jardines', 'Geografía aplicada al paisajismo']
  }
]; */

export default function TeachersSection() {
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
            Nuestras Profesoras
          </h2>
          <p className="text-lg text-gray-600">
            Expertas en jardinería con formación universitaria y pasión por la enseñanza
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-[#FDF5F3] to-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Photo */}
              <div className="relative h-full min-h-[300px] md:min-h-0">
                <img 
                  src={nosotrosImgUrl}
                  alt="Sandra Stanziani y Silvia Clavel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-[#7C9885]" />
                    <span className="text-sm text-gray-500">Universidad Nacional del Sur</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Sandra Anabel Stanziani
                  </h3>
                  <p className="text-[#C4704B] text-sm font-medium mb-3">
                    Técnica Universitaria en Parques y Jardines - Paisajista
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Diseño de jardines', 'Paisajismo profesional', 'Enseñanza práctica'].map((specialty, i) => (
                      <Badge 
                        key={i}
                        className="bg-[#7C9885]/10 text-[#7C9885] hover:bg-[#7C9885]/20 text-xs"
                      >
                        <Leaf className="w-3 h-3 mr-1" />
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Silvia Patricia Clavel
                  </h3>
                  <p className="text-[#C4704B] text-sm font-medium mb-3">
                    Profesora de Geografía y Técnica Universitaria en Parques y Jardines
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Educación en jardinería', 'Diseño de parques', 'Geografía aplicada'].map((specialty, i) => (
                      <Badge 
                        key={i}
                        className="bg-[#7C9885]/10 text-[#7C9885] hover:bg-[#7C9885]/20 text-xs"
                      >
                        <Leaf className="w-3 h-3 mr-1" />
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto"
        >
          Egresadas de la Universidad Nacional del Sur, con amplia experiencia en educación. 
          Su pasión por la enseñanza y conocimiento profundo en diseño de espacios verdes las convierten 
          en guías excepcionales para quienes quieren aprender jardinería desde cero.
        </motion.p>
      </div>
    </section>
  );
}