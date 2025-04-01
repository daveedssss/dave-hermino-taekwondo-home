
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Santos",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "My child has gained so much confidence since joining Coach Dave's class. His teaching style is perfect for kids - firm but encouraging."
  },
  {
    name: "John Rivera",
    role: "Adult Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Coach Dave has an incredible understanding of Taekwondo techniques. His classes push me to improve while maintaining proper form and discipline."
  },
  {
    name: "Sophia Cruz",
    role: "Teen Student",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    content: "Training with Coach Dave helped me win my first tournament! His attention to detail and personalized feedback makes all the difference."
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-maroon mb-4">STUDENT TESTIMONIALS</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our students have to say about their experience training with Dave Hermino.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-gold text-gold" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
