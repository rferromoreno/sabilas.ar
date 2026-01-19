import { Leaf, Instagram, Heart } from 'lucide-react';
import logoUrl from '@/assets/logo-con-circulo.jpg';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-[#F0F7F2] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={logoUrl}
                alt="SabilaS Logo"
                className="w-44 h-auto"
              />
            </div>
            <p className="text-gray-600 mb-4 max-w-sm">
              Cursos online de jardinería para que crees el espacio verde que siempre soñaste, sin experiencia previa.
            </p>
            <a 
              href="https://instagram.com/sabilas.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C4704B] hover:text-[#B35F3B] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @sabilas.ar
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Cursos Disponibles', id: 'cursos' },
                { label: 'Cómo Funciona', id: 'como-funciona' },
                { label: 'Testimonios', id: 'testimonios' },
                { label: 'Preguntas Frecuentes', id: 'faq' },
                { label: 'Contacto', id: 'contacto' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-[#7C9885] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Información</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#7C9885]" />
                Cursos 100% online
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#7C9885]" />
                Aprendé a tu propio ritmo
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#7C9885]" />
                Certificado incluido
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#7C9885]" />
                Pago seguro con MercadoPago
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#7C9885]" />
                Acceso por 6-12 meses
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SabilaS. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2 flex items-center justify-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-[#C4704B] fill-[#C4704B]" /> para personas que aman las plantas
          </p>
        </div>
      </div>
    </footer>
  );
}