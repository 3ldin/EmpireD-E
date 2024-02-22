import React from 'react'
import Carousel from './Carousel'

const Gallery = () => {
  const imageUrls = [
    '/images/outside2.jpeg',
    '/images/IMG30.jpeg',
    '/images/ash1.jpeg',
    '/images/outside1.jpeg',
    '/images/IMG1.jpeg',
    '/images/IMG7.jpeg',

    
  ];

  return (
    <section className='container'>
      <div className="w-screen pt-10">
        <h2 className='font-bold text-center text-3xl lg:text-4xl mb-8 underline decoration-[#15365a]'>Preview Our Projects</h2>
      <Carousel images={imageUrls} />
      </div>
    </section>
  );
};

export default Gallery