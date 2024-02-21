import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id='hero'
      className='lg:py-16 lg:pb-32 bg-local bg-cover bg-center h-screen w-screen shadow-2xl shadow-black/100'
      style={{
        backgroundImage: 'url("/images/ash2.jpeg")',
        minHeight: '500px',
      }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className='col-span-4 flex items-center justify-center text-center sm:text-center lg:w-full h-full absolute top-0 right-0 left-0'
        >
          <h1 className='text-black text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold backdrop-blur-xl bg-white/30'>
            Bringing Your Dreams to  
            <span className='text-[#15365a]'> Life.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;