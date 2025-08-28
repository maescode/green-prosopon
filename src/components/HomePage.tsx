import React from 'react';
import { Hero } from './Hero';
import { Banner } from './Banner';
import { ProductCatalog } from './ProductCatalog';
import { Gallery } from './Gallery';
import { Product } from '../App';

interface HomePageProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function HomePage({ onProductClick, onAddToCart }: HomePageProps) {
  return (
    <div>
      <Hero />
      
      <Banner />
      
      <ProductCatalog 
        onProductClick={onProductClick}
        onAddToCart={onAddToCart}
      />

      <Gallery />
    </div>
  );
}