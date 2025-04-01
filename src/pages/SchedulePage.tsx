
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock } from 'lucide-react';

const SchedulePage = () => {
  const weekdayClasses = [
    {
      time: "4:00 PM – 5:00 PM",
      className: "Beginner Taekwondo",
      level: "White to Green Belt"
    },
    {
      time: "5:15 PM – 6:15 PM",
      className: "Intermediate Taekwondo",
      level: "Blue to Red Belt"
    },
    {
      time: "6:30 PM – 7:30 PM",
      className: "Advanced Taekwondo",
      level: "& Black Belt Training"
    }
  ];
  
  const saturdayClasses = [
    {
      time: "9:00 AM – 10:00 AM",
      className: "Self-Defense & Practical Taekwondo",
      level: "Ages 12+"
    },
    {
      time: "10:15 AM – 11:15 AM",
      className: "Beginner Taekwondo",
      level: "White to Green Belt"
    },
    {
      time: "11:30 AM – 12:30 PM",
      className: "Sparring & Competition Training",
      level: "All Levels"
    }
  ];
  
  const sundayClasses = [
    {
      time: "10:00 AM – 11:30 AM",
      className: "Black Belt Mastery",
      level: "& Leadership Training"
    },
    {
      time: "11:45 AM – 12:45 PM",
      className: "Open Training & Review Session",
      level: "All Levels"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-display text-maroon mb-6">Class Schedule</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Our classes are structured to accommodate different age groups and skill levels.
                Please arrive 10-15 minutes before class starts. All students should wear their dobok (uniform) or comfortable workout clothes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Monday, Wednesday, Friday Schedule */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-maroon mr-2" />
                  <h2 className="text-xl font-display text-maroon">Monday, Wednesday, Friday</h2>
                </div>
                <div className="space-y-6">
                  {weekdayClasses.map((cls, index) => (
                    <div key={index} className="border-l-4 border-maroon pl-4 py-2">
                      <p className="text-lg font-medium">{cls.time}</p>
                      <p className="text-gray-800">{cls.className}</p>
                      <p className="text-sm text-gray-600">{cls.level}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Saturday Schedule */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-maroon mr-2" />
                  <h2 className="text-xl font-display text-maroon">Saturday</h2>
                </div>
                <div className="space-y-6">
                  {saturdayClasses.map((cls, index) => (
                    <div key={index} className="border-l-4 border-gold pl-4 py-2">
                      <p className="text-lg font-medium">{cls.time}</p>
                      <p className="text-gray-800">{cls.className}</p>
                      <p className="text-sm text-gray-600">{cls.level}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sunday Schedule */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-maroon mr-2" />
                  <h2 className="text-xl font-display text-maroon">Sunday</h2>
                </div>
                <div className="space-y-6">
                  {sundayClasses.map((cls, index) => (
                    <div key={index} className="border-l-4 border-gold pl-4 py-2">
                      <p className="text-lg font-medium">{cls.time}</p>
                      <p className="text-gray-800">{cls.className}</p>
                      <p className="text-sm text-gray-600">{cls.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-maroon mb-2">Important Notes:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Please arrive 10-15 minutes early for class to prepare</li>
                <li>Wear your dobok (uniform) or comfortable athletic clothes</li>
                <li>Bring a water bottle and a small towel</li>
                <li>Private lessons available by appointment</li>
                <li>Schedule subject to change on holidays - check announcements</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 bg-maroon bg-opacity-5 rounded-lg p-6 border border-maroon border-opacity-20">
            <h2 className="text-xl font-display text-maroon mb-4">Ready to Join a Class?</h2>
            <p className="text-gray-700 mb-4">
              We invite you to visit our school and observe a class before joining. 
              Feel free to contact us with any questions about our schedule or programs.
            </p>
            <a 
              href="/contact" 
              className="bg-maroon hover:bg-maroon-light text-white font-medium py-2 px-6 rounded transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchedulePage;
