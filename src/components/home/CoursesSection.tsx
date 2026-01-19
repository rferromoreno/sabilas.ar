import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const courses = [
  {
    category: 'Diseño',
    type: 'Online en vivo + grabado',
    title: 'Diseño de Jardines 1',
    description: 'Aprendé los fundamentos del diseño de jardines desde cero. Ideal para principiantes que quieren crear espacios verdes hermosos y funcionales.',
    duration: '7 semanas',
    price: 105000,
    features: [
      'Videos didácticos paso a paso',
      'Entrega de resumen al finalizar el curso',
      'Acceso por 12 meses',
      'Certificado de finalización',
      'Grupo de consultas'
    ],
    color: 'bg-[#7C9885]'
  },
  {
    category: 'Diseño',
    type: 'Online en vivo + grabado',
    title: 'Diseño de Jardines 2',
    description: 'Profundizá tus conocimientos en diseño de jardines. Aprendé técnicas avanzadas para crear espacios únicos y personalizados.',
    duration: '4 semanas',
    price: 105000,
    features: [
      'Videos de técnicas avanzadas',
      'Entrega de resumen al finalizar el curso',
      'Proyectos prácticos guiados',
      'Acceso por 12 meses',
      'Certificado de finalización'
    ],
    color: 'bg-[#6B8574]'
  },
  {
    category: 'Plantas',
    type: 'Online en vivo + grabado',
    title: 'Plantas Nativas de Argentina',
    description: 'Conocé las plantas autóctonas de Argentina, sus cuidados y cómo integrarlas en tu jardín de forma sustentable.',
    duration: '5 semanas',
    price: 155000,
    features: [
      'Guía completa de especies nativas',
      'Entrega de resumen al finalizar el curso',
      'Acceso por 12 meses',
      'Certificado de finalización',
      'Listado descargable de viveros de plantas nativas'
    ],
    color: 'bg-[#5A9A6B]'
  },
  {
    category: 'Plantas',
    type: 'Online en vivo + grabado',
    title: 'Plantas de Interior',
    description: 'Convertí tu hogar en un oasis verde. Aprendé a cuidar y mantener plantas de interior saludables y hermosas.',
    duration: '5 semanas',
    price: 105000,
    features: [
      'Videos sobre cuidados específicos',
      'Guía de problemas comunes y soluciones',
      'Entrega de resumen al finalizar el curso',
      'Acceso por 12 meses',
      'Certificado de finalización'
    ],
    color: 'bg-[#8BA888]'
  },
  {
    category: 'Técnicas',
    type: 'Online en vivo + grabado',
    title: 'Seminario de Poda',
    description: 'Dominá las técnicas de poda para mantener tus plantas sanas, con la forma adecuada y floreciendo en el momento justo.',
    duration: '2.5 horas',
    price: 35000,
    features: [
      'Seminario en vivo de 2.5 horas',
      'Videos demostrativos de técnicas',
      'Entrega de resumen al finalizar el curso',
      'Acceso a la grabación por 6 meses',
      'Certificado de finalización'
    ],
    color: 'bg-[#C4704B]'
  }
];

const guides = [
  {
    title: 'Guía del Jardín Saludable y Biodiverso',
    description: 'Guía completa para crear y mantener un jardín saludable, con biodiversidad y en armonía con el ecosistema.',
    price: 20000,
    features: [
      'PDF con más de 40 páginas',
      'Fotos para identificación',
      'Tratamientos naturales',
      'Descarga inmediata'
    ]
  },
  {
    title: 'Guía de Rosales',
    description: 'Todo lo que necesitás saber para cultivar rosales hermosos y saludables en tu jardín.',
    price: 20000,
    features: [
      'PDF con más de 35 páginas',
      'Guía de variedades',
      'Calendario de cuidados',
      'Descarga inmediata'
    ]
  }
];

const categories = ['Todos', 'Diseño', 'Plantas', 'Técnicas'];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('cursos');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredCourses = selectedCategory === 'Todos' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            Cursos y Guías Disponibles
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Elegí el curso que más te interese y empezá a crear tu jardín ideal
          </p>

          <Badge className="bg-[#7C9885]/10 text-[#7C9885] hover:bg-[#7C9885]/20 px-4 py-2 text-sm">
            100% Online - Cursos virtuales
          </Badge>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          {/* Category filters - only show when cursos tab is active */}
          {activeTab === 'cursos' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#7C9885] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100 p-1 rounded-full">
            <TabsTrigger 
              value="cursos" 
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Cursos Completos
            </TabsTrigger>
            <TabsTrigger 
              value="guias"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Guías PDF
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            {activeTab === 'cursos' && (
              <motion.div
                key={`cursos-${selectedCategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      {/* Header */}
                      <div className={`${course.color} p-6 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <Badge className="bg-white/20 text-white hover:bg-white/30 mb-2">
                          {course.category}
                        </Badge>
                        <p className="text-white/80 text-sm mb-2">{course.type}</p>
                        <h3 className="text-xl font-semibold text-white">
                          {course.title}
                        </h3>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {course.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>

                        <div className="space-y-2 mb-6">
                          <p className="text-sm font-medium text-gray-900">Incluye:</p>
                          {course.features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-[#7C9885] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto">
                          <p className="text-3xl font-semibold text-[#C4704B] mb-1">
                            {formatPrice(course.price)}
                          </p>
                          <p className="text-sm text-gray-500 mb-4">Consulta por formas de pago</p>

                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-[#7C9885] hover:bg-[#6B8574] rounded-full"
                              onClick={() => window.open('https://instagram.com/sabilas.ar', '_blank')}
                            >
                              Me interesa
                            </Button>
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="rounded-full border-gray-200"
                              onClick={() => window.open('https://instagram.com/sabilas.ar', '_blank')}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'guias' && (
              <motion.div
                key="guias"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {guides.map((guide, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-[#FDF5F3] to-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-500">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 bg-[#C4704B]/10 rounded-2xl flex items-center justify-center">
                          <FileText className="w-7 h-7 text-[#C4704B]" />
                        </div>
                        <div>
                          <Badge className="bg-[#C4704B]/10 text-[#C4704B] hover:bg-[#C4704B]/20 mb-2">
                            Guía PDF
                          </Badge>
                          <p className="text-sm text-gray-500">PDF descargable</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6">
                        {guide.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {guide.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-[#7C9885]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-2xl font-semibold text-[#C4704B] mb-1">
                        {formatPrice(guide.price)}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">Pago único</p>

                      <Button 
                        className="w-full bg-[#C4704B] hover:bg-[#B35F3B] rounded-full"
                        onClick={() => window.open('https://instagram.com/sabilas.ar', '_blank')}
                      >
                        Me interesa esta guía
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Badge className="bg-green-100 text-green-700 px-4 py-2">
            Pago 100% Seguro con MercadoPago
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}