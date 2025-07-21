import React from 'react';
import { BarChart2, Calendar, Zap, Award, Handshake, Rocket, Brain, ChevronRight } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';
import teamPhoto from '../assets/team-photo.jpg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-hero">
          <img 
            src={heroImage} 
            alt="HAVENLYF Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-white/5 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            HAVENLYF
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your Partner in{' '}
            <span className="text-gray-light font-semibold">Innovative Marketing</span>,{' '}
            <span className="text-white font-semibold">Seamless Events</span>, and{' '}
            <span className="text-gray-light font-semibold">Intelligent Automation</span>
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-hero inline-flex items-center space-x-2 animate-fade-in-up transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ animationDelay: '0.4s' }}
          >
            <span>Get a Free Consultation</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive solutions across three core areas, 
              delivering exceptional results through innovation and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Marketing Solutions */}
            <div className="card-service card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-dark/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BarChart2 className="w-8 h-8 text-gray-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Marketing Solutions</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From digital strategies to traditional campaigns, we deliver comprehensive 
                  marketing solutions powered by AI-driven insights and creative innovation.
                </p>
                <button
                  onClick={() => onNavigate('services')}
                  className="btn-secondary inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:brightness-110 animate-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Event Management */}
            <div className="card-service card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Event Management</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  End-to-end event management for corporate gatherings, product launches, 
                  trade shows, and virtual experiences that leave lasting impressions.
                </p>
                <button
                  onClick={() => onNavigate('services')}
                  className="btn-secondary inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:brightness-110 animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* AI Automation */}
            <div className="card-service card-hover animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transform your business operations with intelligent automation solutions 
                  that enhance efficiency, reduce costs, and drive growth.
                </p>
                <button
                  onClick={() => onNavigate('services')}
                  className="btn-secondary inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:brightness-110 animate-fade-in-up"
                  style={{ animationDelay: '0.6s' }}
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by three passionate entrepreneurs - Pragadheashwar Vijayan S, Tiffano R S, and Lokesh - 
                HAVENLYF was born from a shared vision to revolutionize how businesses approach 
                marketing, events, and automation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our diverse expertise combines creativity with technology, delivering solutions 
                that not only meet but exceed expectations. We believe in building lasting 
                partnerships through innovation, reliability, and exceptional service.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="btn-primary inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:brightness-110 animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                <span>Meet the Team</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="animate-fade-in-up scale-95 hover:scale-100 transition-all duration-500" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <img
                  src={teamPhoto}
                  alt="Our Passionate Team"
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose HAVENLYF?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional results through our unique combination of innovation, 
              expertise, and unwavering commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovative Approach */}
            <div className="text-center card-service card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gray-medium/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-gray-medium" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovative Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We leverage cutting-edge technologies and creative strategies to deliver 
                solutions that set you apart from the competition.
              </p>
            </div>

            {/* Personalized Service */}
            <div className="text-center card-service card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-charcoal/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every client receives tailored solutions designed specifically for their 
                unique needs, goals, and industry requirements.
              </p>
            </div>

            {/* Unmatched Speed */}
            <div className="text-center card-service card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gray-dark/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-gray-dark" />
              </div>
              <h3 className="text-xl font-bold mb-4">Unmatched Speed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our streamlined processes and efficient team ensure rapid delivery 
                without compromising on quality or attention to detail.
              </p>
            </div>

            {/* Unique Technology */}
            <div className="text-center card-service card-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Unique Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our proprietary AI-driven tools and advanced automation systems 
                provide insights and efficiency that drive measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Let's discuss how HAVENLYF can elevate your marketing, streamline your events, 
              and supercharge your operations with intelligent automation.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-hero inline-flex items-center space-x-2"
            >
              <span>Get in Touch Today</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;