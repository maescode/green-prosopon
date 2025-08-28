import React from 'react';
import { Product, formatPrice } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, BookOpen, FileText, FolderOpen, Newspaper, Scroll, MessageSquare, Star, Palette, Search, Languages, CheckCircle, PenTool } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart: () => void;
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
  'book-recommendations': 'Recommendation',
  'sales-of-books': 'Book Sale',
  'inventory-of-books': 'Inventory',
  'sale-of-art': 'Art Sale',
  'research-assistance': 'Research',
  'linguistics': 'Linguistics',
  'fact-checking': 'Fact Check',
};

const categoryColors = {
  'theology': 'bg-green-100 text-green-800 border-green-200',
  'philosophy': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'journals': 'bg-teal-100 text-teal-800 border-teal-200',
  'newspapers': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'fiction': 'bg-lime-100 text-lime-800 border-lime-200',
  'commentaries': 'bg-green-100 text-green-800 border-green-200',
  'book-reviews': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'book-recommendations': 'bg-teal-100 text-teal-800 border-teal-200',
  'sales-of-books': 'bg-green-100 text-green-800 border-green-200',
  'inventory-of-books': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'sale-of-art': 'bg-lime-100 text-lime-800 border-lime-200',
  'research-assistance': 'bg-teal-100 text-teal-800 border-teal-200',
  'linguistics': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'fact-checking': 'bg-green-100 text-green-800 border-green-200',
};

export function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
  const IconComponent = categoryIcons[product.category] || BookOpen;
  const badgeColor = categoryColors[product.category] || 'bg-green-100 text-green-800 border-green-200';
  
  return (
    <Card className="group hover:shadow-lg transition-shadow cursor-pointer border-green-100">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onClick={onClick}
          />
          <Badge 
            variant="secondary" 
            className={`absolute top-2 left-2 flex items-center gap-1 ${badgeColor}`}
          >
            <IconComponent className="h-3 w-3" />
            {categoryLabels[product.category] || 'Book'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4" onClick={onClick}>
        <h3 className="text-lg mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-green-700">
            {formatPrice(product.price)}
          </span>
          {product.pages && (
            <span className="text-sm text-muted-foreground">
              {product.pages} pages
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button 
            variant="outline" 
            className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
            onClick={onClick}
          >
            View Details
          </Button>
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}