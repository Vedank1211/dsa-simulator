import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, Home, BookOpen, Brain, Info, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar1: React.FC = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-gray-800 dark:text-teal-300 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/visualizations" className="text-gray-800 dark:text-teal-300 hover:underline">
            Visualizations
          </Link>
        </li>
        <li>
          <Link to="/tutorials" className="text-gray-800 dark:text-teal-300 hover:underline">
            Interactive Tutorials
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800 dark:text-teal-300 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/help" className="text-gray-800 dark:text-teal-300 hover:underline">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
};


const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-teal-500" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">DSA Learn</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/visualizations" className="nav-link">
              <BookOpen className="h-5 w-5" />
              <span>Visualizations</span>
            </Link>
            <Link to="/about" className="nav-link">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/help" className="nav-link">
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/visualizations" className="mobile-nav-link">Visualizations</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/help" className="mobile-nav-link">Help</Link>
            <button
              onClick={toggleTheme}
              className="w-full text-left mobile-nav-link"
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;