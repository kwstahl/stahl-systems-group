import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  Phone, 
  CreditCard, 
  TrendingUp, 
  Settings,
  Globe,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Beautiful Websites',
    description: 'Custom-designed, lightning-fast sites built from scratch.',
    brands: [
      { name: 'Figma', icon: '🎨' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Customer Connection',
    description: 'Phone routing, SMS, email campaigns, live chat—all automated.',
    brands: [
      { name: 'Twilio', logo: '📞' },
      { name: 'Mailchimp', logo: '📧' },
      { name: 'Zoom', logo: '📹' },
      { name: 'Intercom', logo: '💬' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    title: 'Payments & Commerce',
    description: 'Accept payments with Stripe, Klarna, integrate with Shopify.',
    brands: [
      { name: 'Stripe', logo: '💳' },
      { name: 'Shopify', logo: '🛍️' },
      { name: 'Klarna', logo: '💰' },
      { name: 'PayPal', logo: '🅿️' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Growth',
    description: 'Social media, Google Ads, Meta campaigns, analytics dashboards.',
    brands: [
      { name: 'Meta', logo: '📱' },
      { name: 'Google Ads', logo: '🎯' },
      { name: 'LinkedIn', logo: '💼' },
      { name: 'Analytics', logo: '📊' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Settings,
    title: 'Business Operations',
    description: 'CRM, scheduling, automation workflows, custom integrations.',
    brands: [
      { name: 'HubSpot', logo: '🔧' },
      { name: 'Calendly', logo: '📅' },
      { name: 'Zapier', logo: '⚡' },
      { name: 'Airtable', logo: '📊' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Automation & Workflows',
    description: 'Zapier-style automation, webhooks, custom workflows.',
    brands: [
      { name: 'Zapier', logo: '⚡' },
      { name: 'Make', logo: '🔄' },
      { name: 'n8n', logo: '🤖' },
      { name: 'Webhooks', logo: '🔗' },
    ],
    color: 'from-yellow-500 to-orange-500',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform relative`}>
          <Icon className="h-7 w-7 text-white relative z-10" />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity`}></div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Brand popup on hover */}
      {service.brands && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-xs pointer-events-none z-20"
        >
          <div className="bg-slate-900 border-2 border-blue-400 rounded-xl p-3 shadow-2xl shadow-blue-500/50">
            <div className="text-xs text-blue-400 mb-2 text-center font-semibold">We integrate:</div>
            <div className="grid grid-cols-4 gap-2">
              {service.brands.map((brand, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center gap-1 bg-slate-800 rounded-lg p-2 border border-blue-500/30"
                >
                  <span className="text-xl">{"logo" in brand ? brand.logo : brand.icon}</span>
                  <span className="text-[9px] text-gray-300 text-center leading-tight">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle tech background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            <span className="relative text-blue-600 uppercase tracking-wider text-sm font-bold border-2 border-blue-200 px-6 py-2 rounded-full bg-blue-50 inline-block">
              What We Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Your Website. All Your Tools. Working Together.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We connect the platforms you already use—Stripe, Google Ads, Twilio, HubSpot, and more—no coding required.
          </p>
          <p className="text-sm text-gray-500 mt-6 italic">
            💡 Hover over each card to see the platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
