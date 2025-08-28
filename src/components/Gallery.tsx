import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import galleryImage1 from 'figma:asset/38fbf1771aaa2ed5c51137be7846a0fd3261b12b.png';
import galleryImage2 from 'figma:asset/de4d01f3fb2e772204312cc610e0160ecf640d2a.png';
import galleryImage3 from 'figma:asset/f09a7baf05b4c952633fe931f3b9b711ef99e8e3.png';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: galleryImage1,
      title: "Exploring Sacred Texts",
      description: "Deep engagement with theological and philosophical literature in our extensive library collection."
    },
    {
      id: 2,
      image: galleryImage2,
      title: "Academic Excellence",
      description: "Discovering wisdom through careful study and contemplation of timeless works."
    },
    {
      id: 3,
      image: galleryImage3,
      title: "Joyful Learning",
      description: "Finding inspiration and delight in the pursuit of knowledge and spiritual growth."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-emerald-700">Our Academic Environment</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Experience the rich atmosphere of learning and discovery that defines Green Prosopon. 
            Our community is dedicated to the pursuit of theological and philosophical wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-gray-50">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-2">
                      <span className="text-emerald-700 text-sm font-medium">Click to view full image</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-emerald-700">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <h3 className="mb-4 text-emerald-700">Join Our Community of Learners</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're a student, scholar, or simply someone seeking deeper understanding, 
                Green Prosopon offers a welcoming space for intellectual and spiritual exploration. 
                Our carefully curated collection spans theology, philosophy, and allied sciences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2 text-emerald-600">📚</div>
                  <h4 className="text-emerald-700 mb-1">Extensive Collection</h4>
                  <p className="text-sm text-muted-foreground">Thousands of theological and philosophical works</p>
                </div>
                <div>
                  <div className="text-2xl mb-2 text-emerald-600">🎓</div>
                  <h4 className="text-emerald-700 mb-1">Expert Guidance</h4>
                  <p className="text-sm text-muted-foreground">Scholarly support and academic mentorship</p>
                </div>
                <div>
                  <div className="text-2xl mb-2 text-emerald-600">🌱</div>
                  <h4 className="text-emerald-700 mb-1">Personal Growth</h4>
                  <p className="text-sm text-muted-foreground">Cultivating the human spirit through learning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-emerald-700">
              {selectedImage?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedImage?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 relative overflow-hidden bg-gray-50">
            {selectedImage && (
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          
          <div className="p-4 text-center text-sm text-muted-foreground bg-gray-50">
            Click outside or press ESC to close
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}