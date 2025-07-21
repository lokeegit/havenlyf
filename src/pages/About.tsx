import React from 'react';
import { Lightbulb, Target, Award, Users, Linkedin, Mail, Phone } from 'lucide-react';
import teamPhoto from '../assets/team-photo.jpg';

const About: React.FC = () => {
  const founders = [
    {
      name: 'Pragadheashwar Vijayan S',
      role: 'Founder',
      bio: 'A visionary leader with extensive experience in marketing strategy and business development. Pragtheeswar brings innovative thinking and strategic oversight to every client engagement, ensuring that HAVENLYF delivers cutting-edge solutions that drive measurable results.',
      image: '/src/assets/pragtheeswar.jpg',
    },
    {
      name: 'Tiffano R S',
      role: 'Founder',
      bio: 'Technology expert specializing in AI automation and digital transformation. Tiffano leads our technical innovation efforts, developing proprietary solutions that give our clients competitive advantages through intelligent automation and data-driven insights.',
      image: '/src/assets/tiffano.jpg',
    },
    {
      name: 'Thirulokesh Alagarsamy',
      role: 'Founder',
      bio: 'Operations specialist with a passion for event management and client success. Lokesh ensures flawless execution of every project, from intimate corporate gatherings to large-scale international events, maintaining the highest standards of quality and service.',
      image: '/src/assets/lokesh.jpg',
    },
  ];

  return (
    <div className="py-12 animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About HAVENLYF
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the story behind our innovative approach to marketing, events, and automation, 
            and meet the passionate team that makes it all possible.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Our Journey</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  HAVENLYF was born from a shared vision among three passionate entrepreneurs - 
                  Pragadheashwar, Tiffano RS, and Thirulokesh. Each brought unique expertise and a common 
                  belief that businesses deserved more than traditional, one-size-fits-all solutions.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our founding story began when we recognized a critical gap in the market: 
                  businesses needed integrated solutions that combined innovative marketing strategies, 
                  flawless event execution, and intelligent automation - all delivered with the speed 
                  and personalization that modern enterprises demand.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as conversations about transforming how businesses approach growth 
                  has evolved into a comprehensive service platform that serves corporations and 
                  startups across industries. Our diverse backgrounds in technology, marketing, 
                  and operations create a unique synergy that drives exceptional results for our clients.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, HAVENLYF stands as a testament to our commitment to innovation, excellence, 
                  and the belief that every business partnership should be built on trust, 
                  transparency, and tangible results.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img
                  src={teamPhoto}
                  alt="HAVENLYF Team"
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision & Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by clear principles and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-card card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower businesses of all sizes with cutting-edge marketing strategies, 
                flawlessly executed events, and intelligent AI-driven automation solutions. 
                We are committed to delivering personalized service at unmatched speed, 
                ensuring every client achieves exceptional results that exceed their expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-card card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-accent/10 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-accent" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading innovative partner for businesses worldwide, recognized for our 
                unique technological solutions, personalized service approach, and exceptional 
                speed of execution. We envision a future where every business has access to 
                enterprise-level marketing, events, and automation capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the Visionaries Behind HAVENLYF</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              HAVENLYF was born from the shared ambition and complementary expertise of three passionate entrepreneurs. Our founders bring a unique blend of insight, technical prowess, and results-driven marketing acumen, enabling HAVENLYF to deliver comprehensive and innovative solutions across all our service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Thirulokesh */}
            <div className="text-center animate-fade-in-up">
              <div className="bg-white rounded-2xl p-8 shadow-card card-hover">
                <div className="relative mb-6">
                  <img
                    src="/images/IMG_3749 (2).jpg"
                    alt="Thirulokesh Alagarsamy"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-primary/10 shadow-card object-cover"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-primary opacity-10 mx-auto"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thirulokesh Alagarsamy (Lokesh)</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Lokesh drives HAVENLYF's technical innovation and automation solutions. With a background in Computing and Data Science and practical experience in mobile app development, embedded systems, and AI-driven automation for e-commerce, he ensures our technical offerings are cutting-edge and efficient.
                </p>
              </div>
            </div>
            {/* Tiffano */}
            <div className="text-center animate-fade-in-up">
              <div className="bg-white rounded-2xl p-8 shadow-card card-hover">
                <div className="relative mb-6">
                  <img
                    src="/images/Screenshot 2025-07-11 193431.png"
                    alt="Tiffano R S"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-primary/10 shadow-card object-cover"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-primary opacity-10 mx-auto"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Tiffano R S</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tiffano leads HAVENLYF's growth and marketing initiatives. His expertise encompasses market analysis, digital marketing, lead generation, content creation, and social media advertising. Tiffano's approach is marked by a keen understanding of promotional strategies and client engagement, honed through extensive experience in the field.
                </p>
              </div>
            </div>
            {/* Pragatheeswar */}
            <div className="text-center animate-fade-in-up">
              <div className="bg-white rounded-2xl p-8 shadow-card card-hover">
                <div className="relative mb-6">
                  <img
                    src="/images/WhatsApp Image 2025-07-20 at 11.14.09_15740c07.jpg"
                    alt="Pragadheashwar Vijayan S"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-primary/10 shadow-card object-cover"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-primary opacity-10 mx-auto"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Pragadheashwar Vijayan S</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pragadheashwar Vijayan S oversees HAVENLYF's operational excellence and seamless project execution. With broad experience in management, resource optimization, and client relations, he ensures that innovative strategies are transformed into successful, high-quality deliverables, consistently meeting and exceeding client expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision and interaction at HAVENLYF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-card card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously pushing boundaries to deliver cutting-edge solutions that create competitive advantages.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-card card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-green-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Maintaining the highest standards in every project, ensuring exceptional quality and results.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-card card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-purple-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-muted-foreground">
                Building long-term relationships based on trust, transparency, and mutual success.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-card card-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-yellow-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-yellow-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Results</h3>
              <p className="text-muted-foreground">
                Focusing on measurable outcomes that drive real business growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Let's start a conversation about how HAVENLYF can help transform your business 
              through innovative marketing, exceptional events, and intelligent automation.
            </p>
            <a href="/contact" className="btn-hero inline-block">
              Let's Connect Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;