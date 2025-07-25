// src/components/Skills.tsx
import React from "react";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Skill {
  name: string;
  level: SkillLevel;
}

const skills: Skill[] = [
  // Top‑level: Advanced skills most relevant to your front‑end / full‑stack work
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "JavaScript (ES6+)", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git (version control & collaboration)", level: "Advanced" },

  // Advanced back‑end / language proficiency
  { name: "Python", level: "Advanced" },
  { name: "C#", level: "Advanced" },

  // Core full‑stack and data skills
  { name: "RESTful API design (Node.js / Express)", level: "Intermediate" },
  { name: "Django (Python web framework)", level: "Intermediate" },
  { name: "SQL / SQLite", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },

  // Designer / routing / client‑side frameworks
  { name: "React Router (Remix v7 routing & SSR)", level: "Intermediate" },

  // Tools and DevOps essentials
  { name: "CI/CD pipelines (GitHub Actions, Docker)", level: "Intermediate" },
  { name: "JWT, OAuth & API security fundamentals", level: "Intermediate" },

  // Nice‑to‑have & emerging awareness
  { name: "Serverless / Cloud Platforms (AWS, Lambda)", level: "Beginner" },
  { name: "Testing frameworks (Jest, Cypress)", level: "Beginner" },
  {
    name: "System architecture & API modeling (OpenAPI, Postman)",
    level: "Beginner",
  },
];

// Tailwind base colors for badge levels
const badgeClasses: Record<SkillLevel, string> = {
  Beginner: "bg-gray-500 text-white",
  Intermediate: "bg-yellow-500 text-white",
  Advanced: "bg-green-500 text-white",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center"
          data-aos="fade-up"
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow hover:shadow-lg transform transition hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {skill.name}
              </h3>
              <span
                className={`${
                  badgeClasses[skill.level]
                } inline-block px-4 py-1 text-sm font-medium rounded-full`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
