import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useNavigate } from 'react-router-dom';

interface PricingProps {
  onOpenModal: () => void;
}

const tiers = [
  {
    name: 'Shopify Express',
    price: '$397',
    originalPrice: null,
    promo: 'Standalone Option',
    description: 'Basic e-commerce store setup',
    features: [
      'Shopify theme setup & customization',
      'Up to 25 product uploads',
      'Payment & shipping configuration',
      'Mobile responsive design',
      'Basic SEO setup',
      '1 hour training session',
    ],
    cta: 'Launch Store',
    popular: false,
    note: '💡 Works best when connected to a Starter Hub',
    limited: true,
  },
  {
    name: 'Starter Hub',
    price: '$599',
    originalPrice: '$2,997',
    promo: 'Launch Special - 80% Off',
    description: 'Your digital command center',
    features: [
      'Professional website (your central hub)',
      'Mobile responsive design',
      'Contact form & lead capture',
      'Social media integration',
      'Basic SEO optimization',
      'Hosting included',
      'Connect Shopify, CRM, or any tool',
    ],
    cta: 'Get Started',
    popular: true,
    recommended: true,
  },
  {
    name: 'Business Hub',
    price: 'From $4,997',
    originalPrice: null,
    promo: '+ $497/mo',
    description: 'Your hub with essential business tools',
    features: [
      'Everything in Starter Hub',
      'Phone routing & call management',
      'Email campaign integration',
      'SMS messaging setup',
      'Basic CRM functionality',
      'Up to 3 tool integrations',
      'Monthly support & updates',
    ],
    cta: 'Schedule Consultation',
    popular: false,
  },
  {
    name: 'Enterprise Hub',
    price: 'From $15,000',
    originalPrice: null,
    promo: '+ $1,497/mo',
    description: 'Full-scale digital operations center',
    features: [
      'Everything in Business Hub',
      'Unlimited tool integrations',
      'Advanced automation & workflows',
      'Custom database solutions',
      'Shopify/E-commerce integration',
      'Multi-channel marketing tools',
      'Priority support & training',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing({ onOpenModal }: PricingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [highlightedTier, setHighlightedTier] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleHighlight = (event: Event) => {
      const customEvent = event as CustomEvent<{ tierIndex: number }>;
      const tierIndex = customEvent.detail?.tierIndex ?? null;
      setHighlightedTier(tierIndex);
      setTimeout(() => {
        setHighlightedTier(null);
      }, 3000);
    };

    window.addEventListener('highlightPricing', handleHighlight as EventListener);
    return () => window.removeEventListener('highlightPricing', handleHighlight as EventListener);
  }, []);

  return (
    <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-600 uppercase tracking-wider text-sm font-medium border border-blue-200 px-4 py-2 rounded-full bg-blue-50">
              Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Start Simple, Scale Smart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need just Shopify? We've got you. Want the Starter Hub? We've got that too. Start anywhere, grow from there—no long-term contracts, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${index === 1 ? 'lg:col-start-2' : ''}`}
            >
              {/* Highlight glow effect */}
              {highlightedTier === index && (
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur-xl z-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.6, 0.6, 0],
                    scale: [0.95, 1.05, 1.05, 0.95]
                  }}
                  transition={{ 
                    duration: 3,
                    times: [0, 0.1, 0.9, 1]
                  }}
                />
              )}
              
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              {tier.limited && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gray-400 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                    Limited
                  </span>
                </div>
              )}
              
              <motion.div
                animate={highlightedTier === index ? {
                  scale: [1, 1.02, 1],
                  y: [0, -5, 0]
                } : {}}
                transition={{
                  duration: 0.6,
                  repeat: highlightedTier === index ? 4 : 0,
                }}
              >
                <Card className={`h-full ${tier.popular ? 'border-blue-400 shadow-xl shadow-blue-500/10 scale-105' : 'hover:shadow-lg'} ${tier.limited ? 'border-gray-300' : ''} ${highlightedTier === index ? 'border-cyan-400 shadow-2xl shadow-cyan-400/30' : ''} transition-all relative z-10`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="mt-4 flex flex-col gap-2">
                      <div>
                        <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                        {tier.originalPrice && (
                          <span className="text-lg text-gray-500 line-through ml-2">
                            {tier.originalPrice}
                          </span>
                        )}
                      </div>
                      {tier.promo && (
                        <div>
                          <span className={`inline-block ${tier.limited ? 'bg-gray-500' : 'bg-gradient-to-r from-red-500 to-orange-500'} text-white text-xs px-3 py-1 rounded-full shadow-lg ${!tier.limited ? 'animate-pulse' : ''}`}>
                            {tier.promo}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{tier.description}</p>
                    {tier.note && (
                      <p className="text-sm text-orange-600 mt-2 font-medium">{tier.note}</p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                      onClick={() => {
                        if (index === 0) {
                          // Shopify Express - open modal
                          onOpenModal();
                        } else if (index === 1) {
                          // Starter Hub - go to showcase page
                          navigate('/starter-hub');
                        } else if (index === 2) {
                          // Business Hub - go to showcase page
                          navigate('/business-hub');
                        } else {
                          // Enterprise Hub - go to showcase page
                          navigate('/enterprise-hub');
                        }
                      }}
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>All plans include free consultation to determine the best fit for your business</p>
        </motion.div>

        {/* Shopify + Starter Hub Upgrade Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-8 border border-blue-200"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl mb-3">
              🚀 Shopify + Starter Hub = Game Changer
            </h3>
            <p className="text-gray-600 text-lg">
              Why connect your Shopify store to a Starter Hub?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold mb-2">Unified Dashboard</h4>
              <p className="text-sm text-gray-600">
                See sales, customer inquiries, and marketing performance in one place
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="font-semibold mb-2">Connected Tools</h4>
              <p className="text-sm text-gray-600">
                Link your store to CRM, email marketing, SMS, and customer support automatically
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Smart Automation</h4>
              <p className="text-sm text-gray-600">
                Auto-sync orders, trigger follow-ups, and manage inventory without lifting a finger
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Upgrade anytime:</span> Start with Shopify Express ($397), 
              then add Starter Hub ($599 promo / $2,997 regular) to connect everything seamlessly
            </p>
            <Button 
              onClick={onOpenModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Ask About Shopify + Starter Hub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
