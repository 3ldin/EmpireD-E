import React from 'react';
import { motion } from 'framer-motion';
import { BsFillHouseFill } from 'react-icons/bs';
import { PiCookingPotFill, PiGarageFill } from "react-icons/pi";
import { FaShower, FaPencilRuler, FaExpandArrowsAlt } from "react-icons/fa";
import { MdBuild, MdTableBar } from "react-icons/md";




const About = () => {
  return (
    <section  
      className='min-h-[calc(100vh-64px)] min-w-[calc(100vw-64px)] w-screen border-double bg-center bg-gradient-to-b from-white via-gray-300 to-white'
    >
      <div className='grid grid-cols-1 lg:grid-cols-6'>
          <div className='lg:col-span-3 flex flex-col items-center lg:items-start  lg:mt-20 lg:ml-20'>
            <h2 className='text-black mt-10 text-3xl sm:text-3xl  lg:text-4xl font-bold p-4 text-decoration-line: underline decoration-[#15365a] underline-offset-1 lg:pl-48'>Empire D&E Inc.</h2>
              <p className='font-bold text-base sm:text-lg lg:text-4xl text-center text-black leading-8 lg:leading-[3rem] m-4 lg:m-8 lg:mt-36 backdrop-blur-2xl bg-white/30 p-8 rounded-lg'>
                As premier general contractors, we specialize in transforming spaces to perfection. Renowned for our exceptional craftsmanship, we&apos;ve successfully revitalized countless homes, kitchens, basements, bathrooms, and more. Our dedicated team collaborates closely with clients to bring their unique visions to life, ensuring every detail reflects their style and functionality needs. From comprehensive home renovations to targeted room upgrades, our commitment to excellence shines through in every project. With us, expect a seamless journey from concept to completion, where unmatched expertise meets unparalleled results.
              </p>
          </div>
          <div className='lg:col-span-3 lg:max-w-xl lg:mt-20 mx-auto text-center'>
            <h2 className='text-black mt-10  text-3xl sm:text-3xl lg:text-4xl font-bold p-4 text-decoration-line: underline decoration-[#15365a] '>Services</h2>
              <ul className='list-none text-2xl lg:text-3xl text-black lg:leading-10 lg:pt-12 lg:pl-10 ml-4 lg:mt-16 flex flex-col lg:w-screen lg:gap-3'>
                <li className='flex items-center mt-6 lg:mb-6'><BsFillHouseFill className='mr-4' />Home Renovations</li>
                <li className='flex items-center mt-6 lg:mb-6'><PiCookingPotFill className='mr-4' />Kitchen Transformations</li>
                <li className='flex items-center mt-6 lg:mb-6'><FaShower className='mr-4' />Bathroom Remodeling</li>
                <li className='flex items-center mt-6 lg:mb-6'><MdBuild className='mr-4' />Basement Revitalization</li>
                <li className='flex items-center mt-6 lg:mb-6'><FaPencilRuler className='mr-4' />Customized Interior Solutions</li>
                <li className='flex items-center mt-6 lg:mb-6'><PiGarageFill className='mr-4' />Garage Innovations</li>
                <li className='flex items-center mt-6 lg:mb-6'><MdTableBar className='mr-4' />Outdoor Living Designs</li>
                <li className='flex items-center mt-6 mb-4'><FaExpandArrowsAlt className='mr-4' />Additions and Expansions</li>
              </ul>
          </div>
      </div>
    </section>
  );
};

export default About;
