import { motion } from "motion/react";
import { useState } from "react";
import { TrendingUp, Instagram, ShoppingBag, Users } from "lucide-react";

const channels = [
  { 
    name: "Amazon", 
    icon: ShoppingBag,
    conversionRate: 0.13, 
    avgBasketMultiplier: 1.2, 
    setup: "Medium", 
    color: "orange",
    description: "Best for: Established brands with inventory" 
  },
  { 
    name: "TikTok Shop", 
    icon: TrendingUp,
    conversionRate: 0.08, 
    avgBasketMultiplier: 0.9, 
    setup: "Medium", 
    color: "pink",
    description: "Best for: Creators with engaged followers" 
  },
  { 
    name: "Instagram Shop", 
    icon: Instagram,
    conversionRate: 0.025, 
    avgBasketMultiplier: 1.0, 
    setup: "Easy", 
    color: "purple",
    description: "Best for: Visual brands & influencers" 
  },
  { 
    name: "Facebook Shop", 
    icon: Users,
    conversionRate: 0.02, 
    avgBasketMultiplier: 1.1, 
    setup: "Easy", 
    color: "blue",
    description: "Best for: Community-driven brands" 
  },
];

export function ChannelGrowthPredictor() {
  const [monthlyFollowers, setMonthlyFollowers] = useState("50000");
  const [engagementRate, setEngagementRate] = useState("3");
  const [averageOrderValue, setAverageOrderValue] = useState("60");
  const [selectedChannels, setSelectedChannels] = useState<string[]>(["TikTok Shop", "Instagram Shop"]);

  const toggleChannel = (channelName: string) => {
    if (selectedChannels.includes(channelName)) {
      setSelectedChannels(selectedChannels.filter(c => c !== channelName));
    } else {
      setSelectedChannels([...selectedChannels, channelName]);
    }
  };

  const calculateImpact = (channel: typeof channels[0]) => {
    const followers = parseFloat(monthlyFollowers) || 0;
    const engagement = parseFloat(engagementRate) || 0;
    const aov = parseFloat(averageOrderValue) || 0;
    
    // Engaged users = followers * engagement rate
    const engagedUsers = followers * (engagement / 100);
    
    // Potential reach (people who see your selling posts)
    const reachMultiplier = channel.name.includes("TikTok") || channel.name.includes("Instagram") ? 1.5 : 1.0;
    const potentialReach = engagedUsers * reachMultiplier;
    
    // Conversions from that reach
    const projectedConversions = Math.floor(potentialReach * channel.conversionRate);
    
    // Revenue accounting for basket size
    const adjustedAOV = aov * channel.avgBasketMultiplier;
    const projectedRevenue = projectedConversions * adjustedAOV;
    
    return {
      reach: Math.floor(potentialReach),
      conversions: projectedConversions,
      revenue: projectedRevenue,
      aov: adjustedAOV
    };
  };

  const totalProjected = selectedChannels.reduce((sum, name) => {
    const channel = channels.find(c => c.name === name);
    if (!channel) return sum;
    return sum + calculateImpact(channel).revenue;
  }, 0);

  const totalConversions = selectedChannels.reduce((sum, name) => {
    const channel = channels.find(c => c.name === name);
    if (!channel) return sum;
    return sum + calculateImpact(channel).conversions;
  }, 0);

  return (
    <div className="border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-[#0a0a1f] p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0">
          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Social Selling Revenue Predictor</h3>
          <p className="text-xs sm:text-sm text-slate-500">Turn your followers into customers</p>
        </div>
      </div>
      
      <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
        <p className="text-xs sm:text-sm text-slate-300">
          <strong className="text-purple-400">For influencers & creators:</strong> See how much you could make selling directly 
          from your posts with proper social commerce setup. We build the systems that connect your content to revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Total Followers (All Platforms)
          </label>
          <input
            type="number"
            value={monthlyFollowers}
            onChange={(e) => setMonthlyFollowers(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="50000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Engagement Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={engagementRate}
            onChange={(e) => setEngagementRate(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Average Order Value ($)
          </label>
          <input
            type="number"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="60"
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-slate-400 mb-3">Select Your Social Channels:</h4>
        <div className="grid grid-cols-2 gap-3">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            const isSelected = selectedChannels.includes(channel.name);
            
            return (
              <motion.button
                key={index}
                onClick={() => toggleChannel(channel.name)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  isSelected
                    ? `border-${channel.color}-500 bg-${channel.color}-500/20`
                    : 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${isSelected ? `text-${channel.color}-400` : 'text-slate-500'} flex-shrink-0 mt-0.5`} />
                  <div>
                    <div className="font-semibold text-sm mb-1">{channel.name}</div>
                    <div className="text-xs text-slate-500">{channel.description}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {selectedChannels.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="border border-purple-500/50 bg-purple-900/20 p-6 rounded-xl">
            <h4 className="text-lg font-bold mb-4">Your Revenue Potential</h4>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-sm text-slate-400 mb-2">Monthly Revenue</div>
                <div className="text-4xl font-bold text-purple-400">
                  ${totalProjected.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-2">Expected Sales</div>
                <div className="text-4xl font-bold text-white">
                  {totalConversions.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-2">Annual Potential</div>
                <div className="text-4xl font-bold text-emerald-400">
                  ${(totalProjected * 12).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {selectedChannels.map((name, index) => {
              const channel = channels.find(c => c.name === name)!;
              const impact = calculateImpact(channel);
              const Icon = channel.icon;
              
              return (
                <motion.div
                  key={index}
                  className="border border-slate-800 bg-[#0f0f1f] p-5 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 text-${channel.color}-400`} />
                      <h5 className="font-semibold">{channel.name}</h5>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-purple-400">
                        ${impact.revenue.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-500">/month</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-slate-500 text-xs">Reach</div>
                      <div className="font-semibold text-white">{impact.reach.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Sales</div>
                      <div className="font-semibold text-white">{impact.conversions}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Conversion</div>
                      <div className="font-semibold text-white">{(channel.conversionRate * 100).toFixed(1)}%</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-900/50 rounded-lg text-sm text-slate-400">
            <strong className="text-white">Reality check:</strong> These numbers assume consistent posting, 
            quality products, and proper shop setup. We handle the technical infrastructure—you focus on content.
          </div>

          <div className="text-center pt-4">
            <a href="/contact">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Set Up My Social Commerce System
              </motion.button>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}