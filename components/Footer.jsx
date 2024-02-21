
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 w-screen mt-20 text-center border-t-4 border-[#15365a]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Empire D&E Inc.</h3>
          <p>NYC Based</p>
          <p>Email: empiredeinc@gmail.com </p>
          <p>Phone: (347) 722-4353</p>
        </div>
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:text-gray-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/AboutPage" className="hover:text-gray-500 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/GalleryPage" className="hover:text-gray-500 transition duration-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="/ContactPage" className="hover:text-gray-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
 
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 Empire D&E Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
