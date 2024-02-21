import Navbar from "../components/Navbar"
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default class Home extends React.Component { 
  render () {
  return (
    <main className='flex min-h-screen flex-col w-full'>
        <Navbar />
        <div class="container w-full">
          <Hero />
          <About />
          <Gallery />
          <Footer />
        </div>
    </main>
  ) 
}
};
