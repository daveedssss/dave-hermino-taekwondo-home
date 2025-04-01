
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1952&q=80')] bg-cover bg-center opacity-60"></div>
      <div className="hero-gradient absolute inset-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-display text-6xl md:text-8xl text-white mb-2">
          DAVE HERMINO
        </h1>
        <h2 className="font-display text-3xl md:text-4xl text-gold mb-6">TAEKWONDO EXCELLENCE</h2>
        <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          TBB Member & San Beda College Alabang Taekwondo Varsity Coach
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-maroon hover:bg-maroon-light text-white font-bold text-lg px-8">
            <Link to="/programs">Explore Programs</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
