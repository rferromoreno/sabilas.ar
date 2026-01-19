import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: '¿Necesito experiencia previa en jardinería?',
    answer: 'No, para nada. Nuestros cursos están diseñados especialmente para personas que empiezan desde cero. Todo se explica paso a paso, con un lenguaje simple y claro.'
  },
  {
    question: '¿Puedo hacer el curso a mi ritmo?',
    answer: 'Sí, esa es una de las grandes ventajas. Los cursos grabados están disponibles las 24 horas, los 7 días de la semana. Vos decidís cuándo y cuánto estudiar.'
  },
  {
    question: '¿Cuánto tiempo tengo acceso al curso?',
    answer: 'La mayoría de los cursos tienen acceso por 12 meses. El seminario de poda tiene acceso a la grabación por 6 meses. Tiempo más que suficiente para aprender a tu ritmo.'
  },
  {
    question: '¿Qué pasa si no entiendo algo?',
    answer: 'Tenés acceso a un grupo de consultas donde podés hacer todas las preguntas que necesites. Respondemos personalmente y te ayudamos hasta que entiendas.'
  },
  {
    question: '¿Cómo es el pago?',
    answer: 'El pago puede realizarse en 1 o 2 pagos dependiendo del curso. Te recomendamos consultar las opciones de pago disponibles para el curso que te interesa.'
  },
  {
    question: '¿Es seguro comprar online?',
    answer: 'Sí, el pago se realiza a través de MercadoPago, una plataforma 100% segura que acepta todos los medios de pago disponibles en Argentina.'
  },
  {
    question: '¿Recibo certificado?',
    answer: 'Sí, al finalizar cada curso recibís un certificado digital de finalización que podés descargar y compartir.'
  },
  {
    question: '¿Los cursos son en vivo o grabados?',
    answer: 'Los cursos son dictados online en vivo, y luego quedan grabados para que puedas consultarlos cuando quieras durante todo el período de acceso. Así tenés lo mejor de ambas opciones: la interacción en vivo y la flexibilidad de verlos a tu ritmo.'
  }
];

export default function FAQSection() {
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
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Resolvé tus dudas antes de empezar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-[#FDF5F3] to-white rounded-2xl border border-gray-100 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#7C9885] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">¿Tenés otra pregunta?</p>
          <Button 
            variant="outline"
            className="border-2 border-[#C4704B] text-[#C4704B] hover:bg-[#C4704B] hover:text-white rounded-full px-8"
            onClick={() => window.open('https://instagram.com/sabilas.ar', '_blank')}
          >
            Escribinos por Instagram y te respondemos personalmente
          </Button>
        </motion.div>
      </div>
    </section>
  );
}