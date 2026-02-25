import { motion } from "motion/react";
import { useState } from "react";
import { ShoppingBag, TrendingUp, DollarSign, Package } from "lucide-react";

const products = [
  { name: "Boutique Clothing", price: 85, cogs: 35, monthlyDemand: 150 },
  { name: "Beauty Products", price: 45, cogs: 18, monthlyDemand: 300 },
  { name: "Home Decor", price: 120, cogs: 50, monthlyDemand: 80 },
  { name: "Accessories", price: 35, cogs: 12, monthlyDemand: 400 },
  { name: "Electronics", price: 200, cogs: 140, monthlyDemand: 60 },
];

const channels = [
  { name: "Your Store", multiplier: 1.0, conversionBoost: 0, color: "indigo" },
  { name: "Amazon", multiplier: 2.5, conversionBoost: 0.15, color: "orange" },
  { name: "TikTok Shop", multiplier: 1.8, conversionBoost: 0.12, color: "pink" },
  { name: "Instagram", multiplier: 1.3, conversionBoost: 0.08, color: "purple" },
  { name: "Walmart", multiplier: 2.0, conversionBoost: 0.13, color: "blue" },
];

export function InventoryToRevenueCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [inventoryUnits, setInventoryUnits] = useState(200);
  const [marketingSpend, setMarketingSpend] = useState(1500);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(["Your Store"]);

  const product = products[selectedProduct];

  const toggleChannel = (name: string) => {
    if (name === "Your Store") return; // Can't deselect main store
    if (selectedChannels.includes(name)) {
      setSelectedChannels(selectedChannels.filter(c => c !== name));
    } else {
      setSelectedChannels([...selectedChannels, name]);
    }
  };

  // Calculate sales distribution across channels
  const channelData = channels
    .filter(c => selectedChannels.includes(c.name))
    .map(channel => {
      // Base demand adjusted by channel multiplier
      const channelDemand = Math.floor(product.monthlyDemand * channel.multiplier);
      
      // Marketing effectiveness varies by channel
      const marketingImpact = Math.floor((marketingSpend / 1000) * channel.multiplier * 15);
      
      // Total potential sales
      const potentialSales = Math.min(channelDemand + marketingImpact, inventoryUnits);
      
      // Revenue and profit
      const revenue = potentialSales * product.price;
      const costs = potentialSales * product.cogs;
      const profit = revenue - costs;
      
      return {
        ...channel,
        sales: potentialSales,
        revenue,
        costs,
        profit
      };
    });

  const totalSales = channelData.reduce((sum, c) => sum + c.sales, 0);
  const totalRevenue = channelData.reduce((sum, c) => sum + c.revenue, 0);
  const totalProfit = channelData.reduce((sum, c) => sum + c.profit, 0);
  const unsoldInventory = Math.max(0, inventoryUnits - totalSales);
  const soldOutChannels = channelData.filter(c => c.sales >= inventoryUnits / selectedChannels.length);
  
  const inventoryTurnover = (totalSales / inventoryUnits * 100).toFixed(0);
  const profitMargin = ((totalProfit / totalRevenue) * 100).toFixed(1);

  // Calculate what happens with more inventory
  const doubleInventory = inventoryUnits * 2;
  const doubleRevenue = channelData.reduce((sum, c) => {
    const doubleSales = Math.min(c.sales * 1.8, doubleInventory / selectedChannels.length);
    return sum + (doubleSales * product.price);
  }, 0);
  const revenueIncrease = doubleRevenue - totalRevenue;

  return (
    <div className="border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-[#0a0a1f] p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex-shrink-0">
          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Inventory to Revenue Calculator</h3>
          <p className="text-xs sm:text-sm text-slate-500">Turn products into profit across channels</p>
        </div>
      </div>

      <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
        <p className="text-xs sm:text-sm text-slate-300">
          <strong className="text-emerald-400">Real product math.</strong> Pick what you sell, how much you have, 
          and watch how multi-channel moves inventory faster.
        </p>
      </div>

      {/* Product Selection */}
      <div className="mb-6 sm:mb-8">
        <h4 className="text-sm font-medium text-slate-400 mb-3">What Are You Selling?</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {products.map((prod, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedProduct(index)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedProduct === index
                  ? 'border-emerald-500 bg-emerald-500/20'
                  : 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-semibold text-sm mb-1">{prod.name}</div>
              <div className="text-xs text-emerald-400">${prod.price} retail</div>
              <div className="text-xs text-slate-500">${prod.cogs} cost</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Channel Selection */}
      <div className="mb-6 sm:mb-8">
        <h4 className="text-sm font-medium text-slate-400 mb-3">Where Are You Selling?</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {channels.map((channel, index) => {
            const isSelected = selectedChannels.includes(channel.name);
            const isLocked = channel.name === "Your Store";
            return (
              <motion.button
                key={index}
                onClick={() => toggleChannel(channel.name)}
                disabled={isLocked}
                className={`p-3 rounded-lg border-2 transition-all ${
                  isSelected
                    ? `border-${channel.color}-500 bg-${channel.color}-500/20`
                    : 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
                } ${isLocked ? 'opacity-70' : ''}`}
                whileHover={isLocked ? {} : { scale: 1.02 }}
                whileTap={isLocked ? {} : { scale: 0.98 }}
              >
                <div className="font-semibold text-sm">{channel.name}</div>
                {!isLocked && (
                  <div className="text-xs text-slate-500 mt-1">
                    {channel.multiplier}x demand
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Sliders */}
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-400">
              Inventory on Hand (units)
            </label>
            <span className="text-2xl font-bold text-emerald-400">{inventoryUnits}</span>
          </div>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={inventoryUnits}
            onChange={(e) => setInventoryUnits(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-400">
              Monthly Marketing Budget ($)
            </label>
            <span className="text-2xl font-bold text-emerald-400">${marketingSpend}</span>
          </div>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={marketingSpend}
            onChange={(e) => setMarketingSpend(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>

      {/* Big Numbers */}
      <motion.div
        className="border border-emerald-500/50 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-8 rounded-xl mb-6"
        key={`${selectedProduct}-${inventoryUnits}-${marketingSpend}-${selectedChannels.length}`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">Units Sold</div>
            <motion.div 
              className="text-4xl font-bold text-white"
              key={totalSales}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {totalSales}
            </motion.div>
            <div className="text-xs text-slate-500 mt-1">{inventoryTurnover}% of inventory</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">Revenue</div>
            <motion.div 
              className="text-4xl font-bold text-emerald-400"
              key={totalRevenue}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ${(totalRevenue / 1000).toFixed(1)}K
            </motion.div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">Profit</div>
            <motion.div 
              className="text-4xl font-bold text-emerald-400"
              key={totalProfit}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ${(totalProfit / 1000).toFixed(1)}K
            </motion.div>
            <div className="text-xs text-emerald-400 mt-1">{profitMargin}% margin</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">Unsold</div>
            <motion.div 
              className={`text-4xl font-bold ${unsoldInventory > inventoryUnits * 0.3 ? 'text-orange-400' : 'text-white'}`}
              key={unsoldInventory}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {unsoldInventory}
            </motion.div>
            <div className="text-xs text-slate-500 mt-1">
              {unsoldInventory > 0 ? 'dead stock' : 'sold out!'}
            </div>
          </div>
        </div>

        {/* Channel Breakdown */}
        <div className="pt-6 border-t border-emerald-500/30">
          <h4 className="text-sm font-semibold text-slate-400 mb-3">Channel Performance:</h4>
          <div className="space-y-3">
            {channelData.map((channel, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#0f0f1f] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-${channel.color}-400`}></div>
                  <div>
                    <div className="font-semibold text-sm">{channel.name}</div>
                    <div className="text-xs text-slate-500">{channel.sales} units sold</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-400">${(channel.profit / 1000).toFixed(1)}K</div>
                  <div className="text-xs text-slate-500">${(channel.revenue / 1000).toFixed(1)}K revenue</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scale Opportunity */}
      {unsoldInventory < inventoryUnits * 0.2 && (
        <motion.div
          className="p-6 bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/50 rounded-xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-orange-400 mb-2">You're Moving Product Fast!</h4>
              <p className="text-sm text-slate-300 mb-3">
                You've sold {inventoryTurnover}% of your inventory. With <strong>double the inventory ({doubleInventory} units)</strong>, 
                you'd hit approximately <strong className="text-orange-400">${(doubleRevenue / 1000).toFixed(1)}K revenue</strong>
                <span className="text-orange-400 font-semibold"> (+${(revenueIncrease / 1000).toFixed(1)}K)</span>
              </p>
              <p className="text-xs text-slate-400">
                Multi-channel systems move inventory faster = you can order more = better unit economics.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {unsoldInventory > inventoryUnits * 0.5 && (
        <motion.div
          className="p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/50 rounded-xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-3">
            <ShoppingBag className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-400 mb-2">Add More Channels</h4>
              <p className="text-sm text-slate-300">
                You have {unsoldInventory} unsold units. Adding more sales channels would help you move this inventory faster 
                and increase revenue to <strong className="text-blue-400">${(totalRevenue * 1.8 / 1000).toFixed(1)}K+</strong>
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-8 text-center">
        <a href="/contact">
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-lg font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Move ${(totalRevenue / 1000).toFixed(0)}K Worth of Inventory
          </motion.button>
        </a>
      </div>
    </div>
  );
}