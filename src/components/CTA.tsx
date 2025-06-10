
import React from 'react';
import { ArrowRight, Phone, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 mindline-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-4">
            Ready to Start Your Mental Wellness Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards better mental health. Our team of licensed professionals 
            is here to support you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Book Your Session</h3>
            <p className="text-blue-100">Schedule your first appointment with one of our licensed therapists</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Start Talking</h3>
            <p className="text-blue-100">Begin your journey in a safe, confidential, and supportive environment</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Progress Forward</h3>
            <p className="text-blue-100">Work together to develop coping strategies and achieve your goals</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-mindline-blue hover:bg-gray-100 transition-colors group">
              Book Appointment Now
              <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-mindline-blue transition-colors group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: +65 6123 4567
            </Button>
          </div>
          
          <p className="text-blue-100 text-sm">
            ✓ No long waiting lists  ✓ Insurance accepted  ✓ Flexible scheduling  ✓ 100% confidential
          </p>
        </div>

        {/* Emergency Support */}
        <div className="mt-12 bg-red-600/90 rounded-2xl p-6 text-center">
          <h4 className="text-white font-semibold mb-2">Need Immediate Support?</h4>
          <p className="text-red-100 mb-4">
            If you're experiencing a mental health crisis, don't wait. Our crisis support team is available 24/7.
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100">
            Get Crisis Support Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
