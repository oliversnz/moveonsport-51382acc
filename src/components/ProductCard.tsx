import { useState } from 'react';
import { ShoppingBag, Leaf } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Por favor selecciona una talla');
      return;
    }
    addToCart(product, selectedSize);
    toast.success(`${product.name} añadido al carrito`);
    setSelectedSize('');
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Eco Badge */}
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground gap-1">
          <Leaf className="w-3 h-3" />
          {product.eco}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-2xl font-display text-primary mb-4">
          ${product.price.toFixed(2)}
        </p>

        {/* Size Selector */}
        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Talla:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 rounded-md text-sm font-medium transition-all ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Añadir al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
