import { motion } from "motion/react";
import { useState } from "react";
import { Activity, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const healthChecks = [
  {
    category: "Platform",
    checks: [
      { question: "Running latest platform version?", weight: 0.8, good: "Yes", bad: "No" },
      { question: "SSL certificate active?", weight: 1.0, good: "Yes", bad: "No" },
      { question: "Mobile responsive?", weight: 0.9, good: "Yes", bad: "No" }
    ]
  },
  {
    category: "Performance",
    checks: [
      { question: "Page load under 3 seconds?", weight: 1.0, good: "Yes", bad: "No" },
      { question: "Images optimized?", weight: 0.7, good: "Yes", bad: "No" },
      { question: "Caching enabled?", weight: 0.8, good: "Yes", bad: "No" }
    ]
  },
  {
    category: "Checkout",
    checks: [
      { question: "Guest checkout enabled?", weight: 0.9, good: "Yes", bad: "No" },
      { question: "Multiple payment options?", weight: 0.8, good: "Yes", bad: "No" },
      { question: "Cart abandonment recovery?", weight: 0.7, good: "Yes", bad: "No" }
    ]
  },
  {
    category: "Integration",
    checks: [
      { question: "Inventory synced across channels?", weight: 0.9, good: "Yes", bad: "No" },
      { question: "Analytics tracking properly?", weight: 0.8, good: "Yes", bad: "No" },
      { question: "Email automation active?", weight: 0.7, good: "Yes", bad: "No" }
    ]
  }
];

export function SystemHealthChecker() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (key: string) => {
    setAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const calculateScore = () => {
    let totalWeight = 0;
    let earnedWeight = 0;
    
    healthChecks.forEach((category, catIndex) => {
      category.checks.forEach((check, checkIndex) => {
        const key = `${catIndex}-${checkIndex}`;
        totalWeight += check.weight;
        if (answers[key]) {
          earnedWeight += check.weight;
        }
      });
    });

    return totalWeight > 0 ? (earnedWeight / totalWeight) * 100 : 0;
  };

  const score = calculateScore();
  const hasAnswers = Object.keys(answers).length > 0;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "Your system is in good shape. Minor optimizations recommended.";
    if (score >= 60) return "Some issues detected. Let's talk about fixes.";
    if (score >= 40) return "Multiple problems found. System cleanup needed.";
    return "Critical issues. Your system needs immediate attention.";
  };

  return (
    <div className="border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold">System Health Checker</h3>
      </div>
      
      <p className="text-slate-400 mb-8">
        Quick diagnostic of your e-commerce setup
      </p>

      <div className="space-y-6 mb-8">
        {healthChecks.map((category, catIndex) => (
          <div key={catIndex}>
            <h4 className="text-lg font-bold mb-3 text-emerald-400">{category.category}</h4>
            <div className="space-y-3">
              {category.checks.map((check, checkIndex) => {
                const key = `${catIndex}-${checkIndex}`;
                const isAnswered = key in answers;
                const answer = answers[key];
                
                return (
                  <motion.button
                    key={checkIndex}
                    onClick={() => toggleAnswer(key)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      !isAnswered
                        ? 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
                        : answer
                        ? 'border-emerald-500 bg-emerald-500/10'
                        : 'border-red-500 bg-red-500/10'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{check.question}</span>
                      <div className="flex items-center gap-2">
                        {isAnswered && (
                          answer ? (
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-400" />
                          )
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {hasAnswers && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-slate-700 bg-[#0f0f1f] p-8 rounded-xl text-center"
        >
          <div className="mb-4">
            <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
              {score.toFixed(0)}%
            </div>
            <div className="text-sm text-slate-500 mt-2">System Health Score</div>
          </div>
          
          <div className="mb-6">
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${
                  score >= 80 ? 'bg-emerald-500' :
                  score >= 60 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          <p className="text-slate-400 mb-6">{getScoreMessage(score)}</p>

          {score < 80 && (
            <a href="/contact">
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Diagnostic Call
              </motion.button>
            </a>
          )}
        </motion.div>
      )}

      <div className="mt-6 p-4 bg-slate-900/50 rounded-lg text-sm text-slate-400">
        <AlertTriangle className="w-4 h-4 inline mr-2 text-yellow-400" />
        This is a simplified diagnostic. Real system audits are much more comprehensive.
      </div>
    </div>
  );
}
