import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <BookOpen className="h-8 w-8 mr-3 text-amber-400" />
          <Link to="/" className="text-2xl font-bold">MCA SGPA Calculator</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="hover:text-amber-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-amber-300 transition-colors duration-200"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;