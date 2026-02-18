import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useMemo } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  onOpenModal: () => void;
}

const testimonials = [
  {
    name: 'Coming Soon',
    role: 'Rio Grande Valley Business Owner',
    content: 'Your testimonial will be here soon. Be the first to work with Stahl Systems and share your experience.',
    rating: 5,
    image: null,
  },
  {
    name: 'Your Business',
    role: 'Your Industry',
    content: 'We\'re just getting started, but we\'re building something special. Join us and be part of the founding client family.',
    rating: 5,
    image: null,
  },
  {
    name: 'Future Client',
    role: 'Smart Business Owner',
    content: 'This could be you. Let\'s build something you\'re proud to talk about.',
    rating: 5,
    image: null,
  },
];

export function Testimonials({ onOpenModal }: TestimonialsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Generate stable star positions and animation timings
  const stars = useMemo(() => 
    Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    })),
    []
  );

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-40"></div>
            <span className="relative text-cyan-400 uppercase tracking-wider text-sm font-bold border-2 border-cyan-400/50 px-6 py-2 rounded-full backdrop-blur-sm bg-slate-900/80 inline-flex items-center gap-2 shadow-2xl">
              <Star className="h-4 w-4 text-cyan-400" />
              Building Our Reputation
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl mb-6 text-white font-black">
            Join The
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Founding Clients
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're new, and we're hungry. That means you get white-glove treatment, competitive pricing, and a partner who's genuinely invested in making you successful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-2xl p-8 h-full hover:border-cyan-400/50 transition-all group">
                <Quote className="h-10 w-10 text-cyan-400/50 mb-6" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-[2px] rounded-2xl max-w-2xl mx-auto">
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Be Part Of Something From Day One
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Early clients get special pricing, priority support, and the satisfaction of working with someone who genuinely cares about your success.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal();
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-cyan-400/20 cursor-pointer"
              >
                Let's Build Together
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
