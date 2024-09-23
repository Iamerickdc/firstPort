import React, { useState } from 'react';
import NavItems from '../components/NavItems';
import { Menu, X } from 'lucide-react';
import Images from '../assets/Images';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

           
            <a href='/' className="ml-3 text-xl">iAMERICK</a>
          </a>
          <NavItems />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
                <a href="ser" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Services</a>
                <a href="skil" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Skills</a>
                <a href="cont" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;