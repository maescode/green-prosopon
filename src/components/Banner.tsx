import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import bannerImage from 'figma:asset/2069659a91d4c0a75267f1119021d83c8347e86b.png';

export function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 bg-white border-b border-green-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="mb-4 text-emerald-700">Our Three Pillars</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Discover the foundation of Green Prosopon through our three interconnected areas of focus.
          </p>
        </div>

        {/* Banner Image Card */}
        <div className="flex justify-center">
          <Card 
            className="group overflow-hidden border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer max-w-4xl w-full"
            onClick={() => setIsModalOpen(true)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden bg-gray-50">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={bannerImage}
                    alt="Green Prosopon - Three Pillars: ARTEM-M (Cultivating Beauty), Bernards Fonlon & Lonergan Centre (Cultivating the Human Spirit), and Oikonomia (Cultivating Fortune)"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full px-4 py-2">
                    <span className="text-emerald-700 font-medium">Click to view full size</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Descriptive text below banner */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <h3 className="text-emerald-700 mb-2">ARTEM-M</h3>
              <p className="text-muted-foreground text-sm">
                Cultivating beauty through artistic expression and creative endeavors that inspire the human soul.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-emerald-700 mb-2">BERNARDS FONLON & LONERGAN CENTRE</h3>
              <p className="text-muted-foreground text-sm">
                Documentation and listening center dedicated to cultivating the human spirit through careful attention and preservation.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-emerald-700 mb-2">OIKONOMIA</h3>
              <p className="text-muted-foreground text-sm">
                Cultivating fortune through wise stewardship and responsible management of resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-full h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-emerald-700">
              Green Prosopon - Our Three Pillars
            </DialogTitle>
            <DialogDescription>
              ARTEM-M, BERNARDS FONLON & LONERGAN CENTRE, and OIKONOMIA - the foundation of our mission
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 relative overflow-hidden bg-gray-50">
            <img
              src={bannerImage}
              alt="Green Prosopon Three Pillars Banner"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="p-4 text-center text-sm text-muted-foreground bg-gray-50">
            Click outside or press ESC to close
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}