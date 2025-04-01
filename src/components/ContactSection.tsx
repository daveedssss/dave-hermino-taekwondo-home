
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-maroon mb-4">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Have questions about classes, schedules, or enrollment? Contact Coach Dave directly or fill out the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-display text-maroon mb-6">CONTACT INFORMATION</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-maroon p-3 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                  <a href="tel:09942553507" className="text-gray-700 hover:text-maroon transition-colors">
                    09942553507
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-maroon p-3 rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <a href="mailto:davesebastienghermino@gmail.com" className="text-gray-700 hover:text-maroon transition-colors break-all">
                    davesebastienghermino@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-maroon p-3 rounded-full text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700">
                    San Beda College Alabang,<br />
                    Don Manolo Blvd, Alabang,<br />
                    Muntinlupa, Metro Manila
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-maroon p-3 rounded-full text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Training Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 3:00 PM - 8:00 PM<br />
                    Saturday: 9:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display text-maroon mb-6">SEND A MESSAGE</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="Your email" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="Message subject" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="w-full" rows={6} />
              </div>
              
              <Button className="bg-maroon hover:bg-maroon-light text-white w-full">
                Send Message <Send className="ml-2" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
