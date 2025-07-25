// src/components/Footer.tsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Twitch, LucideProps } from "lucide-react";

export type IconComponent = React.ForwardRefExoticComponent<
  LucideProps & React.RefAttributes<SVGSVGElement>
>;

interface SocialLink {
  href: string;
  label: string;
  Icon: IconComponent;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.twitch.com/uber_coder",
    label: "Twitch",
    Icon: Twitch,
  },
  {
    href: "https://www.linkedin.com/in/colby-meidenbauer-31445b1b5",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://github.com/UberCoderHyde",
    label: "GitHub",
    Icon: Github,
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 lg:px-8 text-center space-y-6">
        {/* Social Media */}
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Connect with me:
        </p>
        <div className="flex justify-center space-x-8">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-700 dark:text-gray-300 transition-transform hover:text-mint hover:scale-110 focus:outline-none focus:text-mint"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <ScrollLink
          to="profile"
          smooth
          duration={500}
          className="block text-sm text-gray-600 dark:text-gray-400 hover:text-mint transition-colors cursor-pointer"
        >
          ↑ Back to top
        </ScrollLink>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} Colby Meidenbauer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
