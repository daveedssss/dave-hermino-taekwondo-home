
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Maroon circle background */}
              <div className="absolute w-72 h-72 bg-maroon rounded-full opacity-20"></div>
              {/* User image */}
              <img 
                src="/lovable-uploads/7462e63c-0e0e-4080-ab33-b6381b933826.png" 
                alt="Dave Hermino" 
                className="w-64 h-64 object-cover rounded-full relative z-10"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-display text-maroon mb-4">ABOUT DAVE HERMINO</h2>
            <div className="w-20 h-1 bg-gold mb-6"></div>
            <p className="text-gray-700 mb-4">
              Dave Hermino is a dedicated Taekwondo coach and practitioner with years of experience in martial arts. 
              As a proud member of the Taekwondo Blackbelt (TBB) and former varsity athlete at San Beda College Alabang, 
              Dave brings both expertise and passion to his teaching.
            </p>
            <p className="text-gray-700 mb-6">
              His coaching philosophy centers on discipline, respect, and continuous improvement - values that 
              form the foundation of traditional Taekwondo practice while incorporating modern training techniques.
            </p>
            <Button asChild className="bg-maroon hover:bg-maroon-light text-white group">
              <Link to="/about">
                Learn More 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
