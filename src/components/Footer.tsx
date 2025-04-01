
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-maroon rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DH</span>
              </div>
              <span className="font-display text-xl text-white">DAVE HERMINO</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing expert Taekwondo coaching with a focus on discipline, respect, and personal growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/schedule" className="text-gray-400 hover:text-white transition-colors">Class Schedule</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">PROGRAMS</h3>
            <ul className="space-y-2">
              <li><Link to="/programs/kids" className="text-gray-400 hover:text-white transition-colors">Kids Classes</Link></li>
              <li><Link to="/programs/teens" className="text-gray-400 hover:text-white transition-colors">Teen Classes</Link></li>
              <li><Link to="/programs/adults" className="text-gray-400 hover:text-white transition-colors">Adult Classes</Link></li>
              <li><Link to="/programs/private" className="text-gray-400 hover:text-white transition-colors">Private Lessons</Link></li>
              <li><Link to="/programs/competition" className="text-gray-400 hover:text-white transition-colors">Competition Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">CONTACT</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: <a href="tel:09942553507" className="hover:text-white transition-colors">09942553507</a></li>
              <li>Email: <a href="mailto:davesebastienghermino@gmail.com" className="hover:text-white transition-colors">davesebastienghermino@gmail.com</a></li>
              <li>San Beda College Alabang, Don Manolo Blvd, Alabang, Muntinlupa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dave Hermino Taekwondo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
