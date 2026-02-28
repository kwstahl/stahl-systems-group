import { motion } from "motion/react";
import { Store, Sparkles, TrendingUp, Wrench } from "lucide-react";

const audience = [
  {
    icon: Store,
    title: "Established Brands",
    description: "You're doing $50K-500K/month but stuck on one platform. You need multi-channel infrastructure without breaking what's working.",
    gradient: "from-[#1E5BBF] to-[#2F6FD6]"
  },
  {
    icon: Sparkles,
    title: "Boutiques & Makers",
    description: "You have loyal customers and great products. You need systems that scale without losing the personal touch.",
    gradient: "from-[#2F6FD6] to-[#1E5BBF]"
  },
  {
    icon: TrendingUp,
    title: "Influencers & Creators",
    description: "You have the audience. We build the systems to sell directly from your posts—TikTok Shop, Instagram Shop, low-inventory setups that monetize your following.",
    gradient: "from-[#1E5BBF] to-[#2F6FD6]"
  },
  {
    icon: Wrench,
    title: "Frustrated Store Owners",
    description: "Your tech stack is held together with duct tape. Things break constantly. You need someone who can diagnose and fix the real problems.",
    gradient: "from-[#2F6FD6] to-[#1E5BBF]"
  }
];

export function WhoThisIsFor() {
  return (
    <section className="px-6 py-32 bg-[#F7F8FA] relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2F6FD6]/3 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#111111]">
            Who This Is For
          </h2>
        </motion.div>
        
        <motion.div
          className="border border-[#2F6FD6]/20 bg-white p-12 rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center text-[#111111]">This Is For You If:</h3>
          
          <div className="space-y-6">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br ${item.gradient} rounded-full`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-[#333333]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-center text-[#666666] mt-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          If that sounds like you, we should talk.
        </motion.p>
      </div>
    </section>
  );
}