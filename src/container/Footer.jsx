import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
          <a href='/' className="ml-3 text-xl">iAMERICK</a>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 iAMERICK —
          <a href="" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@iam_erickdc</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href='https://instagram.com/iam_erickdc' className="text-gray-500 hover:text-gray-700" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href='tel:+2349039611740' className="ml-3 text-gray-500 hover:text-gray-700">
            <Phone size={20} />
          </a>
          <a href='erickosayande@gmail.com' className="ml-3 text-gray-500 hover:text-gray-700">
            <Mail size={20} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;