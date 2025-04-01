
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarDays, Target, Dumbbell, Shield, Users } from 'lucide-react';

const ProgramsPage = () => {
  const programs = [
    {
      title: "Beginner Taekwondo (White to Green Belt)",
      ageGroup: "All ages",
      focus: "Basics of taekwondo, including fundamental kicks, punches, stances, and blocks. Students will learn discipline, respect, and simple self-defense techniques.",
      structure: "Warm-up, stretching, basic drills, forms (poomsae), and light sparring practice.",
      icon: <CalendarDays className="h-8 w-8 text-maroon" />
    },
    {
      title: "Intermediate Taekwondo (Blue to Red Belt)",
      ageGroup: "All ages",
      focus: "Advanced techniques, combination kicks, self-defense applications, and introduction to controlled sparring. Forms become more complex, and students start breaking boards.",
      structure: "Warm-up, flexibility training, technique drills, sparring drills, forms practice, and strength training.",
      icon: <Target className="h-8 w-8 text-maroon" />
    },
    {
      title: "Advanced Taekwondo (Black Belt Program)",
      ageGroup: "All ages (must have Red Belt or higher)",
      focus: "Mastery of techniques, advanced sparring strategies, leadership training, and teaching skills. This program prepares students for black belt testing.",
      structure: "Intensive training, high-level sparring, advanced forms, breaking techniques, and mental conditioning.",
      icon: <Dumbbell className="h-8 w-8 text-maroon" />
    },
    {
      title: "Sparring & Competition Training",
      ageGroup: "10+ (students interested in competition)",
      focus: "Olympic-style taekwondo sparring, speed, reaction drills, and endurance training. Ideal for those who want to compete at local, national, or international levels.",
      structure: "Footwork drills, strategy sessions, full-contact sparring, and agility workouts.",
      icon: <Shield className="h-8 w-8 text-maroon" />
    },
    {
      title: "Self-Defense & Practical Taekwondo",
      ageGroup: "12+",
      focus: "Real-life self-defense applications, situational awareness, and defensive strategies against grabs, holds, and strikes.",
      structure: "Partner drills, realistic self-defense scenarios, and striking techniques for self-protection.",
      icon: <Users className="h-8 w-8 text-maroon" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-display text-maroon mb-6">Programs</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-display text-maroon mb-6">Taekwondo Programs</h2>
            <p className="text-gray-700 mb-8">
              At Dave Hermino Taekwondo, we offer comprehensive programs for all ages and skill levels. 
              Each program is carefully designed to develop specific skills and attributes, ensuring a 
              well-rounded martial arts education.
            </p>
            
            <div className="space-y-8">
              {programs.map((program, index) => (
                <div key={index} className="border-l-4 border-maroon pl-6 py-2">
                  <div className="flex items-center mb-3">
                    {program.icon}
                    <h3 className="text-xl font-display text-maroon ml-3">{program.title}</h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center">
                      <span className="font-medium min-w-[100px]">📅 Age Group:</span>
                      <span>{program.ageGroup}</span>
                    </p>
                    <p className="flex items-start">
                      <span className="font-medium min-w-[100px] mt-1">🎯 Focus:</span>
                      <span>{program.focus}</span>
                    </p>
                    <p className="flex items-start">
                      <span className="font-medium min-w-[100px] mt-1">📝 Class Structure:</span>
                      <span>{program.structure}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-display text-maroon mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-700 mb-6">
              Join our taekwondo family and start your path to physical fitness, mental discipline, 
              and personal growth. We welcome students of all ages and abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-maroon hover:bg-maroon-light text-white font-medium py-2 px-6 rounded transition-colors inline-block text-center"
              >
                Contact Us
              </a>
              <a 
                href="/schedule" 
                className="bg-white border border-maroon text-maroon hover:bg-gray-50 font-medium py-2 px-6 rounded transition-colors inline-block text-center"
              >
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
