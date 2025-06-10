
import React from 'react';
import { Brain, MessageSquare, Users, Calendar, Shield, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      description: 'One-on-one sessions with licensed therapists specializing in anxiety, depression, trauma, and more.',
      features: ['50-minute sessions', 'Flexible scheduling', 'Evidence-based approaches', 'Secure & confidential'],
      color: 'mindline-blue'
    },
    {
      icon: Users,
      title: 'Group Therapy',
      description: 'Connect with others facing similar challenges in a supportive group environment.',
      features: ['Small group sizes', 'Peer support', 'Guided discussions', 'Various topics'],
      color: 'mindline-green'
    },
    {
      icon: MessageSquare,
      title: 'Online Counseling',
      description: 'Access professional counseling from the comfort of your home through our secure platform.',
      features: ['Video sessions', 'Chat support', 'Mobile app', '24/7 availability'],
      color: 'mindline-purple'
    },
    {
      icon: Calendar,
      title: 'Crisis Support',
      description: 'Immediate support when you need it most, available 24/7 for mental health emergencies.',
      features: ['Immediate response', '24/7 availability', 'Crisis intervention', 'Safety planning'],
      color: 'mindline-blue'
    },
    {
      icon: Shield,
      title: 'Assessment & Diagnosis',
      description: 'Comprehensive psychological assessments to better understand your mental health needs.',
      features: ['Professional evaluation', 'Detailed reports', 'Treatment planning', 'Insurance support'],
      color: 'mindline-green'
    },
    {
      icon: Award,
      title: 'Wellness Programs',
      description: 'Structured programs designed to build resilience and promote long-term mental wellness.',
      features: ['8-week programs', 'Skills training', 'Progress tracking', 'Group & individual'],
      color: 'mindline-purple'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a full range of mental health services designed to meet you where you are 
            and support you on your journey to wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 bg-${service.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-7 h-7 text-${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-colors`}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Take our quick assessment to get personalized recommendations for your mental health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="mindline-gradient text-white">
                Take Assessment
              </Button>
              <Button variant="outline" size="lg" className="border-mindline-blue text-mindline-blue">
                Speak with a Specialist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
