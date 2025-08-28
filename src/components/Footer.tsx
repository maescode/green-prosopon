import React from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import logo from "../assets/green-prosopon-logo.png";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Green Prosopon"
                className="h-10 w-auto"
              />
              <h3 className="text-white">Green Prosopon</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Cultivating the human spirit through theological and philosophical
              knowledge. Exploring the wisdom of great thinkers through quality
              educational resources and publications.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-emerald-400 p-2"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-emerald-400 p-2"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-emerald-400 p-2"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-emerald-400 p-2"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white">Quick Links</h3>
            <nav className="space-y-2">
              <a
                href="#books"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Theology Books
              </a>
              <a
                href="#philosophy"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Philosophy
              </a>
              <a
                href="#materials"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Lecture Materials
              </a>
              <a
                href="#about"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                About
              </a>
              <a
                href="#trustees"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Board of Trustees
              </a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white">Categories</h3>
            <nav className="space-y-2">
              <a
                href="#theology"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Theology
              </a>
              <a
                href="#philosophy"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Philosophy
              </a>
              <a
                href="#journals"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Journals & Articles
              </a>
              <a
                href="#commentaries"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Commentaries
              </a>
              <a
                href="#reviews"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                Book Reviews
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>greenprosopon@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>+234 911 740 9437</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5" />
                <div>
                  <div>Samonda Area, Ibadan</div>
                  <div>Oyo State</div>
                  <div>Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {currentYear} Green Prosopon. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a
              href="#privacy"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#accessibility"
              className="hover:text-emerald-400 transition-colors"
            >
              Accessibility
            </a>
            <a
              href="#support"
              className="hover:text-emerald-400 transition-colors"
            >
              Support
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="text-center text-xs text-gray-500">
            <p>
              This educational platform is dedicated to theological and
              philosophical learning. All materials support academic research
              and spiritual development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
