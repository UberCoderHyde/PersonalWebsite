// src/components/Header.tsx
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
        {/* Brand or Logo Placeholder (no name) */}
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

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMobileOpen((open) => !open)}
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
      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Dimmed blurred backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

          {/* Close button stays visible */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-3 rounded-md bg-white/90 dark:bg-gray-800/90 shadow hover:bg-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-mint transition"
            >
              <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>

          {/* Nav links on top of the backdrop */}
          <div className="relative z-50 mt-24 flex flex-col items-center space-y-8 px-4">
            {navItems.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth
                spy
                activeClass="text-mint"
                duration={500}
                offset={-100}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-white hover:text-mint cursor-pointer transition"
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
      s
    </header>
  );
}
