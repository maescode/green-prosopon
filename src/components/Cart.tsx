import React from 'react';
import { CartItem, formatPrice } from '../App';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export function Cart({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  totalPrice, 
  onCheckout 
}: CartProps) {
  const isEmpty = items.length === 0;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-green-800">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
          </SheetTitle>
          <SheetDescription>
            Review your selected items and proceed to checkout
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-green-300 mb-4" />
                <h3 className="text-lg text-green-800 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-muted-foreground">
                  Add some books or educational materials to get started.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 border border-green-200 rounded-lg">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <h4 className="text-sm line-clamp-2 text-green-800">
                        {item.title}
                      </h4>
                      <p className="text-green-600">
                        {formatPrice(item.price)}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 border-green-600 text-green-600 hover:bg-green-50"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 border-green-600 text-green-600 hover:bg-green-50"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {!isEmpty && (
            <>
              <Separator />
              <div className="py-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-green-800">Total:</span>
                  <span className="text-green-700">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <Button 
                  onClick={onCheckout} 
                  className="w-full bg-green-600 hover:bg-green-700" 
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={onClose} 
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}