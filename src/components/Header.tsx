// src/components/Header.tsx
import React, { useState } from "react";
import { Linkedin, Sun, Moon, Menu, X } from "lucide-react";
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
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map(({ id, label }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth
              spy
              activeClass="text-mint"
              duration={500}
              offset={-100}
              className="relative text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-mint cursor-pointer transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-1 w-0 bg-mint transition-all group-hover:w-full" />
            </ScrollLink>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/colby-meidenbauer-31445b1b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full hover:bg-mint/20 focus:outline-none focus:ring-2 focus:ring-mint cursor-pointer transition"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            className="md:hidden p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-mint cursor-pointer transition"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center pt-32 space-y-8 overflow-auto transition-opacity">
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
              className="text-3xl font-semibold text-gray-700 dark:text-gray-300 hover:text-mint cursor-pointer transition"
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
}
