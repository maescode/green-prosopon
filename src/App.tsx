import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProductModal } from './components/ProductModal';
import { Cart } from './components/Cart';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 
    | 'theology' 
    | 'philosophy' 
    | 'journals' 
    | 'newspapers' 
    | 'fiction'
    | 'commentaries' 
    | 'book-reviews' 
    | 'book-recommendations' 
    | 'sales-of-books' 
    | 'inventory-of-books' 
    | 'sale-of-art' 
    | 'research-assistance' 
    | 'linguistics' 
    | 'fact-checking';
  image: string;
  fullDescription: string;
  pages?: number;
  format: string;
  publishedDate: string;
}

export interface CartItem extends Product {
  quantity: number;
}

// Utility function to format prices in Naira
export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString('en-NG')}`;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const proceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleNavigate = (page: 'home' | 'about') => {
    setCurrentPage(page);
    // Close any open modals when navigating
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      {currentPage === 'home' && (
        <HomePage 
          onProductClick={setSelectedProduct}
          onAddToCart={addToCart}
        />
      )}

      {currentPage === 'about' && <AboutPage />}

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={proceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        totalPrice={getTotalPrice()}
        onOrderComplete={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />
    </div>
  );
}