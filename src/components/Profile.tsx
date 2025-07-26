import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Profile() {
  return (
    <section
      id="profile"
      className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-white dark:bg-gray-900 transition-colors text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h1
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
          data-aos="fade-down"
        >
          Colby Meidenbauer
        </h1>
        <p
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          data-aos="fade-up"
        >
          Software Developer
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="/Resume.pdf"
            download
            className="inline-block bg-mint text-white px-6 py-3 rounded-md font-medium hover:bg-mint/90 transition"
            data-aos="fade-up"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-block border border-mint text-mint px-6 py-3 rounded-md font-medium hover:bg-mint hover:text-white transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-10" data-aos="fade-up">
          <a
            href="https://www.linkedin.com/in/colby-meidenbauer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-mint text-2xl transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/UberCoderHyde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-mint text-2xl transition"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div data-aos="fade-up">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </section>
  );
}
