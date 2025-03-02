import React from 'react';
import profilePic from '../images/ProfilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import Resume from '../Pdata/Resume.pdf';

const Profile = () => {
  return (
    <section style={{ height: '73vh' }} className="flex flex-col items-center justify-center text-center my-16">
      <img
        src={profilePic}
        alt="Profile picture of Colby Meidenbauer"
        className="w-40 h-40 rounded-full mb-4"
        data-aos="fade-down"
      />
      <h2 className="text-3xl font-bold dark:text-white" data-aos="fade-up">
        Colby Meidenbauer
      </h2>
      <p className="text-gray-600 dark:text-gray-300" data-aos="fade-up">
        Software Developer
      </p>
      <div className="flex space-x-4 mt-4">
        <button
          data-aos="fade-right"
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full px-4 py-2"
        >
          <a href={Resume} download="resume.pdf">
            Download Resume
          </a>
        </button>
        <button
          data-aos="fade-left"
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full px-4 py-2"
        >
          <Link to="contact" smooth duration={350}>
            Get in Touch
          </Link>
        </button>
      </div>
      <div className="flex space-x-4 mt-4">
        <a
          data-aos="fade-right"
          href="https://www.linkedin.com/in/colby-meidenbauer-31445b1b5?utm_source=share&utmcampaign=share_via&utm_content=profile&utm_medium=ios_app"
          className="text-gray-800 dark:text-white"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
        </a>
        <a
          data-aos="fade-left"
          href="https://github.com/UberCoderHyde"
          className="text-gray-800 dark:text-white"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        </a>
      </div>
    </section>
  );
};

export default Profile;
