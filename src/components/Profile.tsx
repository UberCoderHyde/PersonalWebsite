import React from "react";
import profilePic from "../assets/images/ProfilePic.webp";
import { Link as ScrollLink } from "react-scroll";
import { Linkedin, Github } from "lucide-react";
import Resume from "../Pdata/Resume.pdf";

const Profile: React.FC = () => {
  return (
    <section
      id="profile"
      className="scroll-mt-[72px] h-screen bg-white dark:bg-gray-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Block */}
        <div className="space-y-6 text-center md:text-left" data-aos="fade-up">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100">
            Colby Meidenbauer
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300">
            Software Developer
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href={Resume}
              download="resume.pdf"
              className="inline-block bg-mint text-white font-medium rounded-full px-6 py-3 shadow hover:bg-mint/90 focus:outline-none focus:ring-2 focus:ring-mint transition"
              data-aos="fade-right"
            >
              Download Resume
            </a>
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="inline-block bg-mint text-white font-medium rounded-full px-6 py-3 shadow hover:bg-mint/90 focus:outline-none focus:ring-2 focus:ring-mint transition"
              data-aos="fade-left"
            >
              Get in Touch
            </ScrollLink>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/colby-meidenbauer-31445b1b5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 dark:text-gray-200 hover:text-mint focus:outline-none focus:text-mint transition"
              data-aos="fade-right"
            >
              <Linkedin size={40} />
            </a>
            <a
              href="https://github.com/UberCoderHyde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 dark:text-gray-200 hover:text-mint focus:outline-none focus:text-mint transition"
              data-aos="fade-left"
            >
              <Github size={40} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-down"
        >
          <div className="p-1 bg-mint/30 rounded-full transform hover:scale-105 transition-all duration-300">
            <img
              src={profilePic}
              alt="Profile of Colby Meidenbauer"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg ring-2 ring-mint/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
