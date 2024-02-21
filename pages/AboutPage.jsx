import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className='bg-gradient-to-b from-white to-gray-300'>
      <Navbar />
      <div className="container mx-auto pt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center mt-14 pt-16">
          About
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            src="/images/shower.jpeg"
            alt="About Us"
            className="w-full rounded-lg md:w-1/2 mb-4 md:mb-0"
          />
          <div className='text-lg md:ml-8 text-center'>
            <h2 className='text-3xl mb-5 font-bold underline decoration-[#15365a]'>Empire D&E Inc.</h2>
            <p>
              Welcome to Empire D&E Inc, where our passion for transforming spaces meets unparalleled craftsmanship. With a rich history of successfully revitalizing homes, kitchens, basements, bathrooms, and more, we take pride in delivering exceptional results tailored to our clients' unique visions. Our dedicated team of professionals collaborates closely with clients to bring dreams to life, ensuring every detail reflects individual style and functionality needs.
            </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-center bg-g underline decoration-[#15365a]">Company Values</h2>
              <ul className="list-disc text-lg text-left ml-4 leading-8">
                <li><span className="font-bold">Excellence:</span> We strive for excellence in every project, delivering the highest quality craftsmanship.</li>
                <li><span className="font-bold">Integrity:</span> Honesty, transparency, and ethical practices are at the core of everything we do.</li>
                <li><span className="font-bold">Client-Centric:</span> Our clients' needs and satisfaction are our top priorities. We value open communication and collaboration.</li>
                <li><span className="font-bold">Innovation:</span> We embrace creativity and innovation to bring fresh ideas and solutions to every project.</li>
                <li><span className="font-bold">Teamwork:</span> Our success is a result of effective teamwork. We value the contributions of each team member.</li>
              </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-center underline decoration-[#15365a]">Mission Statement</h2>
            <p className="text-lg mt-4">
              "At Empire D&E Inc, our mission is to transform spaces into personalized havens that reflect our clients' unique lifestyles. With a commitment to excellence, integrity, and innovation, we bring visions to life through unparalleled craftsmanship. By prioritizing client satisfaction, embracing teamwork, and upholding the highest standards of quality, we aim to be the premier choice for comprehensive home renovations and transformative projects. Our mission is to create spaces that inspire, captivate, and stand the test of time."
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
