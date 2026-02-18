import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Plus, Minus, Zap } from 'lucide-react';

const faqs = [
  {
    question: "What makes you different from Squarespace or WordPress?",
    answer: "We're developers who know when to use what. Sometimes we use Figma, sometimes Shopify, sometimes custom code—whatever solves your problem best. The difference? We can integrate anything. Need Stripe payments, Twilio SMS, or your CRM connected? We handle it. Templates can't do that."
  },
  {
    question: "Do I need to know anything technical?",
    answer: "Nope. That's our job. We handle all the tech stuff—the code, the integrations, the systems. You get simple controls that make sense. We explain everything in plain English and meet you in person to walk through it. You focus on running your business, we handle the tech."
  },
  {
    question: "Can you work with my existing tools?",
    answer: "Yes! That's literally what we specialize in. Already have Shopify? We connect it. Using HubSpot? We integrate it. Have a phone system, email platform, or payment processor? We make it all work together. You don't need to switch anything—we just make your current tools talk to each other."
  },
  {
    question: "What if I just need a Shopify store? Do I need the Starter Hub?",
    answer: "Nope! We offer Shopify Express for $397 if you just need an online store up and running fast. BUT here's the thing—connecting it to a Starter Hub (for just +$299) means your store talks to your CRM, email campaigns auto-send to customers, and you see everything in one dashboard. Most clients start with Shopify Express, love it, then upgrade when they see what's possible. Either way, we meet you where you are."
  },
  {
    question: "How long does it take to build?",
    answer: "A standard website: 2-4 weeks. Adding integrations depends on complexity—some take a few hours (like Stripe), others a few days (like full CRM automation). We'll give you a clear timeline upfront. No surprises, no endless delays."
  },
  {
    question: "What if I need changes later?",
    answer: "Easy. We're not going anywhere. You can reach out anytime—call, text, email. We'll make updates, add features, or connect new tools as your business grows. You're not a one-time project; you're family. We grow with you."
  },
  {
    question: "Do you only work with big businesses?",
    answer: "No way. We work with everyone—from solopreneurs just starting out to established businesses ready to scale. If you're in the Rio Grande Valley and want a website that actually works for your business, we're your team. Big or small, we treat you the same: like family."
  },
  {
    question: "What if something breaks?",
    answer: "We fix it. Fast. That's part of working with us. We don't disappear after launch. You have direct access to us—no ticket systems, no waiting weeks. We take pride in our work and our relationships. If there's an issue, we're on it."
  },
  {
    question: "Why should I choose Stahl Systems over other developers?",
    answer: "We solve tech problems, no questions asked. Need it integrated? Done. Need it connected? Done. Need it to actually work? Done. We meet in person, answer your calls, and genuinely care about your success. You're not a ticket number—you're someone we're invested in. Plus, we're the best in the Rio Grande Valley at making tech actually work for businesses."
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-40"></div>
            <span className="relative text-cyan-400 uppercase tracking-wider text-sm font-bold border-2 border-cyan-400/50 px-6 py-2 rounded-full backdrop-blur-sm bg-slate-900/80 inline-flex items-center gap-2 shadow-2xl">
              <Zap className="h-4 w-4 text-cyan-400" />
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl mb-6 text-white font-black">
            Let's Clear
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              The Air
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real questions we get all the time. Real answers with no BS.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-slate-800/50 backdrop-blur-sm border-2 rounded-xl overflow-hidden transition-all cursor-pointer ${
                  openIndex === index
                    ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'
                    : 'border-slate-700 hover:border-cyan-400/50'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-cyan-400" />
                    ) : (
                      <Plus className="h-6 w-6 text-cyan-400" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-slate-700 pt-4">
                          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-6">
            Still have questions? Let's talk.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-cyan-400/20"
          >
            <Zap className="h-5 w-5" />
            Let's Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}
