import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! We will be in touch soon.');
  };

  return (
    <section id="contact" className="py-16 px-6 relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-400 uppercase tracking-wider text-sm font-medium border border-blue-400/30 px-4 py-2 rounded-full bg-blue-500/10">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Let's Build Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to establish your online presence? Get in touch for our launch promotion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur border-blue-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative group"
                  >
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full bg-slate-900/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-blue-400 transition-all"
                    />
                    <div className="absolute inset-0 bg-blue-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative group"
                  >
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full bg-slate-900/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-blue-400 transition-all"
                    />
                    <div className="absolute inset-0 bg-blue-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="relative group"
                  >
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-slate-900/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-blue-400 transition-all"
                    />
                    <div className="absolute inset-0 bg-blue-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="relative group"
                  >
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="w-full bg-slate-900/50 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-blue-400 transition-all"
                    />
                    <div className="absolute inset-0 bg-blue-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 text-white border-0 relative overflow-hidden group">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative">Send Message</span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-400 text-lg mb-8">
                We're excited to learn about your business and how we can help you 
                establish and grow your digital presence.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'kevin@stahlsystemsgroup.com', delay: 0.2 },
                { icon: Phone, label: 'Phone', value: '956-878-8083', delay: 0.3 },
                { icon: MapPin, label: 'Location', value: 'Serving Businesses Nationwide', delay: 0.4 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <item.icon className="h-6 w-6 text-white relative z-10" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="text-lg text-white group-hover:text-blue-400 transition-colors">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6"
            >
              <h4 className="text-lg text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-800/50 border border-blue-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-transparent transition-all shadow-lg hover:shadow-blue-500/30"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={formInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-400/30 rounded-xl p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="text-blue-400">Special Launch Offer:</span>
                </div>
                <div className="text-2xl mb-2 text-white">Starter Hub: <span className="line-through text-gray-400">$2,997</span> → $599</div>
                <div className="text-gray-300">
                  Limited time promo — first 10 clients only
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
