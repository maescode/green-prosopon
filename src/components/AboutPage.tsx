import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BoardOfTrustees } from './BoardOfTrustees';
import { Gallery } from './Gallery';
import greenProsoponImage from 'figma:asset/b855136ecc11ea4efdae3b1fcb5cd11c7576eade.png';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section for About */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">About Green Prosopon</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our mission to cultivate the human spirit through theological and philosophical wisdom
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-green-200">
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

            <Card className="border-green-200">
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

          <Card className="max-w-6xl mx-auto overflow-hidden border-green-200 mb-16">
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

          {/* Our Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-green-200 text-center">
              <CardHeader>
                <CardTitle className="text-emerald-700">Wisdom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Drawing from the rich traditions of theological and philosophical thought to provide deep insights for modern seekers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <CardTitle className="text-emerald-700">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fostering intellectual and spiritual development through carefully curated educational resources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <CardTitle className="text-emerald-700">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building connections between scholars, students, and seekers in the pursuit of truth and understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board of Trustees Section */}
      <BoardOfTrustees />

      {/* Gallery Section */}
      <Gallery />
    </div>
  );
}