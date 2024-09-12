import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header data-aos="fade-down" className='bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className='text-2xl font-bold'>Colby Meidenbauer</div>
        <nav className="flex justify-center items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="home" smooth={true} duration={500} className="nav-link cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="nav-link cursor-pointer">About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="nav-link cursor-pointer">Projects</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="nav-link cursor-pointer">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size='lg' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

