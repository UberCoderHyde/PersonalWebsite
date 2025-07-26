import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const navItems = [
    { id: "profile", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md transition-colors">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo placeholder */}
        <ScrollLink
          to="profile"
          smooth
          duration={500}
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer"
        >
          <span className="sr-only">Home</span>
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10">
          {navItems.map(({ id, label }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth
              spy
              activeClass="text-mint"
              duration={500}
              offset={-100}
              className="relative text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-mint cursor-pointer transition"
            >
              {label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-mint transition"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 px-4">
          {navItems.map(({ id, label }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth
              duration={500}
              offset={-100}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold hover:text-mint transition cursor-pointer"
            >
              {label}
            </ScrollLink>
          ))}
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </header>
  );
}
