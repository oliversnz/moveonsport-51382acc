import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="MoveOn Sport" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Ropa deportiva premium fabricada con materiales 100% sostenibles. 
              Cada producto representa nuestro compromiso con el planeta.
            </p>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-leaf" />
              <span className="text-sm text-leaf font-medium">Certificado Eco-Friendly</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl mb-4">TIENDA</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-leaf transition-colors">Novedades</a></li>
              <li><a href="#" className="hover:text-leaf transition-colors">Camisetas</a></li>
              <li><a href="#" className="hover:text-leaf transition-colors">Leggins</a></li>
              <li><a href="#" className="hover:text-leaf transition-colors">Accesorios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-4">CONTACTO</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>info@moveonsport.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/70 hover:text-leaf transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-leaf transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-leaf transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© 2025 MoveOn Sport. Todos los derechos reservados. Hecho con 💚 para el planeta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
