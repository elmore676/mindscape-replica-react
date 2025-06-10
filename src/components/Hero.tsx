
import React from 'react';
import { ArrowRight, Play, Shield, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mindline-blue-light via-white to-mindline-purple/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mindline-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mindline-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-mindline-blue/5 to-mindline-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-mindline-blue/10 rounded-full text-mindline-blue text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Mental Health Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight mb-6">
              Your Mental 
              <span className="block text-gradient">Wellness Journey</span>
              Starts Here
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Professional mental health services tailored to your needs. Connect with licensed therapists, 
              access resources, and take control of your mental wellness with our comprehensive platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="mindline-gradient text-white hover:opacity-90 transition-opacity group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-mindline-blue text-mindline-blue hover:bg-mindline-blue hover:text-white transition-colors group">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-mindline-blue mb-2">10K+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mindline-blue mb-2">50+</div>
                <div className="text-sm text-gray-600">Expert Therapists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mindline-blue mb-2">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main image placeholder */}
              <div className="w-full h-[600px] bg-gradient-to-br from-mindline-blue-light to-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=center"
                  alt="Mental Health Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-mindline-green/20 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-mindline-green" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Wellness Score</div>
                    <div className="text-2xl font-bold text-mindline-green">92%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-mindline-purple/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-mindline-purple" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Active Sessions</div>
                    <div className="text-2xl font-bold text-mindline-purple">2.4K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
