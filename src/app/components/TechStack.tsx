import { motion } from "motion/react";

const technologies = [
  { name: "Shopify", category: "E-commerce" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Vercel", category: "Deployment" },
  { name: "React", category: "Frontend" },
  { name: "Cloudways", category: "Hosting" },
  { name: "WordPress", category: "CMS" },
  { name: "Stripe", category: "Payments" },
  { name: "Amazon", category: "Marketplace" },
  { name: "Meta", category: "Platform" },
  { name: "TikTok", category: "Platform" },
  { name: "Google", category: "Platform" },
  { name: "GHL", category: "CRM" },
  { name: "Resend", category: "Email" }
];

const principles = [
  {
    title: "Security First",
    description: "Clean code. Secure infrastructure. Compliance-ready architecture. Non-negotiable.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Systems Thinking",
    description: "We don't patch problems. We build solutions at the system level.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Partnership Mindset",
    description: "Your growth is our growth. We protect your business like it's our own.",
    gradient: "from-purple-500 to-pink-500"
  }
];

export function TechStack() {
  return (
    <section className="px-6 py-32 bg-[#0a0a1f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Principles section - moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-slate-400">Non-negotiable principles that guide every project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity`}
                />
                <div className="relative border border-slate-800 bg-[#0f0f1f] p-8 rounded-xl group-hover:border-indigo-500/50 transition-all">
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${principle.gradient} bg-clip-text text-transparent`}>
                    {principle.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The Technology</h3>
            <p className="text-lg text-slate-500">
              Modern platforms. Proven infrastructure. Built to scale.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg blur-lg transition-opacity"
                />
                <div className="relative border border-slate-800 bg-[#0f0f1f] p-6 rounded-lg text-center group-hover:border-indigo-500/50 transition-all h-full flex flex-col justify-center">
                  <span className="font-mono text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-xs text-slate-600 mt-1">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.p
          className="text-slate-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Government systems veteran · Systems-first mindset · Builder's discipline
        </motion.p>
      </div>
    </section>
  );
}