// src/components/Skills.tsx
import React from "react";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Skill {
  name: string;
  level: SkillLevel;
}

const skills: Skill[] = [
  { name: "Python", level: "Advanced" },
  { name: "C#", level: "Advanced" },
  { name: "Java", level: "Intermediate" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Django", level: "Intermediate" },
  { name: "Node.js (Express.js)", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "SQLite", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "R", level: "Beginner" },
  { name: "C++", level: "Beginner" },
  { name: "Hadoop (HDFS, MapReduce)", level: "Beginner" },
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
