import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'havenlyf@gmail.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      color: 'bg-gray-dark',
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      value: '+91 72002 33933, +91 97910 72572, +91 90036 55255',
      description: 'Call or message us for immediate assistance on any of these numbers',
      color: 'bg-charcoal',
    },
    {
      icon: Instagram,
      title: 'Social Media',
      value: '@havenlyf',
      description: 'Follow us for updates and behind-the-scenes content',
      color: 'bg-gray-medium',
    },
  ];

  return (
    <div className="py-12 animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to transform your business? Let's discuss your goals and create a 
            customized solution that drives exceptional results.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8">Let's Start a Conversation</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to revolutionize your marketing strategy, create 
                unforgettable events, or implement intelligent automation, we're here to help. 
                Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={method.title} className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-primary font-medium mb-2">{method.value}</p>
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Physical Address Placeholder */}
              <div className="mt-8 p-6 bg-white rounded-xl shadow-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <h3 className="font-semibold">Office Location</h3>
                </div>
                <p className="text-muted-foreground">
                  We primarily operate remotely to better serve clients globally. 
                  Physical meeting locations can be arranged upon request.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold mb-8">Send Us a Message</h2>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-accent/10 border border-green-accent/20 rounded-lg flex items-center space-x-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-accent" />
                  <p className="text-green-accent font-medium">
                    Your message has been sent successfully! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-accent/10 border border-red-accent/20 rounded-lg flex items-center space-x-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-accent" />
                  <p className="text-red-accent font-medium">
                    There was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-y"
                    placeholder="Tell us about your project, goals, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                  By submitting this form, you agree to our privacy policy. 
                  We'll never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8">What Happens Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">We Respond Fast</h3>
                <p className="text-muted-foreground">
                  You'll hear back from us within 24 hours, often much sooner.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery Call</h3>
                <p className="text-muted-foreground">
                  We'll schedule a call to understand your needs and goals in detail.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-purple-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Proposal</h3>
                <p className="text-muted-foreground">
                  You'll receive a tailored proposal with clear timelines and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prefer to Talk Right Now?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              If you'd rather speak with someone immediately, give us a call. 
              We're always happy to discuss your project over the phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917200233933"
                className="btn-hero inline-flex items-center space-x-2"
              >
                <Phone size={16} />
                <span>Call +91 72002 33933</span>
              </a>
              <a
                href="https://wa.me/917200233933"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/20 inline-flex items-center space-x-2"
              >
                <Phone size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;