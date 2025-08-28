import React from 'react';
import { Button } from './ui/button';
import { BookOpen, Scroll, Heart } from 'lucide-react';

export function Hero() {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            Green Prosopon
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Cultivating the human spirit through theological and philosophical wisdom. 
            Explore our collection of books, journals, and educational resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-green-700 bg-white hover:bg-green-50"
              onClick={scrollToCatalog}
            >
              Browse Our Catalog
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-700"
              onClick={scrollToAbout}
            >
              Learn About Us
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-lg mb-2">Theological Resources</h3>
              <p className="text-green-100">Comprehensive collection of theological texts, commentaries, and scholarly works.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Scroll className="h-8 w-8" />
              </div>
              <h3 className="text-lg mb-2">Philosophical Studies</h3>
              <p className="text-green-100">Explore philosophical traditions, from ancient wisdom to contemporary thought.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg mb-2">Spiritual Growth</h3>
              <p className="text-green-100">Materials designed to nurture the human spirit and deepen understanding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}