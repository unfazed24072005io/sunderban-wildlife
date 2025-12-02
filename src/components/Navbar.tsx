"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Search, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "Tours", 
      href: "/tours",
      dropdown: [
        { name: "Tiger Safaris", href: "/tours?type=tiger" },
        { name: "Bird Watching", href: "/tours?type=bird" },
        { name: "Photography Tours", href: "/tours?type=photography" },
        { name: "Cultural Tours", href: "/tours?type=cultural" },
      ]
    },
    { 
      name: "Wildlife", 
      href: "/wildlife",
      dropdown: [
        { name: "Royal Bengal Tiger", href: "/wildlife#tiger" },
        { name: "Bird Species", href: "/wildlife#birds" },
        { name: "Marine Life", href: "/wildlife#marine" },
        { name: "Mangrove Species", href: "/wildlife#mangroves" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = {
    phone: "+91 98765 43210",
    location: "Kolkata, West Bengal",
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <span className="font-medium">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-2" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-green-200 transition-colors">
                <Search size={16} />
              </button>
              <button className="flex items-center hover:text-green-200 transition-colors">
                <User size={16} className="mr-1" />
                <span>Login</span>
              </button>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-1 h-1 bg-green-300 rounded-full"></div>
                <span>Open: 7AM - 9PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 w-full transition-all duration-300 z-50 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg" 
          : "bg-white"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SW</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                  Sunderban Wildlife
                </span>
                <span className="text-xs text-green-600 font-medium">
                  Adventure Tourism
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 group"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl border border-green-100 py-2 z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <span>Book Now</span>
                <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-green-600 transition-colors p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <div key={item.name} className="py-2">
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 rounded-lg transition-colors duration-300 text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-gray-500 hover:text-green-600 px-4 rounded-lg transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t mt-4 space-y-3">
                  <button className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300">
                    Book Tour Now
                  </button>
                  <div className="flex space-x-3">
                    <button className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-colors duration-300">
                      Call Us
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 z-50 transform origin-left"
        style={{
          transform: `scaleX(${scrolled ? '1' : '0'})`,
          transition: 'transform 0.3s ease'
        }}
      />
    </>
  );
};

export default Navbar;