import { motion } from "motion/react";
import { useState } from "react";
import { Send, Mail, MessageCircle, Calendar, Phone, Clock } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    currentPlatforms: "",
    goal: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      currentPlatforms: "",
      goal: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <PageMeta 
        title="Contact Us - Let's Talk"
        description="Ready to scale your revenue system? Contact us for a free consultation. Email: kevin@stahlsystemsgroup.com | Phone: (956) 878-8083"
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Talk</span>
          </h1>
          <p className="text-2xl text-slate-300 mb-4 max-w-3xl mx-auto font-light">
            Sell everywhere. Manage once.
          </p>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Let's talk through your setup and see what's possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0f0f1f] border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0f0f1f] border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Company / Brand
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#0f0f1f] border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Current Platform(s)
                </label>
                <input
                  type="text"
                  value={formData.currentPlatforms}
                  onChange={(e) => setFormData({ ...formData, currentPlatforms: e.target.value })}
                  className="w-full bg-[#0f0f1f] border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Shopify, WooCommerce, none yet, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  What's Your Goal?
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-[#0f0f1f] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select one...</option>
                  <option value="launch">Launch a new store</option>
                  <option value="expand">Expand to more channels</option>
                  <option value="fix">Fix broken systems</option>
                  <option value="optimize">Optimize performance</option>
                  <option value="support">Ongoing support</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Tell Us More *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-[#0f0f1f] border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="What do you need help with? The more detail, the better."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-slate-400 text-sm mb-1">Email</div>
                <a
                  href="mailto:kevin@stahlsystemsgroup.com"
                  className="text-xl font-semibold hover:text-indigo-400 transition-colors"
                >
                  kevin@stahlsystemsgroup.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-slate-400 text-sm mb-1">Phone</div>
                <a
                  href="tel:9568788083"
                  className="text-xl font-semibold hover:text-indigo-400 transition-colors"
                >
                  (956) 878-8083
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-slate-400 text-sm mb-1">Response Time</div>
                <div className="text-xl font-semibold">Within 24 hours</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}