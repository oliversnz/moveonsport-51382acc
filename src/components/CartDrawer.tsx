import { X, Minus, Plus, Trash2, FileText } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { generatePDF } from '@/utils/pdfGenerator';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleGeneratePDF = () => {
    generatePDF(items, totalPrice);
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Tu Carrito</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4">
              <X className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground mb-2">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground">
              Añade productos para comenzar tu compra eco-friendly
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-auto py-4 space-y-4">
              {items.map((item) => (
                <div 
                  key={`${item.id}-${item.selectedSize}`} 
                  className="flex gap-4 p-3 bg-secondary/50 rounded-lg"
                >
                  {/* Product Image */}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground text-sm line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      Talla: {item.selectedSize}
                    </p>
                    <p className="font-semibold text-primary">
                      ${item.price.toFixed(2)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="w-7 h-7 rounded-md bg-background flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="w-7 h-7 rounded-md bg-background flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <Separator />

            {/* Cart Footer */}
            <div className="py-4 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-2xl font-display text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Proceder al Pago
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="lg"
                  onClick={handleGeneratePDF}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Descargar PDF
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-muted-foreground"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
