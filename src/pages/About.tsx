
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Heart, Shield, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Clinical Director',
      credentials: 'PhD, Licensed Clinical Psychologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      bio: 'Dr. Johnson brings over 15 years of experience in clinical psychology, specializing in anxiety disorders and trauma therapy.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Senior Therapist',
      credentials: 'PhD, LMFT',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      bio: 'Specializing in couples therapy and relationship counseling with a focus on evidence-based interventions.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Child & Adolescent Specialist',
      credentials: 'PsyD, Licensed Clinical Psychologist',
      image: 'https://images.unsplash.com/photo-1594824804732-ca823ca4d460?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in child and adolescent mental health with extensive experience in developmental psychology.'
    },
    {
      name: 'Dr. James Kim',
      role: 'Psychiatric Consultant',
      credentials: 'MD, Board-Certified Psychiatrist',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      bio: 'Provides psychiatric consultation and medication management with a holistic approach to mental health.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We approach every client with empathy, understanding that each person\'s journey is unique.'
    },
    {
      icon: Shield,
      title: 'Professional Excellence',
      description: 'Our team maintains the highest standards of clinical practice and professional ethics.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work together with clients as partners in their mental health journey.'
    },
    {
      icon: Globe,
      title: 'Accessible Care',
      description: 'Mental health support should be available to everyone, regardless of circumstance.'
    },
    {
      icon: Star,
      title: 'Evidence-Based Practice',
      description: 'Our treatments are grounded in scientific research and proven methodologies.'
    },
    {
      icon: Award,
      title: 'Continuous Improvement',
      description: 'We continuously update our knowledge and skills to provide the best possible care.'
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
              About Mindline
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to transforming mental health care through compassionate, 
              professional, and accessible services for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, Mindline began with a simple yet powerful vision: to make 
                high-quality mental health care accessible to everyone. Our founders, a team 
                of licensed mental health professionals and technology experts, recognized 
                the barriers many people face when seeking mental health support.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we've grown into a comprehensive mental health platform serving 
                thousands of clients across 25 countries. Our team of over 50 licensed 
                professionals provides evidence-based care through innovative technology 
                while maintaining the human connection that's essential to healing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that mental health is not a luxury—it's a fundamental right. 
                Every day, we work to break down stigma, remove barriers, and create a 
                world where seeking help is seen as a sign of strength, not weakness.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop"
                alt="Our team"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=400&fit=crop"
                alt="Therapy session"
                className="w-full h-48 object-cover rounded-xl mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop"
                alt="Support"
                className="w-full h-48 object-cover rounded-xl -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=400&fit=crop"
                alt="Wellness"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-mindline-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-mindline-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team of mental health professionals is dedicated to providing 
              the highest quality care and support for your wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-mindline-blue font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 mindline-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              These numbers represent real people whose lives have been positively impacted by our services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Lives Transformed' },
              { number: '50+', label: 'Licensed Professionals' },
              { number: '25+', label: 'Countries Served' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
