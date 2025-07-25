// src/components/ProjectsGrid.tsx
import React from "react";

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <h2
          className="text-5xl font-extrabold text-white mb-16 text-center"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj, idx) => (
            <article
              key={proj.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.name}
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-mint transition-colors">
                  {proj.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 flex-1 mb-6">
                  {proj.description}
                </p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-mint text-mint font-medium rounded-full px-6 py-3 text-center hover:bg-mint hover:text-white focus:outline-none focus:ring-2 focus:ring-mint transition cursor-pointer"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
