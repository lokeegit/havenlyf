import React from 'react';
import { ExternalLink, Target, Lightbulb, TrendingUp } from 'lucide-react';
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Elith Diet Food Company',
      category: 'Marketing, Branding, Sales, Social Media Handling',
      challenge: 'Elith Diet Food, a new player in the health food market, struggled with low brand awareness and limited online engagement. They needed to establish a strong brand identity and reach their target health-conscious audience effectively to drive sales.',
      solution: `We developed and executed a full-funnel digital marketing strategy. This included comprehensive branding guidelines (logo refinement, color palette, typography), SEO optimization for their website, a targeted social media content calendar focused on healthy recipes and lifestyle tips, and precise paid ad campaigns on platforms like Instagram and Google. We managed their social media presence daily, engaging with followers and running contests to boost visibility.`,
      results: `Increased website traffic by 80% within the first 4 months. Grew Instagram follower count by 150% and Facebook engagement by 120%. Achieved a 25% increase in online sales conversion rate. Generated over 500 qualified leads for their subscription service.`,
      visuals: 'Before/after screenshots of their Instagram feed; analytics dashboards showing traffic and sales growth; examples of engaging ad creatives; their refined logo and branding elements.'
    },
    {
      id: 2,
      title: 'Better Eats',
      category: 'Marketing, Branding, Sales, Social Media Handling',
      challenge: 'Better Eats, an emerging healthy meal delivery service, faced stiff competition and a need to clearly differentiate its offerings. They required a robust strategy to attract new customers and build a loyal community around their brand.',
      solution: `Our team crafted an integrated marketing and branding campaign. We refined their brand messaging to highlight their unique selling propositions (e.g., organic ingredients, customizable plans). Our digital marketing efforts focused on personalized email campaigns and content marketing around nutrition. We actively managed their social media, running influencer collaborations and user-generated content campaigns that significantly broadened their reach and fostered community interaction.`,
      results: `Customer acquisition rate increased by 60% in 5 months. Generated 200+ positive online reviews across various platforms. Achieved an average engagement rate of 10% on social media posts. Saw a 35% increase in repeat customer orders.`,
      visuals: 'Examples of visually appealing social media posts; a graphic showing the customer journey through email automation; screenshots of positive customer reviews; photos of their meal packaging and delivery service.'
    },
    {
      id: 3,
      title: 'TM Shoppy',
      category: 'E-commerce Building & Automation',
      challenge: 'TM Shoppy needed a completely new e-commerce platform that was scalable, user-friendly, and highly automated to manage a diverse product catalog and streamline order fulfillment from end-to-end.',
      solution: `We designed and developed a custom, high-performance e-commerce website from scratch using a robust platform (e.g., Shopify Plus or Magento, specify if you use one). Our team implemented comprehensive automation workflows for order processing, inventory management, shipping notifications, and post-purchase customer follow-ups. This included integrating CRM and payment gateways, setting up automated abandoned cart reminders, and optimizing product listings for SEO.`,
      results: `Successfully launched the platform with zero downtime and over 1,000 products. Reduced manual order processing time by 70%, freeing up staff for other tasks. Achieved a 15% increase in conversion rate within the first quarter post-launch due to improved user experience and automation. Automated email sequences resulted in a 20% recovery of abandoned carts.`,
      visuals: `Screenshots of the sleek e-commerce website (homepage, product page, checkout); a flowchart illustrating the automated order fulfillment process; a graphic demonstrating the abandoned cart recovery sequence; uptime monitoring dashboard screenshot.`
    },
    {
      id: 4,
      title: 'The Creative Gifts',
      category: 'E-commerce Building & Automation',
      challenge: 'The Creative Gifts required an intuitive and visually appealing online store to showcase their unique, customizable products, along with a backend system capable of handling complex order variations and automating communication.',
      solution: `We built a bespoke e-commerce website focusing on an engaging user experience and a seamless customization process for customers. We integrated powerful product configuration tools and implemented marketing automation sequences to nurture leads and convert visitors into buyers. This included automated email marketing for different customer segments, personalized product recommendations, and automated inventory alerts.`,
      results: `Achieved a 20% higher average order value (AOV) due to effective upsells and personalized recommendations. Increased website conversion rates by 18% through optimized product pages and smooth checkout. Automated customer communication reduced manual inquiries by 40%. Managed inventory effectively with less than 1% stock-out rate for popular items.`,
      visuals: `Screenshots of the website's product customization interface; examples of personalized email campaigns; a visual representation of how products are recommended automatically; a before/after view of their inventory management screen.`
    },
    {
      id: 5,
      title: 'Kakliartz',
      category: 'E-commerce Building & Automation',
      challenge: 'Kakliartz, an art and craft supplies provider, needed to transition from a traditional sales model to a robust online presence that could handle a large, diverse inventory and offer a smooth, artist-friendly shopping experience.',
      solution: `We developed a comprehensive e-commerce platform tailored to the unique needs of art supplies, including features for managing variations (e.g., colors, sizes) and bulk purchasing. We implemented advanced inventory automation to track thousands of SKUs and integrated with various shipping carriers for automated label generation. Our automation also covered customer support FAQs with AI-powered chatbots for instant responses.`,
      results: `Successfully migrated over 5,000 product SKUs to the new platform seamlessly. Reduced order fulfillment time by 25% through integrated shipping automation. Chatbot automation handled 60% of common customer inquiries, improving response times. Achieved a 10% increase in average monthly sales through improved product discoverability and user experience.`,
      visuals: `Screenshots of the Kakliartz e-commerce site (especially product categories and search); a diagram illustrating the chatbot's workflow; analytics showing reduced customer support tickets; screenshots of efficient inventory management dashboards.`
    },
    {
      id: 6,
      title: 'Blakq Premium Clothing Brand',
      category: 'Branding, Automation, Production Shooting, Launch Event, Overall Strategy',
      challenge: 'Blakq needed to launch a new premium clothing brand from the ground up, requiring a cohesive brand identity, high-quality visual content, a memorable launch event, and efficient backend operations.',
      solution: `This was a full-scale partnership. We developed the entire brand identity and style guide for Blakq, including logo, color palettes, typography, and brand voice. We meticulously managed creative production, including professional photoshoot coordination and execution for their entire collection (product, lifestyle, and campaign imagery). We planned and executed a high-profile launch event, handling everything from venue and guest list to media relations and on-site coordination. Simultaneously, we set up marketing and sales automation (e.g., pre-order campaigns, email nurturing for VIPs) and streamlined their order fulfillment processes to ensure a seamless post-launch experience.`,
      results: `Achieved 100% media attendance at the launch event, generating 20+ immediate press mentions. Secured 15,000 pre-orders within the first two weeks, exceeding initial targets by 50%. Generated $X revenue in the first month post-launch, establishing strong market entry. Automated customer onboarding reduced manual welcome tasks by 80%. High-quality visuals led to a 5% higher conversion rate on product pages compared to industry average.`,
      visuals: `Blakq's brand style guide mockups; behind-the-scenes photos from the photoshoot; stunning final campaign imagery; photos/video highlights from the launch event; screenshots of successful pre-order campaign performance.`
    },
  ];

  const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => (
    <div className="bg-card rounded-2xl shadow-card overflow-hidden card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">{project.category}</span>
        <div className="space-y-6 mt-4">
          {/* Challenge */}
          <div>
            <div className="flex items-center mb-3">
              <Target className="w-5 h-5 text-red-accent mr-2" />
              <h4 className="font-semibold text-lg">Challenge</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          {/* Solution */}
          <div>
            <div className="flex items-center mb-3">
              <Lightbulb className="w-5 h-5 text-yellow-accent mr-2" />
              <h4 className="font-semibold text-lg">Solution</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
          {/* Results */}
          <div>
            <div className="flex items-center mb-3">
              <TrendingUp className="w-5 h-5 text-green-accent mr-2" />
              <h4 className="font-semibold text-lg">Results</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed font-medium">{project.results}</p>
          </div>
          {/* Visuals (optional) */}
          {project.visuals && (
            <div>
              <h4 className="font-semibold text-lg mb-3">Suggested Visuals</h4>
              <p className="text-muted-foreground leading-relaxed">{project.visuals}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12 animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Success Stories
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover how we've helped businesses across industries achieve remarkable results 
            through innovative marketing, seamless events, and intelligent automation.
          </p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each project represents our commitment to delivering exceptional results through 
              strategic thinking, innovative solutions, and flawless execution.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">More Success Stories Coming Soon!</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're constantly adding new projects that highlight our diverse capabilities 
                across marketing, events, and AI automation. Each case study demonstrates our 
                commitment to delivering measurable results and exceptional value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Request Custom Case Study
                </button>
                <button className="btn-secondary">
                  Download Portfolio PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Results That Speak</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record demonstrates consistent delivery of exceptional outcomes 
              across all service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Brands</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-green-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-blue-accent mb-2">250%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-yellow-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Let's discuss your project and explore how we can deliver exceptional results 
              that exceed your expectations.
            </p>
            <button className="btn-hero">
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;