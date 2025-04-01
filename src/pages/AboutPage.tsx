
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-display text-maroon mb-6">About</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-display text-maroon mb-4">About Dave Hermino Taekwondo</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Dave Hermino Taekwondo, where discipline, strength, and skill come together! 
              Our school is dedicated to teaching traditional and Olympic-style taekwondo, helping students 
              build confidence, improve fitness, and learn valuable self-defense skills.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you are a beginner or an experienced martial artist, we offer programs designed for all 
              ages and skill levels. Our instructors focus on respect, perseverance, and excellence, ensuring 
              every student reaches their full potential.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-maroon p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-display text-maroon mb-4">🥋 Why Train With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Professional and experienced instructors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>A structured program for all belt levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>A fun and challenging environment for personal growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Opportunities for competition and leadership development</span>
                </li>
              </ul>
            </div>
            
            <p className="text-maroon font-medium text-lg">
              Join us and take the next step in your taekwondo journey!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-maroon-light bg-opacity-10 rounded-full p-4 mb-4">
                <Shield size={32} className="text-maroon" />
              </div>
              <h3 className="text-xl font-display text-maroon mb-2">Tradition & Excellence</h3>
              <p className="text-gray-600">
                We uphold the traditional values of taekwondo while embracing modern training methods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-maroon-light bg-opacity-10 rounded-full p-4 mb-4">
                <Award size={32} className="text-maroon" />
              </div>
              <h3 className="text-xl font-display text-maroon mb-2">Competition Ready</h3>
              <p className="text-gray-600">
                Our training prepares students for success in local, national, and international competitions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-maroon-light bg-opacity-10 rounded-full p-4 mb-4">
                <Heart size={32} className="text-maroon" />
              </div>
              <h3 className="text-xl font-display text-maroon mb-2">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where students encourage each other to grow and excel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
