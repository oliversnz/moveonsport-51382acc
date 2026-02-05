import { useState } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <ProductGrid />
        <Footer />
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
