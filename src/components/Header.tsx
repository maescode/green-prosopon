import React from "react";
import { ShoppingCart, User } from "lucide-react";
import logo from "../assets/green-prosopon-logo.png";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  currentPage: "home" | "about";
  onNavigate: (page: "home" | "about") => void;
}

export function Header({
  cartItemsCount,
  onCartClick,
  currentPage,
  onNavigate,
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img
              src={logo}
              alt="Green Prosopon"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl text-green-800">Green Prosopon</h1>
              <p className="text-sm text-green-600">
                Cultivating the Human Spirit
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors ${
                currentPage === "home"
                  ? "text-green-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("about")}
              className={`transition-colors ${
                currentPage === "about"
                  ? "text-green-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              About Us
            </button>
            <a
              href="#catalog"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Catalog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative border-green-600 text-green-600 hover:bg-green-50"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-green-600"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
