// src/App.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import ProjectsGrid, { Project } from "./components/ProjectsGrid";
import Experience from "./components/Experience";
import Grid from "./components/Grid";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

import PersonalSiteImage from "./assets/images/PersonalSiteImage.webp";
import Bonked from "./assets/images/Bonked.webp";
import FinalProject from "./assets/images/3155.webp";
import MHA from "./assets/images/MHA.webp";
import ConsoleImage from "./assets/images/ConsoleImage.webp";

const projects: Project[] = [
  {
    id: "personal-website",
    name: "Personal Website",
    description:
      "It's this website you're on now! Check out the source code for the components and pathfinding algorithms in the GitHub repo.",
    image: PersonalSiteImage,
    link: "https://github.com/UberCoderHyde/PersonalWebsite",
  },
  {
    id: "senior-final-project",
    name: "Software Engineering Final Project (2023)",
    description:
      "A collaborative project from college where we built a Django website for scheduling tutoring sessions and hosting class forums.",
    image: FinalProject,
    link: "https://github.com/UberCoderHyde/3155-Final-Project",
  },
  {
    id: "markethack-2021",
    name: "MarketHack (2021)",
    description:
      "A stock lookup website that uses Yahoo Finance's API to retrieve and update real-time stock data.",
    image: MHA,
    link: "https://github.com/UberCoderHyde/MarketHack",
  },
  {
    id: "attendance-checker",
    name: "Attendance Checker (2021)",
    description:
      "A Java console application that checked a Google Doc for class attendance and could randomly select a participant—without using a Google API.",
    image: ConsoleImage,
    link: "https://github.com/UberCoderHyde/AttendanceCheckerJavaConsole",
  },
  {
    id: "recipe-app",
    name: "Recipe App (Senior Project)",
    description:
      "My senior project—a full-stack recipe application that allows users to browse recipes based off the ingredients they have at home.",
    image: FinalProject,
    link: "https://github.com/UberCoderHyde/SeniorProject",
  },
];

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <Header />
      <main className="space-y-24">
        <Profile />
        <About />
        <ProjectsGrid projects={projects} />
        <Experience />
        <Grid rows={20} cols={40} />
        <Skills />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
