import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Clock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "19a145bf-af84-43f5-9937-d81c747a9217");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success) { 
      toast.success('¡Consulta enviada! Te responderemos pronto.');
      setFormData({ name: '', email: '', message: '' });
    }
    setIsSubmitting(false);
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-[#FDF5F3] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            Contacto y Consultas
          </h2>
          <p className="text-lg text-gray-600">
            Respondemos personalmente todas tus consultas
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Dejanos tu consulta
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                    className="rounded-xl border-gray-200 focus:border-[#7C9885] focus:ring-[#7C9885]"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                    className="rounded-xl border-gray-200 focus:border-[#7C9885] focus:ring-[#7C9885]"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tu consulta"
                    value={formData.message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
                    className="rounded-xl border-gray-200 focus:border-[#7C9885] focus:ring-[#7C9885] min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#7C9885] hover:bg-[#6B8574] rounded-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Consulta
                    </>
                  )}
                </Button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-4">
                Respondemos personalmente en menos de 24 horas
              </p>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-[#C4704B]/10 to-[#C4704B]/5 rounded-3xl p-8 border border-[#C4704B]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C4704B]/20 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-[#C4704B]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">¿Preferís Instagram?</h4>
                  <p className="text-sm text-gray-600">Escribinos directamente por mensaje privado</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Respondemos todas las consultas de forma personal y cercana.
              </p>
              <Button 
                className="w-full bg-[#C4704B] hover:bg-[#B35F3B] rounded-full"
                onClick={() => window.open('https://instagram.com/sabilas.ar', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Abrir Instagram: @sabilas.ar
              </Button>
            </div>

            {/* Response time */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#7C9885]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#7C9885]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Tiempo de respuesta</h4>
                <p className="text-sm text-gray-600">
                  Respondemos todas las consultas en menos de 24 horas. Si escribís por Instagram, generalmente respondemos el mismo día.
                </p>
              </div>
            </div>

            {/* Payment info */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">¿Dudas sobre el pago?</h4>
                <p className="text-sm text-gray-600">
                  El pago es 100% seguro a través de MercadoPago. Aceptamos todas las tarjetas y métodos de pago disponibles en Argentina.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}