import { motion } from "motion/react";
import { useState } from "react";
import { Layers, AlertCircle, CheckCircle } from "lucide-react";

const integrations = [
  { 
    name: "Shopify → Amazon",
    complexity: "Medium",
    timeEstimate: "1-2 weeks",
    requirements: ["Amazon Seller account", "Product catalog", "Inventory system"],
    considerations: ["FBA vs FBM decision", "Pricing strategy", "Category restrictions"]
  },
  { 
    name: "WooCommerce → Multi-channel",
    complexity: "High",
    timeEstimate: "3-4 weeks",
    requirements: ["Central inventory system", "Order management", "Product feed setup"],
    considerations: ["WooCommerce limitations", "Plugin compatibility", "Server resources"]
  },
  { 
    name: "Store → TikTok Shop",
    complexity: "Medium",
    timeEstimate: "1-2 weeks",
    requirements: ["TikTok Seller account", "Content strategy", "Product videos"],
    considerations: ["Approval process", "Regional availability", "Content requirements"]
  },
  { 
    name: "Multi-store Inventory Sync",
    complexity: "High",
    timeEstimate: "2-3 weeks",
    requirements: ["Centralized database", "API access", "Webhook setup"],
    considerations: ["Real-time vs batch sync", "Error handling", "Conflict resolution"]
  },
  { 
    name: "Email/SMS Automation",
    complexity: "Low",
    timeEstimate: "3-5 days",
    requirements: ["ESP account", "Customer data", "Templates"],
    considerations: ["Compliance (CAN-SPAM)", "Segmentation strategy", "Testing plan"]
  },
  { 
    name: "Booking System Integration",
    complexity: "High",
    timeEstimate: "3-4 weeks",
    requirements: ["Booking platform", "Calendar sync", "Payment processing"],
    considerations: ["Time zone handling", "Cancellation policies", "Resource management"]
  }
];

export function IntegrationComplexityEstimator() {
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);

  const toggleIntegration = (name: string) => {
    if (selectedIntegrations.includes(name)) {
      setSelectedIntegrations(selectedIntegrations.filter(i => i !== name));
    } else {
      setSelectedIntegrations([...selectedIntegrations, name]);
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Low": return "text-emerald-400 bg-emerald-500/20";
      case "Medium": return "text-yellow-400 bg-yellow-500/20";
      case "High": return "text-orange-400 bg-orange-500/20";
      default: return "text-slate-400 bg-slate-500/20";
    }
  };

  const getTotalEstimate = () => {
    const selected = integrations.filter(i => selectedIntegrations.includes(i.name));
    
    let minWeeks = 0;
    let maxWeeks = 0;
    
    selected.forEach(integration => {
      const [min, max] = integration.timeEstimate.split('-').map(t => {
        if (t.includes('weeks')) return parseInt(t) * 1;
        if (t.includes('days')) return parseInt(t) / 7;
        return 0;
      });
      minWeeks += min;
      maxWeeks += max;
    });

    return {
      minWeeks: Math.ceil(minWeeks),
      maxWeeks: Math.ceil(maxWeeks),
      complexity: selected.some(i => i.complexity === "High") ? "High" :
                  selected.some(i => i.complexity === "Medium") ? "Medium" : "Low"
    };
  };

  const estimate = getTotalEstimate();

  return (
    <div className="border border-orange-500/30 bg-gradient-to-br from-orange-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg">
          <Layers className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold">Integration Complexity Estimator</h3>
      </div>
      
      <p className="text-slate-400 mb-6">
        Estimate the effort required for your integrations
      </p>

      <div className="space-y-4 mb-8">
        {integrations.map((integration, index) => {
          const isSelected = selectedIntegrations.includes(integration.name);
          
          return (
            <motion.div
              key={index}
              className={`border-2 rounded-xl transition-all overflow-hidden ${
                isSelected
                  ? 'border-orange-500 bg-orange-500/10'
                  : 'border-slate-800 bg-[#0f0f1f]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleIntegration(integration.name)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">{integration.name}</h4>
                    <div className="flex items-center gap-3 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getComplexityColor(integration.complexity)}`}>
                        {integration.complexity}
                      </span>
                      <span className="text-slate-500">{integration.timeEstimate}</span>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-orange-500 bg-orange-500'
                      : 'border-slate-600'
                  }`}>
                    {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                </div>
                
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-slate-800 space-y-3"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-2">REQUIREMENTS</div>
                      <ul className="space-y-1">
                        {integration.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-2">CONSIDERATIONS</div>
                      <ul className="space-y-1">
                        {integration.considerations.map((cons, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                            <AlertCircle className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                            {cons}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

      {selectedIntegrations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-orange-500/50 bg-orange-900/20 p-8 rounded-xl"
        >
          <h4 className="text-xl font-bold mb-6">Estimated Project Scope</h4>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-sm text-slate-400 mb-2">Timeline</div>
              <div className="text-2xl font-bold text-orange-400">
                {estimate.minWeeks}-{estimate.maxWeeks} weeks
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-400 mb-2">Overall Complexity</div>
              <div className={`text-2xl font-bold ${
                estimate.complexity === "High" ? "text-orange-400" :
                estimate.complexity === "Medium" ? "text-yellow-400" : "text-emerald-400"
              }`}>
                {estimate.complexity}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-400 mb-2">Integrations</div>
              <div className="text-2xl font-bold text-white">
                {selectedIntegrations.length}
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-400">
            This is a ballpark estimate. Actual timeline depends on existing infrastructure, 
            data quality, and how many surprises we find during diagnostics.
          </div>
        </motion.div>
      )}

      <div className="mt-6 p-4 bg-slate-900/50 rounded-lg text-sm text-slate-400">
        <strong className="text-white">Reality check:</strong> These are clean-slate estimates. 
        If your current system is messy, add 30-50% to the timeline for cleanup.
      </div>
    </div>
  );
}
