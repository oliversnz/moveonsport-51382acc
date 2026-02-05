import { useState } from 'react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="MoveOn Sport" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#productos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Nosotros
            </a>
            <a href="#eco" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <Leaf className="w-4 h-4" />
              Eco-Friendly
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium animate-pulse-soft">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#productos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Productos
              </a>
              <a href="#nosotros" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Nosotros
              </a>
              <a href="#eco" className="flex items-center gap-1 text-sm font-medium text-primary">
                <Leaf className="w-4 h-4" />
                Eco-Friendly
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
