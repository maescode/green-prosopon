import React, { useState } from "react";
import { Product, formatPrice } from "../App";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCatalogProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Introduction to Christian Theology",
    description:
      "A comprehensive introduction to the fundamental principles of Christian theology, covering doctrine, scripture, and theological methodology.",
    price: 15000,
    category: "theology",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2t8ZW58MXx8fHwxNzU1MzUzNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "This foundational text explores Christian theology from historical and contemporary perspectives. Covering topics from the Trinity to eschatology, it serves as an essential resource for students and scholars alike.",
    pages: 580,
    format: "Hardcover & Digital",
    publishedDate: "2024",
  },
  {
    id: "2",
    title: "African Philosophy: Foundations and Contemporary Issues",
    description:
      "Exploring the rich tradition of African philosophical thought, from ancient wisdom to modern intellectual discourse.",
    price: 12500,
    category: "philosophy",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU1MzUzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "A comprehensive examination of African philosophical traditions, including Ubuntu philosophy, Yoruba cosmology, and contemporary African thinkers. Essential reading for understanding African intellectual heritage.",
    pages: 420,
    format: "Paperback & Digital",
    publishedDate: "2023",
  },
  {
    id: "3",
    title: "Journal of Theological Studies - Vol. 45",
    description:
      "Latest research and scholarly articles in contemporary theological studies, featuring peer-reviewed papers from leading theologians.",
    price: 8500,
    category: "journals",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU1MzUzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "This volume contains cutting-edge research in systematic theology, biblical studies, and religious ethics. Features contributions from scholars worldwide with focus on contemporary theological challenges.",
    pages: 250,
    format: "Print & Digital",
    publishedDate: "2024",
  },
  {
    id: "4",
    title: "The Catholic Herald - Weekly Edition",
    description:
      "Weekly newspaper covering Catholic news, theology, and current affairs from a Christian perspective.",
    price: 1500,
    category: "newspapers",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBtZWRpYXxlbnwxfHx8fDE3NTUzNTM2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "Stay informed with weekly coverage of Catholic Church news, theological discussions, and analysis of contemporary issues from a faith-based perspective.",
    pages: 32,
    format: "Print",
    publishedDate: "2024",
  },
  {
    id: "5",
    title: "Parables and Stories: A Collection",
    description:
      "A beautiful collection of religious fiction, parables, and spiritual narratives that illuminate faith and human experience.",
    price: 9500,
    category: "fiction",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2t8ZW58MXx8fHwxNzU1MzUzNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "This anthology brings together contemporary Christian fiction that explores themes of faith, redemption, and spiritual growth through compelling narratives.",
    pages: 320,
    format: "Paperback & Digital",
    publishedDate: "2024",
  },
  {
    id: "6",
    title: "Commentary on the Gospel of John",
    description:
      "In-depth theological commentary on the Gospel of John, with historical context and contemporary applications.",
    price: 18000,
    category: "commentaries",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU1MzUzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "A scholarly commentary offering verse-by-verse analysis of John's Gospel, incorporating latest archaeological findings and theological insights.",
    pages: 650,
    format: "Hardcover & Digital",
    publishedDate: "2023",
  },
  {
    id: "7",
    title: "Book Review: Modern Systematic Theology",
    description:
      "Critical analysis and review of contemporary systematic theology texts, providing scholarly assessment and recommendations.",
    price: 3500,
    category: "book-reviews",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU1MzUzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "Comprehensive reviews of recent publications in systematic theology, helping students and scholars navigate the latest scholarly contributions to the field.",
    pages: 85,
    format: "Digital PDF",
    publishedDate: "2024",
  },
  {
    id: "8",
    title: "Essential Reading List: Philosophy & Theology",
    description:
      "Curated list of must-read books for students of philosophy and theology, with detailed recommendations and study guides.",
    price: 5500,
    category: "book-recommendations",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2t8ZW58MXx8fHwxNzU1MzUzNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "A carefully curated bibliography of essential texts in philosophy and theology, with annotations and study recommendations for different academic levels.",
    pages: 120,
    format: "Digital PDF",
    publishedDate: "2024",
  },
  {
    id: "9",
    title: "Biblical Linguistics: Hebrew and Greek Studies",
    description:
      "Advanced study of biblical languages, focusing on Hebrew and Greek linguistic structures and theological implications.",
    price: 22000,
    category: "linguistics",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU1MzUzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullDescription:
      "Comprehensive linguistic analysis of biblical Hebrew and Greek, examining syntax, semantics, and theological significance of original texts.",
    pages: 780,
    format: "Hardcover & Digital",
    publishedDate: "2023",
  },
];

const categoryNames = {
  all: "All Products",
  theology: "Theology",
  philosophy: "Philosophy",
  journals: "Journals",
  newspapers: "Newspapers",
  fiction: "Fiction",
  commentaries: "Commentaries",
  "book-reviews": "Book Reviews",
  "book-recommendations": "Recommendations",
  linguistics: "Linguistics",
};

export function ProductCatalog({
  onProductClick,
  onAddToCart,
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? mockProducts
      : mockProducts.filter((product) => product.category === selectedCategory);

  const mainCategories = [
    "all",
    "theology",
    "philosophy",
    "journals",
    "commentaries",
  ];
  const otherCategories = Object.keys(categoryNames).filter(
    (cat) =>
      !mainCategories.includes(cat) &&
      mockProducts.some((p) => p.category === cat)
  );

  return (
    <section
      id="catalog"
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-800 mb-4">Books & Educational Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of theological and
            philosophical resources designed to cultivate the human spirit.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-5 mb-4">
            {mainCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                {categoryNames[category as keyof typeof categoryNames]}
              </TabsTrigger>
            ))}
          </TabsList>

          {otherCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {otherCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-green-600 hover:bg-green-700"
                      : "border-green-600 text-green-600 hover:bg-green-50"
                  }
                >
                  {categoryNames[category as keyof typeof categoryNames]}
                </Button>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick(product)}
                onAddToCart={() => onAddToCart(product)}
              />
            ))}
          </div>
        </Tabs>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
