import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const images = [
    
    
    '/images/outside1.jpeg',
    '/images/house1.jpeg',
    '/images/house2.jpeg',
    '/images/house4.jpeg',
    '/images/house5.jpeg',
    '/images/house6.jpeg',
    '/images/house7.jpeg',
    '/images/house8.jpeg',
    '/images/house9.jpeg',
    '/images/IMG1.jpeg',
    '/images/IMG2.jpeg',
    '/images/IMG4.jpeg',
    '/images/IMG5.jpeg',
    '/images/shower.jpeg',
    '/images/IMG6.jpeg',
    '/images/IMG7.jpeg',
    '/images/IMG8.jpeg',
    '/images/IMG9.jpeg',
    '/images/IMG13.jpeg',
    '/images/IMG14.jpeg',
    '/images/IMG16.jpeg',
    '/images/IMG17.jpeg',
    '/images/IMG18.jpeg',
    '/images/IMG19.jpeg',
    '/images/IMG20.jpeg',
    '/images/IMG21.jpeg',
    '/images/IMG22.jpeg',
    '/images/IMG23.jpeg',
    '/images/IMG24.jpeg',
    '/images/IMG25.jpeg',
    '/images/IMG26.jpeg',
    '/images/outside2.jpeg',
    '/images/ash1.jpeg',
    '/images/IMG28.jpeg',
    '/images/IMG29.jpeg',
    '/images/IMG30.jpeg',
    '/images/IMG31.jpeg',
    '/images/IMG33.jpeg',
    '/images/IMG34.jpeg',
    '/images/IMG35.jpeg',
  ];

  return (
  <div>
    <div className="container mx-auto pt-10 p-4">
      <Navbar className='' />
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-10 pt-20">
          Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((imageUrl, index) => (
          <motion.img
            key={index}
            src={imageUrl}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover mb-4"
            loading='lazy'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: index * 0.2 }}
          />
        ))}
      </div>
    </div>
    <Footer />
</div>
  );
};

export default GalleryPage;
