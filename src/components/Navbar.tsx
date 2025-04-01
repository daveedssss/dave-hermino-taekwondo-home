
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-maroon rounded-full flex items-center justify-center">
            <span className="text-white font-bold">DH</span>
          </div>
          <span className="font-display text-2xl text-maroon">DAVE HERMINO</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-800 hover:text-maroon font-medium transition-colors">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-maroon font-medium transition-colors">About</Link>
          <Link to="/programs" className="text-gray-800 hover:text-maroon font-medium transition-colors">Programs</Link>
          <Link to="/schedule" className="text-gray-800 hover:text-maroon font-medium transition-colors">Schedule</Link>
          <Link to="/contact" className="text-gray-800 hover:text-maroon font-medium transition-colors">Contact</Link>
          <Button className="bg-maroon hover:bg-maroon-light text-white">Join Now</Button>
        </nav>
        
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-maroon font-medium transition-colors px-4 py-2">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-maroon font-medium transition-colors px-4 py-2">About</Link>
            <Link to="/programs" className="text-gray-800 hover:text-maroon font-medium transition-colors px-4 py-2">Programs</Link>
            <Link to="/schedule" className="text-gray-800 hover:text-maroon font-medium transition-colors px-4 py-2">Schedule</Link>
            <Link to="/contact" className="text-gray-800 hover:text-maroon font-medium transition-colors px-4 py-2">Contact</Link>
            <Button className="bg-maroon hover:bg-maroon-light text-white w-full">Join Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
