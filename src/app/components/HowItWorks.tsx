import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Layers, Plug, Rocket, Shield } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Launch Your Hub",
    description:
      "Start with a beautifully designed website that serves as your digital headquarters—all your contact info, links, and presence in one place.",
    step: "01",
  },
  {
    icon: Plug,
    title: "Connect Tools As Needed",
    description:
      "When you're ready, we seamlessly integrate the tools your business needs: phone systems, email marketing, CRM, e-commerce, and more.",
    step: "02",
  },
  {
    icon: Shield,
    title: "We Handle the Technical",
    description:
      "No breaking things. No complexity. We build robust systems with simple interfaces so you can focus on running your business, not managing tech.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Scale Without Limits",
    description:
      "As your business grows, your hub grows with you. Add new capabilities, automation, and integrations whenever you need them.",
    step: "04",
  },
];

type Step = (typeof steps)[number];

function ProcessStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connection line */}
      {index < steps.length - 1 && (
        <div className="pointer-events-none hidden lg:block absolute top-20 left-full w-full h-0.5 -z-10 bg-gradient-to-r from-blue-500/50 to-transparent">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
            className="w-full h-full bg-blue-500 origin-left"
          />
        </div>
      )}

      <div className="relative overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full transition-all group hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 duration-300">

        <div className="pointer-events-none absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            delay: index * 0.15 + 0.2,
          }}
          className="relative z-10 text-6xl text-blue-500/10 mb-4 font-bold select-none"
        >
          {step.step}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, rotate: 360 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/40"
        >
          <Icon className="h-7 w-7 text-white" />
        </motion.div>

        <h3 className="relative z-10 text-2xl mb-4 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {step.title}
        </h3>

        <p className="relative z-10 text-gray-500 dark:text-gray-300 text-lg leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden py-20 px-6
                 bg-gradient-to-b from-white to-gray-50
                 dark:from-gray-950 dark:to-gray-900
                 text-gray-900 dark:text-white"
    >
      {/* Background glow blobs (cannot tint other sections now) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider text-sm font-medium border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/40">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            How It Works
          </h2>

          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Four simple steps. No complexity, no long-term commitments.
            Pay for what you need, when you need it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
