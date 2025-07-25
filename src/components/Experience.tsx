// src/components/Experience.tsx
import React from "react";

const experiences = [
  {
    jobTitle: "Software Developer",
    company: "C.R. Onsrud",
    duration: "July 2024 – Present",
    description:
      "Full‑time software developer using React and TypeScript. Design and implement new features and updates to web tools for CNC machine data monitoring and operator workflows.",
  },
  {
    jobTitle: "College Student",
    company: "University of North Carolina at Charlotte",
    duration: "August 2021 – May 2025",
    description:
      "Pursued a B.S. in Computer Science while interning at C.R. Onsrud—developed full-stack skills in React, TypeScript, Python, C# and Django.",
  },
  {
    jobTitle: "Software Development Intern",
    company: "C.R. Onsrud",
    duration: "Fall 2024",
    description:
      "Contributed to React + TypeScript dashboards and internal UI tools during internship for machine data ingestion and visualization.",
  },
  {
    jobTitle: "Software Development Intern",
    company: "PBE",
    duration: "May 2020 – August 2020",
    description:
      "Built a WinForms/C# barcode generator and scanner for mold tracking, improving lifecycle monitoring and quality control.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <h2
          className="text-5xl lg:text-6xl font-extrabold text-white mb-16 text-center"
          data-aos="fade-up"
        >
          Experience
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transform transition hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-mint text-white rounded-full text-2xl font-bold mb-6">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {exp.jobTitle}
              </h3>
              <p className="text-lg font-medium text-white mb-1">
                {exp.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
