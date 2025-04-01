
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-display text-maroon mb-6">About</h1>
          <p>This is the about page. Content coming soon.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
