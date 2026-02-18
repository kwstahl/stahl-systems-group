import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  ShoppingBag, 
  Phone, 
  Mail, 
  MessageSquare, 
  Database, 
  Webhook,
  Calendar,
  UserCog,
  BarChart3,
  Globe
} from 'lucide-react';

const tools = [
  { icon: ShoppingBag, name: 'Shopify', color: 'from-green-500 to-emerald-600' },
  { icon: Phone, name: 'Call Routing', color: 'from-blue-500 to-cyan-600' },
  { icon: Mail, name: 'Email Campaigns', color: 'from-purple-500 to-pink-600' },
  { icon: MessageSquare, name: 'SMS & Messaging', color: 'from-blue-500 to-indigo-600' },
  { icon: Database, name: 'Database Sync', color: 'from-cyan-500 to-blue-600' },
  { icon: Webhook, name: 'Webhooks & APIs', color: 'from-orange-500 to-red-600' },
  { icon: Calendar, name: 'Scheduling', color: 'from-pink-500 to-rose-600' },
  { icon: UserCog, name: 'Lite CRM', color: 'from-indigo-500 to-purple-600' },
  { icon: BarChart3, name: 'Analytics', color: 'from-blue-600 to-cyan-500' },
  { icon: Globe, name: 'Social Media', color: 'from-purple-600 to-pink-500' },
];

export function ToolsIntegration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-600 uppercase tracking-wider text-sm font-medium border border-blue-200 px-4 py-2 rounded-full bg-blue-50">
              Powerful Integrations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            All Your Tools, One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We connect the tools you already use—or introduce you to new ones—
            all managed through your central hub website.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            Plus dozens more integrations to fit your unique business needs
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto group">
            See all integrations
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
