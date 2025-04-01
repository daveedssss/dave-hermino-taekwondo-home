
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Kids Classes',
    description: 'Ages 5-12. Build confidence, coordination, and discipline in a fun, safe environment.',
    image: 'https://images.unsplash.com/photo-1599506146144-bf04518bbfc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/kids'
  },
  {
    title: 'Teen Classes',
    description: 'Ages 13-17. Develop strength, self-defense skills, and mental fortitude.',
    image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
    link: '/programs/teens'
  },
  {
    title: 'Adult Classes',
    description: 'Ages 18+. Improve fitness, learn self-defense, and reduce stress through martial arts training.',
    image: 'https://images.unsplash.com/photo-1508994923184-e069da8b5a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/adults'
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-maroon mb-4">TRAINING PROGRAMS</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Discover the perfect Taekwondo program for you or your child. Each class is carefully 
            structured to promote physical fitness, mental discipline, and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-maroon font-display">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="bg-maroon hover:bg-maroon-light text-white w-full">
                  <Link to={program.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-maroon text-maroon hover:bg-maroon hover:text-white">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
