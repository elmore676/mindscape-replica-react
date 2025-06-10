
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Professional',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b524?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Mindline transformed my approach to mental health. The therapists are incredibly skilled and compassionate. I finally feel like I have the tools to manage my anxiety effectively.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The online counseling platform is amazing. Being able to access professional help from home made all the difference for me. The quality of care is exceptional.'
    },
    {
      name: 'Emily Johnson',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The group therapy sessions helped me realize I wasn\'t alone in my struggles. The supportive environment and professional guidance have been life-changing.'
    },
    {
      name: 'David Kim',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'As a busy entrepreneur, I appreciated the flexible scheduling and the therapist\'s understanding of work-related stress. Highly recommend their services.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Nurse',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Working in healthcare can be emotionally draining. Mindline provided me with the support and coping strategies I needed to maintain my wellbeing while caring for others.'
    },
    {
      name: 'James Wilson',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The student-friendly pricing and understanding of academic pressure made this the perfect choice for me. My therapist helped me develop better study habits and stress management.'
    }
  ];

  return (
    <section className="py-20 bg-mindline-blue-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their mental health journey with Mindline.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-mindline-blue/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-mindline-blue mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mindline-blue mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mindline-blue mb-2">98%</div>
                <div className="text-sm text-gray-600">Would Recommend</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mindline-blue mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
