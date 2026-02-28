import { motion } from "motion/react";
import { Search, Hammer, Link2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnose",
    description: "We analyze your current setup and identify what needs to be built or expanded.",
    color: "from-[#1E5BBF] to-[#2F6FD6]"
  },
  {
    icon: Hammer,
    title: "Build",
    description: "We create your store and configure it correctly from the ground up.",
    color: "from-[#2F6FD6] to-[#1E5BBF]"
  },
  {
    icon: Link2,
    title: "Connect",
    description: "We integrate every platform, supplier, and sales channel you need.",
    color: "from-[#1E5BBF] to-[#2F6FD6]"
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "We optimize performance and expand distribution as your brand grows.",
    color: "from-[#2F6FD6] to-[#1E5BBF]"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-32 bg-[#111111] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#2F6FD6]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">How It Works</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center">
                  {/* Icon with pulse */}
                  <motion.div 
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} blur-xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <div className={`relative w-20 h-20 flex items-center justify-center bg-gradient-to-br ${step.color} rounded-full shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}