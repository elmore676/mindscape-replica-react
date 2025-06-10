
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, MessageSquare, Users, Calendar, Shield, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      description: 'Personalized one-on-one sessions with licensed therapists',
      duration: '50 minutes',
      price: 'From $150',
      features: [
        'Initial assessment and treatment planning',
        'Evidence-based therapeutic approaches',
        'Flexible scheduling options',
        'Secure video sessions available',
        'Progress tracking and outcome measurement'
      ]
    },
    {
      icon: Users,
      title: 'Group Therapy',
      description: 'Connect with others in supportive group settings',
      duration: '90 minutes',
      price: 'From $75',
      features: [
        'Small groups (6-8 participants)',
        'Various specialized topics',
        'Peer support and shared experiences',
        'Professional group facilitation',
        'Skills-based and process groups available'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Online Counseling',
      description: 'Professional counseling from the comfort of your home',
      duration: 'Flexible',
      price: 'From $120',
      features: [
        'Secure, HIPAA-compliant platform',
        'Video, voice, or text options',
        'Mobile app available',
        'Same-day appointments often available',
        'Easy rescheduling and cancellation'
      ]
    },
    {
      icon: Calendar,
      title: 'Crisis Support',
      description: 'Immediate support when you need it most',
      duration: '24/7',
      price: 'Covered by insurance',
      features: [
        'Immediate crisis intervention',
        'Safety planning and assessment',
        'Connection to emergency services if needed',
        'Follow-up support and care coordination',
        'Family and loved one support'
      ]
    },
    {
      icon: Shield,
      title: 'Psychological Assessment',
      description: 'Comprehensive evaluations for accurate diagnosis',
      duration: '2-4 hours',
      price: 'From $500',
      features: [
        'Diagnostic interviews and testing',
        'Cognitive and personality assessments',
        'Detailed written reports',
        'Treatment recommendations',
        'Insurance pre-authorization assistance'
      ]
    },
    {
      icon: Award,
      title: 'Wellness Programs',
      description: 'Structured programs for long-term mental wellness',
      duration: '8-12 weeks',
      price: 'From $300',
      features: [
        'Evidence-based program curricula',
        'Skills training and practice',
        'Progress monitoring and feedback',
        'Group and individual components',
        'Relapse prevention planning'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-mindline-blue-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Comprehensive Mental Health Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional, evidence-based mental health care tailored to your unique needs. 
              Choose from our range of services designed to support your journey to wellness.
            </p>
            <Button size="lg" className="mindline-gradient text-white">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-mindline-blue/20 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-mindline-blue" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>

                    <div className="flex justify-between items-center mb-6 p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Starting at</div>
                        <div className="font-semibold text-mindline-blue">{service.price}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-mindline-blue rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mindline-gradient text-white hover:opacity-90">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-lg text-gray-600">
              We work with most major insurance providers and offer flexible payment options
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accepted Insurance</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'UnitedHealth', 'Medicare', 'Medicaid'].map((insurance) => (
                  <div key={insurance} className="bg-white p-4 rounded-lg shadow text-center">
                    <span className="text-gray-700 font-medium">{insurance}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Don't see your insurance? Contact us to verify coverage and benefits.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">$</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Self-Pay</div>
                    <div className="text-sm text-gray-600">Competitive rates for out-of-pocket payments</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">📅</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Payment Plans</div>
                    <div className="text-sm text-gray-600">Flexible payment arrangements available</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">💳</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">HSA/FSA</div>
                    <div className="text-sm text-gray-600">Health savings accounts accepted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
