import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="https://www.twitch.com/uber_coder" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-800 dark:text-white">
            <FontAwesomeIcon icon={faTwitch} size="2x" />          
          </a>
          <a href='https://www.linkedin.com/in/colby-meidenbauer-31445b1b5?utm_source=share&utmcampaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-800 dark:text-white">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/UberCoderHyde" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-800 dark:text-white">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Colby Meidenbauer. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
