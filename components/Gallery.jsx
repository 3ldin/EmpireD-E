import React from 'react'
import Carousel from './Carousel'

const Gallery = () => {
  const imageUrls = [
    '/images/IMG1.jpeg',
    '/images/IMG7.jpeg',
    '/images/IMG5.jpeg',
    '/images/IMG4.jpeg',
    '/images/IMG9.jpeg',
    '/images/IMG24.jpeg',
    '/images/IMG17.jpeg',
    '/images/IMG22.jpeg',
    '/images/IMG14.jpeg',
    '/images/IMG19.jpeg',
    '/images/IMG20.jpeg',
    '/images/IMG21.jpeg',
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