import React from 'react';
import { 
  BarChart2, Calendar, Zap, Globe, Megaphone, Layers, Search, Mail, 
  Award, TrendingUp, Users, Layout, Sparkles, CheckCircle, TrendingDown,
  Briefcase, Handshake, Compass, Clock, Package, Settings, MessageCircle,
  DollarSign, Code, Sun, Cloud, Wand, Moon
} from 'lucide-react';

const Services: React.FC = () => {
  const marketingServices = [
    { icon: Globe, title: 'Digital Marketing', description: 'Comprehensive digital strategies including SEO, PPC, content marketing, and social media management to boost your online presence.' },
    { icon: Megaphone, title: 'Social Media Marketing', description: 'Engaging social media campaigns across all platforms to build brand awareness and drive customer engagement.' },
    { icon: Layers, title: 'Content Marketing', description: 'Strategic content creation and distribution to attract, engage, and convert your target audience effectively.' },
    { icon: Search, title: 'SEO & SEM', description: 'Advanced search engine optimization and marketing strategies to improve visibility and drive qualified traffic.' },
    { icon: Mail, title: 'Email Marketing', description: 'Personalized email campaigns and automation sequences that nurture leads and drive conversions.' },
    { icon: Award, title: 'Branding & PR', description: 'Comprehensive brand development and public relations strategies to enhance reputation and market positioning.' },
    { icon: TrendingUp, title: 'Paid Ads Management', description: 'Expert management of Google Ads, Facebook Ads, and other paid advertising platforms for maximum ROI.' },
    { icon: Users, title: 'Influencer Marketing', description: 'Strategic partnerships with influencers to amplify your brand message and reach new audiences.' },
    { icon: Layout, title: 'Traditional Marketing', description: 'Print, radio, TV, and outdoor advertising solutions integrated with digital strategies for maximum impact.' },
    { icon: Sparkles, title: 'AI-Driven Insights', description: 'Advanced analytics and AI-powered insights to optimize campaigns and predict market trends.' },
    { icon: CheckCircle, title: 'Custom Sales Strategies', description: 'Tailored sales funnels and conversion optimization strategies to maximize revenue growth.' },
    { icon: TrendingDown, title: 'Reputation Management', description: 'Proactive online reputation monitoring and management to protect and enhance your brand image.' },
  ];

  const eventServices = [
    { icon: Briefcase, title: 'Corporate Events', description: 'Professional corporate gatherings, conferences, and meetings designed to achieve your business objectives.' },
    { icon: Handshake, title: 'Product Launches', description: 'Memorable product launch events that generate buzz and drive market adoption for your new offerings.' },
    { icon: Compass, title: 'Trade Shows & Exhibitions', description: 'Complete trade show management from booth design to lead generation and follow-up strategies.' },
    { icon: Clock, title: 'Gala Dinners & Awards', description: 'Elegant formal events and award ceremonies that celebrate achievements and build relationships.' },
    { icon: Package, title: 'Virtual & Hybrid Events', description: 'Cutting-edge virtual and hybrid event solutions that connect audiences regardless of location.' },
  ];

  const aiServices = [
    { icon: MessageCircle, title: 'Marketing Automation', description: 'Intelligent marketing automation workflows that nurture leads and personalize customer journeys.' },
    { icon: DollarSign, title: 'Sales Automation', description: 'AI-powered sales process automation to streamline lead qualification and conversion.' },
    { icon: Users, title: 'CRM Integration', description: 'Advanced CRM solutions with AI insights for better customer relationship management.' },
    { icon: Code, title: 'Workflow Automation', description: 'Custom business process automation to eliminate manual tasks and improve efficiency.' },
    { icon: Sun, title: 'Customer Service Automation', description: 'AI chatbots and automated customer service solutions for 24/7 support excellence.' },
    { icon: Cloud, title: 'Data Automation & Analytics', description: 'Automated data collection, processing, and reporting with actionable business insights.' },
    { icon: Wand, title: 'Custom AI Solutions', description: 'Bespoke AI applications tailored to your specific business needs and industry requirements.' },
    { icon: Moon, title: 'AI-Powered Decision Making', description: 'Predictive analytics and AI insights to support strategic business decision making.' },
  ];

  const ServiceCard: React.FC<{ icon: React.ElementType; title: string; description: string; color: string }> = 
    ({ icon: Icon, title, description, color }) => (
    <div className="card-service card-hover">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="py-12 animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Comprehensive Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From A-Z marketing solutions to seamless event management and intelligent automation, 
            we provide comprehensive services that drive business growth and success.
          </p>
        </div>
      </section>

      {/* Marketing Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gray-dark rounded-xl flex items-center justify-center">
                <BarChart2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Marketing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive A-Z marketing services combining digital innovation with traditional excellence, 
              powered by AI-driven insights for measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} color="bg-gray-dark" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Management */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-charcoal rounded-xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Event Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              End-to-end event management services that create memorable experiences, 
              from intimate corporate gatherings to large-scale international conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} color="bg-charcoal" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Automation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation solutions that enhance efficiency, 
              reduce costs, and provide actionable insights for strategic decision making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} color="bg-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Let's discuss which services align best with your business goals and create a 
              customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Schedule a Consultation
              </button>
              <button className="bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/20">
                Download Service Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;