import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import greenProsoponImage from 'figma:asset/b855136ecc11ea4efdae3b1fcb5cd11c7576eade.png';

export function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-emerald-700">About Green Prosopon</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-700">Our Mission & Objectives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                This page aims to contribute to "the cultivation of the human spirit" by exploring the common fund of 
                knowledge made available to the world through the labours of luminaries (Great thinkers) of all ages 
                through a wide variety of good books.
              </p>
              <p className="leading-relaxed">
                This page is oriented primarily to theology and Philosophy, and secondarily to the Sciences and Social 
                Sciences (history, sociology, psychology, literature) considered as allies of theology. The works of 
                African theologians would be given great consideration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-700">Category of Literary Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                This page displays books in all categories: theology, philosophy, journals, newspapers, fiction, 
                commentaries on books, book reviews, book recommendations, sales of books, inventory of books, 
                sale of art and research assistance, linguistics and fact checking. It also features audios and videos, 
                sharing links on books and educational materials on theology and philosophy and their allies.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-6xl mx-auto overflow-hidden">
          <CardHeader>
            <CardTitle className="text-emerald-700">The Name: Green Prosopon</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={greenProsoponImage}
                  alt="Historical religious figure representing the concept of Green Prosopon"
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-900/20 md:to-transparent"></div>
              </div>
              
              {/* Text Content Section */}
              <div className="p-6 space-y-4 bg-white">
                <p className="leading-relaxed">
                  The name Green Prosopon comes from a combination of two expressions—one from Hildegard of Bingen and 
                  the other from Pope Benedict XVI.
                </p>
                <p className="leading-relaxed">
                  Hildegard uses the Latin word <em className="text-emerald-700 font-medium">Veriditas</em> translated to English "green vigour" to describe 
                  "the force which gives life to the body and renewal in nature" and "in a religious sense, signifies 
                  both the power of the spirit at work in the world and the moral force that gives life and fruitfulness 
                  to human actions."
                </p>
                <p className="leading-relaxed">
                  Pope Benedict XVI explores the term <em className="text-emerald-700 font-medium">Prosopon</em>, a word from Greek theater which originally meant 
                  a mask worn by an actor in a play in order to portray a character. Through Christian exegesis, the word 
                  came to signify an actual living substance "an individual substance of rational nature" as Boethius defines it.
                </p>
                <p className="leading-relaxed">
                  The <strong className="text-emerald-700">"green person"</strong> or a Green Prosopon is a person who is truly human and truly 
                  alive—one who truly realizes in himself/herself God's blessings and gifts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}