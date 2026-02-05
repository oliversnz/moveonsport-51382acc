import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const categories = ['Todos', 'Camisetas', 'Tops', 'Leggins', 'Shorts', 'Pantalones', 'Sudaderas', 'Chaquetas'];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            COLECCIÓN ECO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra línea de ropa deportiva sostenible, diseñada para 
            maximizar tu rendimiento mientras cuidas el planeta.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'bg-primary' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
