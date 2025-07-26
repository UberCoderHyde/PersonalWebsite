import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "profile", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ] as const;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md transition-colors">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <ScrollLink
          to="profile"
          smooth
          duration={500}
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer"
        >
          UberCoder
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10">
          {navItems.map(({ id, label }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth
              duration={500}
              spy
              activeClass="text-mint"
              className="relative text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-mint cursor-pointer transition"
            >
              {label}
            </ScrollLink>
          ))}
        </nav>

        {/* Hamburger Icon */}
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 z-40 bg-gray-900 text-white flex flex-col items-center space-y-6 py-8 shadow-md md:hidden">
          {navItems.map(({ id, label }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth
              duration={500}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-semibold hover:text-mint transition cursor-pointer"
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
}
