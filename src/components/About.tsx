
import React from 'react';
import { Check, Star, Award, Users, Clock, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Lives Transformed' },
    { icon: Award, number: '50+', label: 'Licensed Professionals' },
    { icon: Star, number: '4.9/5', label: 'Client Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Globe, number: '25+', label: 'Countries Served' },
    { icon: Check, number: '98%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'Compassionate Care',
      description: 'We approach every client with empathy, understanding, and genuine care for their wellbeing.'
    },
    {
      title: 'Evidence-Based Treatment',
      description: 'Our therapies are grounded in scientific research and proven methodologies.'
    },
    {
      title: 'Accessible Support',
      description: 'Mental health care should be available to everyone, regardless of location or circumstance.'
    },
    {
      title: 'Holistic Approach',
      description: 'We treat the whole person, considering all aspects of mental, emotional, and social wellbeing.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Transforming Mental Health Care for a Better Tomorrow
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Mindline, we believe that mental health is fundamental to overall wellbeing. 
              Our mission is to make professional mental health care accessible, effective, and 
              personalized for every individual who seeks our support.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded by a team of mental health professionals and technology experts, we combine 
              clinical expertise with innovative technology to deliver care that meets you where you are. 
              Whether you're dealing with everyday stress or complex mental health challenges, 
              we're here to support your journey.
            </p>
            
            <div className="space-y-4">
              {['Licensed & Certified Professionals', 'HIPAA Compliant & Secure', 'Personalized Treatment Plans', 'Ongoing Support & Follow-up'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-mindline-green/20 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-mindline-green" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop&crop=center"
                  alt="Mental health professional"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=center"
                  alt="Therapy session"
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop&crop=center"
                  alt="Support group"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=400&fit=crop&crop=center"
                  alt="Wellness journey"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-mindline-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-mindline-blue" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape how we serve our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
