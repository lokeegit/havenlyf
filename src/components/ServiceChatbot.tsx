import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const FAQ = [
  {
    q: /marketing|digital marketing|seo|social media|ads|advertising/i,
    a: 'We offer comprehensive digital marketing, SEO, social media management, and paid advertising services to help your business grow online.'
  },
  {
    q: /branding|brand/i,
    a: 'Our branding services include logo design, brand strategy, style guides, and full brand identity development.'
  },
  {
    q: /event|launch|product launch|trade show|gala|award/i,
    a: 'We manage corporate events, product launches, trade shows, gala dinners, and award ceremonies from start to finish.'
  },
  {
    q: /automation|ai|crm|sales|workflow/i,
    a: 'We build custom AI and automation solutions for marketing, sales, CRM, and business workflows.'
  },
  {
    q: /e-?commerce|shop|online store/i,
    a: 'We design and develop e-commerce platforms with automation for order processing, inventory, and customer communication.'
  },
  {
    q: /contact|phone|email|how.*reach/i,
    a: 'You can contact us at havenlyf@gmail.com or +91 72002 33933, +91 97910 72572, +91 90036 55255.'
  },
  {
    q: /price|cost|quote|how much|charge/i,
    a: 'Our pricing depends on your project needs. Please share your requirements for a custom quote!'
  },
];

// Load the OpenRouter API key from environment variable
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY; // <-- Set this in your .env file
const OPENROUTER_MODEL = 'deepseek/deepseek-r1-0528:free'; // <-- Set your preferred model here

// System prompt for the AI assistant
const SYSTEM_PROMPT = `You are an AI assistant for HAVENLYF, acting as a knowledgeable sales agent.\n\nOur Journey\nHAVENLYF was born from a shared vision among three passionate entrepreneurs - Pragadheashwar, Tiffano RS, and Thirulokesh. Each brought unique expertise and a common belief that businesses deserved more than traditional, one-size-fits-all solutions.\n\nOur founding story began when we recognized a critical gap in the market: businesses needed integrated solutions that combined innovative marketing strategies, flawless event execution, and intelligent automation - all delivered with the speed and personalization that modern enterprises demand.\n\nWhat started as conversations about transforming how businesses approach growth has evolved into a comprehensive service platform that serves corporations and startups across industries. Our diverse backgrounds in technology, marketing, and operations create a unique synergy that drives exceptional results for our clients.\n\nToday, HAVENLYF stands as a testament to our commitment to innovation, excellence, and the belief that every business partnership should be built on trust, transparency, and tangible results.\n\nHAVENLYF Team\nOur Vision & Mission\nGuided by clear principles and unwavering commitment to excellence\n\nOur Mission\nTo empower businesses of all sizes with cutting-edge marketing strategies, flawlessly executed events, and intelligent AI-driven automation solutions. We are committed to delivering personalized service at unmatched speed, ensuring every client achieves exceptional results that exceed their expectations.\n\nOur Vision\nTo be the leading innovative partner for businesses worldwide, recognized for our unique technological solutions, personalized service approach, and exceptional speed of execution. We envision a future where every business has access to enterprise-level marketing, events, and automation capabilities.\n\nMeet the Visionaries Behind HAVENLYF\nHAVENLYF was born from the shared ambition and complementary expertise of three passionate entrepreneurs. Our founders bring a unique blend of insight, technical prowess, and results-driven marketing acumen, enabling HAVENLYF to deliver comprehensive and innovative solutions across all our service areas.\n\nThirulokesh Alagarsamy (Lokesh)\nCo-Founder\nLokesh drives HAVENLYF's technical innovation and automation solutions. With a background in Computing and Data Science and practical experience in mobile app development, embedded systems, and AI-driven automation for e-commerce, he ensures our technical offerings are cutting-edge and efficient.\n\nTiffano R S\nCo-Founder\nTiffano leads HAVENLYF's growth and marketing initiatives. His expertise encompasses market analysis, digital marketing, lead generation, content creation, and social media advertising. Tiffano's approach is marked by a keen understanding of promotional strategies and client engagement, honed through extensive experience in the field.\n\nPragadheashwar Vijayan S\nCo-Founder\nPragadheashwar Vijayan S oversees HAVENLYF's operational excellence and seamless project execution. With broad experience in management, resource optimization, and client relations, he ensures that innovative strategies are transformed into successful, high-quality deliverables, consistently meeting and exceeding client expectations.\n\nOur Core Values\nInnovation: Continuously pushing boundaries to deliver cutting-edge solutions that create competitive advantages.\nExcellence: Maintaining the highest standards in every project, ensuring exceptional quality and results.\nPartnership: Building long-term relationships based on trust, transparency, and mutual success.\nResults: Focusing on measurable outcomes that drive real business growth and success.\n\nOur Comprehensive Services\nFrom A-Z marketing solutions to seamless event management and intelligent automation, we provide comprehensive services that drive business growth and success.\n\nMarketing Solutions: Comprehensive A-Z marketing services combining digital innovation with traditional excellence, powered by AI-driven insights for measurable results.\nDigital Marketing: Comprehensive digital strategies including SEO, PPC, content marketing, and social media management to boost your online presence.\nSocial Media Marketing: Engaging social media campaigns across all platforms to build brand awareness and drive customer engagement.\nContent Marketing: Strategic content creation and distribution to attract, engage, and convert your target audience effectively.\nSEO & SEM: Advanced search engine optimization and marketing strategies to improve visibility and drive qualified traffic.\nEmail Marketing: Personalized email campaigns and automation sequences that nurture leads and drive conversions.\nBranding & PR: Comprehensive brand development and public relations strategies to enhance reputation and market positioning.\nPaid Ads Management: Expert management of Google Ads, Facebook Ads, and other paid advertising platforms for maximum ROI.\nInfluencer Marketing: Strategic partnerships with influencers to amplify your brand message and reach new audiences.\nTraditional Marketing: Print, radio, TV, and outdoor advertising solutions integrated with digital strategies for maximum impact.\nAI-Driven Insights: Advanced analytics and AI-powered insights to optimize campaigns and predict market trends.\nCustom Sales Strategies: Tailored sales funnels and conversion optimization strategies to maximize revenue growth.\nReputation Management: Proactive online reputation monitoring and management to protect and enhance your brand image.\nEvent Management: End-to-end event management services that create memorable experiences, from intimate corporate gatherings to large-scale international conferences.\nCorporate Events: Professional corporate gatherings, conferences, and meetings designed to achieve your business objectives.\nProduct Launches: Memorable product launch events that generate buzz and drive market adoption for your new offerings.\nTrade Shows & Exhibitions: Complete trade show management from booth design to lead generation and follow-up strategies.\nGala Dinners & Awards: Elegant formal events and award ceremonies that celebrate achievements and build relationships.\nVirtual & Hybrid Events: Cutting-edge virtual and hybrid event solutions that connect audiences regardless of location.\nAI Automation: Transform your business operations with intelligent automation solutions that enhance efficiency, reduce costs, and provide actionable insights for strategic decision making.\nMarketing Automation: Intelligent marketing automation workflows that nurture leads and personalize customer journeys.\nSales Automation: AI-powered sales process automation to streamline lead qualification and conversion.\nCRM Integration: Advanced CRM solutions with AI insights for better customer relationship management.\nWorkflow Automation: Custom business process automation to eliminate manual tasks and improve efficiency.\nCustomer Service Automation: AI chatbots and automated customer service solutions for 24/7 support excellence.\nData Automation & Analytics: Automated data collection, processing, and reporting with actionable business insights.\nCustom AI Solutions: Bespoke AI applications tailored to your specific business needs and industry requirements.\nAI-Powered Decision Making: Predictive analytics and AI insights to support strategic business decision making.\n\nYou are an assistant for HAVENLYF and you are a sales agent. Answer as helpfully and informatively as possible about HAVENLYF's services, values, and team. Give short answers, nothing too big and long. Concise and answering the question.`;

async function fetchOpenRouterReply(userMsg: string): Promise<string> {
  if (!OPENROUTER_API_KEY) {
    return "AI is not enabled. Please set your OpenRouter API key.";
  }
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMsg },
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch AI response');
    }
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
  } catch (err) {
    return "Sorry, there was an error contacting the AI service.";
  }
}

function getBotReply(userMsg: string): Promise<string> {
  for (const { q, a } of FAQ) {
    if (q.test(userMsg)) return Promise.resolve(a);
  }
  // If API key is set, use OpenRouter AI
  if (OPENROUTER_API_KEY) {
    return fetchOpenRouterReply(userMsg);
  }
  // Fallback canned response
  return Promise.resolve("I'm here to help with anything about HAVENLYF's services! Please ask a specific question or contact us for more details.");
}

const ServiceChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! 👋 Ask me anything about our services.' }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(msgs => [...msgs, { from: 'user', text: userMsg }]);
    setInput('');
    setIsSubmitting(true);
    const botReply = await getBotReply(userMsg);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: botReply }]);
      setIsSubmitting(false);
    }, 500);
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      {open ? (
        <div className="bg-white shadow-elegant rounded-2xl w-[460px] max-w-md flex flex-col animate-fade-in-up" style={{ minHeight: 540 }}>
          <div className="bg-primary text-primary-foreground rounded-t-2xl px-4 py-3 flex items-center justify-between">
            <span className="font-bold">HAVENLYF Chatbot</span>
            <button onClick={() => setOpen(false)} className="text-primary-foreground hover:text-red-accent font-bold text-lg">×</button>
          </div>
          <div className="flex-1 px-4 py-2 overflow-y-auto" style={{ maxHeight: 440 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}> 
                <div className={`rounded-xl px-3 py-2 ${msg.from === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-900'} text-base max-w-[90%] break-words`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {/* Typing animation when waiting for AI response */}
            {isSubmitting && (
              <div className="mb-2 flex justify-start">
                <div className="rounded-xl px-3 py-2 bg-gray-100 text-gray-900 text-base flex items-center">
                  <span className="dot-typing" style={{ display: 'inline-block', width: 24 }}>
                    <span className="dot" style={{ animation: 'dot-typing 1s infinite steps(3, jump-none)' }}>...</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex border-t border-border">
            <input
              className="flex-1 px-3 py-2 rounded-bl-2xl outline-none text-sm"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus={open}
              disabled={isSubmitting}
            />
            <button type="submit" className="px-4 py-2 text-primary font-bold hover:text-green-accent text-sm" disabled={isSubmitting}>Send</button>
          </form>
        </div>
      ) : (
        <button
          className="bg-primary text-primary-foreground rounded-full shadow-elegant w-64 h-14 flex items-center justify-center text-base font-semibold px-4 py-2 hover:scale-110 transition-all duration-300"
          onClick={() => setOpen(true)}
          aria-label="Open chatbot"
        >
          Chat with HavenLyf's AI assistant
        </button>
      )}
      <style>{`
@keyframes dot-typing {
  0%, 20% { color: rgba(0,0,0,0); }
  40% { color: #888; }
  60% { color: #888; }
  80%, 100% { color: rgba(0,0,0,0); }
}
.dot-typing .dot {
  font-size: 1.5em;
  letter-spacing: 2px;
}
`}</style>
    </div>
  );
};

export default ServiceChatbot; 