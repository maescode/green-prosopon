import React, { useState } from 'react';
import { Product, formatPrice } from '../App';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ShoppingCart, BookOpen, FileText, FolderOpen, Calendar, Package, Newspaper, Scroll, MessageSquare, Star, Palette, Search, Languages, CheckCircle, PenTool } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const categoryIcons = {
  'theology': BookOpen,
  'philosophy': Scroll,
  'journals': FileText,
  'newspapers': Newspaper,
  'fiction': PenTool,
  'commentaries': MessageSquare,
  'book-reviews': Star,
  'book-recommendations': CheckCircle,
  'sales-of-books': ShoppingCart,
  'inventory-of-books': FolderOpen,
  'sale-of-art': Palette,
  'research-assistance': Search,
  'linguistics': Languages,
  'fact-checking': CheckCircle,
};

const categoryLabels = {
  'theology': 'Theology',
  'philosophy': 'Philosophy',
  'journals': 'Journal',
  'newspapers': 'Newspaper',
  'fiction': 'Fiction',
  'commentaries': 'Commentary',
  'book-reviews': 'Book Review',
  'book-recommendations': 'Book Recommendation',
  'sales-of-books': 'Book Sale',
  'inventory-of-books': 'Book Inventory',
  'sale-of-art': 'Art Sale',
  'research-assistance': 'Research Assistance',
  'linguistics': 'Linguistics',
  'fact-checking': 'Fact Checking',
};

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const IconComponent = categoryIcons[product.category] || BookOpen;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const getIncludedItems = () => {
    switch (product.category) {
      case 'theology':
      case 'philosophy':
        return [
          '• Physical and digital versions',
          '• Access to supplementary resources',
          '• Study guide and discussion questions'
        ];
      case 'journals':
        return [
          '• Full digital access',
          '• Searchable PDF format',
          '• Citation tools included'
        ];
      case 'newspapers':
        return [
          '• Weekly print edition',
          '• Digital archive access',
          '• Mobile app included'
        ];
      case 'commentaries':
        return [
          '• Verse-by-verse analysis',
          '• Historical context notes',
          '• Cross-references included'
        ];
      case 'linguistics':
        return [
          '• Audio pronunciation guides',
          '• Interactive exercises',
          '• Grammar reference charts'
        ];
      default:
        return [
          '• High-quality content',
          '• Digital access included',
          '• Expert guidance provided'
        ];
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-green-800">{product.title}</DialogTitle>
          <DialogDescription>
            View detailed information about this product and add it to your cart
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ImageWithFallback
              src={product.image}
              alt={product.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-800 border-green-200">
                <IconComponent className="h-3 w-3" />
                {categoryLabels[product.category] || 'Book'}
              </Badge>
            </div>
            
            <div>
              <span className="text-green-700">
                {formatPrice(product.price)}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>Format: {product.format}</span>
              </div>
              
              {product.pages && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{product.pages} pages</span>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Published: {product.publishedDate}</span>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <label className="block text-sm">
                Quantity
              </label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            <Button onClick={handleAddToCart} className="w-full bg-green-600 hover:bg-green-700" size="lg">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart - {formatPrice(product.price * quantity)}
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-lg mb-3 text-green-800">Description</h3>
          <p className="text-muted-foreground leading-relaxed">
            {product.fullDescription}
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="text-green-900 mb-2">What's Included</h4>
          <ul className="text-sm text-green-800 space-y-1">
            {getIncludedItems().map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}