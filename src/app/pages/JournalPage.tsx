import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";

const articles = [
  {
    slug: "shopify-vs-woocommerce-2026",
    title: "Shopify vs WooCommerce in 2026: The Real Difference",
    date: "February 20, 2026",
    author: "StahlSystemsGroup",
    category: "Platforms",
    readTime: "6 min",
    content: `
Still debating between Shopify and WooCommerce? Everyone has an opinion. Here's what actually matters when you're building a revenue system.

## The Real Question

It's not "which is better?" It's "which is better for your specific situation?"

Shopify is a closed ecosystem. WooCommerce is open source on WordPress. That's not an opinion—that's architecture. And architecture determines everything.

## When Shopify Wins

**You want to sell fast.**
Shopify gets you live in days. Theme, products, payments, shipping—done. You don't configure a server. You don't manage updates. You don't worry about security patches.

**You're scaling quickly.**
Shopify handles traffic. Black Friday? No problem. Shopify's infrastructure scales automatically. You never think about hosting limits.

**You need app integrations.**
Shopify's app store is massive. Most major platforms have Shopify integrations. Amazon, TikTok Shop, email automation—all plug-and-play.

**The trade-off?**
You're renting. Monthly fees. Transaction fees (unless you use Shopify Payments). Limited customization. You play by Shopify's rules.

## When WooCommerce Wins

**You need complete control.**
WooCommerce is yours. Your data. Your code. Your rules. You can modify anything. No restrictions on what you sell or how you sell it.

**You have complex requirements.**
Custom checkout flows. Unique product types. Specialized integrations. WooCommerce can do anything WordPress can do—which is everything.

**You want to minimize ongoing costs.**
WooCommerce is free. You pay for hosting ($25-100/mo), maybe some plugins, and that's it. No transaction fees. No monthly platform cost scaling with revenue.

**The trade-off?**
You own the complexity. Security updates are your responsibility. Performance optimization is your problem. Scaling requires planning.

## The Truth Nobody Tells You

Both platforms work. Both have successful stores doing millions in revenue. The difference isn't capability—it's operational model.

**Shopify = Convenience at a cost**
You're paying for someone else to handle the infrastructure. That's valuable if your time is better spent on marketing, product, and growth.

**WooCommerce = Control at a complexity cost**
You're trading money for time and technical responsibility. That's valuable if you have technical skills (or hire someone who does).

## What We Actually Recommend

**For most businesses starting out:** Shopify.
Get live fast. Prove the business model. Optimize for speed.

**For businesses with custom needs:** WooCommerce.
You need the flexibility. Accept the complexity.

**For businesses at scale:** It depends on your team.
Do you have (or want) technical resources in-house? WooCommerce.
Do you want to focus purely on business operations? Shopify.

## The Real Cost Comparison

Let's say you're doing $10K/month in revenue:

**Shopify:**
- $29/mo platform
- ~$290 transaction fees (2.9%)
- ~$340 payment processing (2.9% + $0.30)
- Apps: ~$100/mo
- **Total: ~$759/mo (7.6% of revenue)**

**WooCommerce:**
- $0 platform
- $50/mo managed hosting
- ~$340 payment processing (same rates)
- Plugins: ~$50/mo
- **Total: ~$440/mo (4.4% of revenue)**

At $100K/month? The difference is $2,000+/month.

## Our Take

We build on both. The question isn't "which is better?" The question is "which fits your business model, technical capacity, and growth trajectory?"

Want to talk about which makes sense for you? That's literally what we do.
    `
  },
  {
    slug: "squarespace-vs-wordpress-real-talk",
    title: "Squarespace vs WordPress: Real Talk",
    date: "February 18, 2026",
    author: "StahlSystemsGroup",
    category: "Platforms",
    readTime: "5 min",
    content: `
Let's settle this. Squarespace is beautiful. WordPress is powerful. But what does that actually mean for your business?

## The Core Difference

Squarespace is a website builder with e-commerce added.
WordPress (WooCommerce) is an e-commerce platform that happens to also be a website.

That distinction matters more than you think.

## When Squarespace Makes Sense

**You're primarily a content/brand site that sells some products.**
Squarespace shines for portfolio sites, blogs, and service businesses that sell a handful of products on the side.

**You want beautiful templates out of the box.**
Squarespace templates are gorgeous. Minimal. Clean. They work great for brands that live on aesthetics.

**You don't want to think about tech.**
Everything just works. Hosting, SSL, updates, security—handled. You focus on content and design.

**The limitations?**
E-commerce features are basic. No real multi-channel sync. Limited automation. Basic inventory management. Transaction fees on lower plans.

## When WordPress (WooCommerce) Makes Sense

**E-commerce is your primary business.**
WooCommerce is built for selling. Unlimited products. Complex variations. Advanced inventory. Multi-channel integration.

**You need growth flexibility.**
Start simple. Add features as you scale. Connect to Amazon, TikTok, Google Shopping. Build custom automations.

**You want ownership.**
Your site. Your data. Your rules. Export everything. Move anywhere. No lock-in.

**The complexity?**
WordPress requires more technical knowledge. Plugins, themes, hosting decisions—you're managing an ecosystem.

## The Real Comparison

**Squarespace:**
- Beautiful, restrictive
- Easy, limited
- Great for brand sites
- E-commerce is secondary
- Transaction fees unless you're on Commerce plans ($27-$49/mo)

**WordPress/WooCommerce:**
- Powerful, complex
- Flexible, requires knowledge
- Built for serious e-commerce
- E-commerce is primary
- No transaction fees (just payment processing)

## What We See In Practice

**Squarespace clients come to us when:**
- They outgrow the product limits
- They want to sell on multiple channels
- They need automation
- They need custom functionality

**WordPress clients come to us when:**
- They need the store built right from the start
- They want everything connected properly
- They need performance optimization
- They need ongoing technical support

## Our Actual Recommendation

**For boutiques/small brands with <50 products:** Start with Squarespace if you value simplicity over growth.

**For anyone planning to scale:** Build on WordPress/WooCommerce. Accept the learning curve. It pays off.

**For service businesses with a few products:** Squarespace is probably fine.

**For actual online stores:** WordPress/WooCommerce. Not even a question.

## The Hidden Costs

**Squarespace** looks cheaper upfront ($16-49/mo). But transaction fees add up. And when you need custom features, you're stuck.

**WordPress/WooCommerce** requires more initial investment (proper hosting, theme, setup). But scales better and costs less percentage-wise as you grow.

## The Bottom Line

Squarespace is a website builder with a store.
WordPress is a store builder with a website.

Pick based on what you're actually building.

Need help deciding? We've built both hundreds of times. Let's talk.
    `
  },
  {
    slug: "multi-channel-why-most-fail",
    title: "Why Most Stores Fail at Multi-Channel",
    date: "February 15, 2026",
    author: "StahlSystemsGroup",
    category: "Systems",
    readTime: "7 min",
    content: `
Everyone says "sell everywhere." Amazon, TikTok Shop, Instagram, Google Shopping—be everywhere your customers are.

Sounds great. In practice? Most stores break their operations trying.

## The Myth vs Reality

**The myth:** Connect your store to more platforms = more revenue.

**The reality:** Connect your store to more platforms without proper infrastructure = chaos.

## What Actually Breaks

**1. Inventory Management**
You sell the same product on Shopify, Amazon, and TikTok Shop. A customer buys it on Amazon. Your Shopify inventory doesn't update. TikTok Shop still shows it as available. Someone else buys it there. Now you're oversold.

Sound familiar?

**2. Order Fulfillment**
Orders coming from 5 platforms. Different interfaces. Different workflows. Manual errors multiply. Shipping delays. Wrong addresses. Customer service nightmares.

**3. Product Data Sync**
You update a price on your Shopify store. It doesn't sync to Amazon. The price is different everywhere. Or worse—product descriptions don't match. Customers are confused.

**4. Performance Tracking**
You can't see total sales across platforms. Your analytics are fragmented. You don't know what's actually working. You're flying blind.

## Why This Happens

**It's not about being on platforms. It's about having infrastructure that supports it.**

Most businesses approach multi-channel like this:
1. Launch Shopify store
2. Add Amazon manually
3. Add TikTok Shop manually
4. Try to keep everything synced manually
5. Break

The correct approach:
1. Launch Shopify store
2. **Build inventory sync infrastructure**
3. **Connect order management system**
4. **Set up automated product feeds**
5. Then add channels systematically

## The Real Requirements

To sell successfully on multiple channels, you need:

**Centralized inventory management**
One source of truth. All platforms pull from it. Updates happen in real-time.

**Automated order routing**
Orders come in from any platform, automatically route to fulfillment with correct data.

**Product feed management**
Product data updates once, syncs everywhere. Prices, descriptions, images—unified.

**Unified analytics**
See performance across all channels in one place. Actually know what's working.

**Platform-specific optimization**
Each channel has different requirements. Amazon needs different data than TikTok Shop. Your system needs to handle that.

## What We Actually Build

When we set up multi-channel systems, here's what happens:

**Phase 1: Foundation**
Get your main store solid. Clean data. Organized inventory. Proper product structure.

**Phase 2: Infrastructure**
Set up sync systems. Inventory management. Order routing. Analytics.

**Phase 3: Channel Addition**
Add platforms one at a time. Test thoroughly. Optimize per platform.

**Phase 4: Automation**
Automate everything that can be automated. Manual work should be the exception, not the rule.

## The Difference

**Most stores:** Add platforms → break operations → fix constantly

**Properly structured stores:** Build infrastructure → add platforms → scale smoothly

## The Cost of Doing It Wrong

We see businesses doing $20K-50K/month who can't add channels because their systems can't handle it.

They're stuck. More platforms = more chaos. They need to stop and rebuild infrastructure before they can grow.

That rebuild? 3-6 months. And revenue slows during the transition.

## The Cost of Doing It Right

Build infrastructure first: 4-6 weeks upfront.
Then add channels systematically: 1-2 weeks per platform.

Total time to be on 5 platforms properly? 12-16 weeks.

But you're not breaking things. You're not overselling. You're not drowning in manual work.

And when you want to add platform #6? One week. Because the infrastructure exists.

## Our Actual Recommendation

**If you're just starting:** Launch on one platform. Get profitable. Then build proper infrastructure before expanding.

**If you're already multi-channel and struggling:** Stop adding platforms. Fix your infrastructure. Then resume growth.

**If you're planning multi-channel:** Budget for infrastructure first. It's not optional—it's foundational.

## The Bottom Line

Multi-channel isn't about being on every platform. It's about having systems that can support every platform.

We're not anti-multi-channel. We're anti-chaos.

Build infrastructure. Then scale.

Need help building it right? We do this full-time.
    `
  },
  {
    slug: "diy-integrations-real-cost",
    title: "The Real Cost of DIY Integrations",
    date: "February 12, 2026",
    author: "StahlSystemsGroup",
    category: "Infrastructure",
    readTime: "5 min",
    content: `
"I'll just use Zapier."

Famous last words.

## The DIY Integration Path

Here's how it usually goes:

**Month 1:** "I set up a Zapier connection! My Shopify orders now create rows in Google Sheets. This is easy!"

**Month 3:** "I added another Zap to update inventory. And one for email notifications. I'm at 15 Zaps now."

**Month 6:** "Sometimes the Zaps fail and I don't notice for days. I'm manually checking everything anyway."

**Month 9:** "I'm paying $200/month for Zapier, spending hours debugging failures, and my data is a mess."

Sound familiar?

## What Actually Happens

DIY integrations seem cheap. $20-50/month for Zapier. "I'll save thousands!"

Here's what you're not calculating:

**1. Your Time**
Setting up Zaps: 2-5 hours
Debugging when they break: 3-8 hours/month
Manual verification: 2-4 hours/week

That's 30-50 hours/month of your time. What's your time worth?

**2. Data Errors**
Zapier fails silently sometimes. You don't notice until a customer complains. Or worse—until you're oversold and can't fulfill orders.

How much does one angry customer cost? How much does a refund + shipping cost?

**3. Scale Limitations**
Zapier works for simple workflows. Once you need conditional logic, error handling, data transformation—you're fighting the tool.

You end up with 30+ Zaps, nobody understands the system, and you're afraid to change anything because something will break.

**4. Platform Changes**
Shopify updates their API. Zapier's integration breaks. Your workflows stop. You spend a day fixing it.

This happens 2-3 times per year. You're constantly maintaining.

## The Real Math

**DIY Integration Costs:**
- Zapier/Make/n8n: $50-300/month
- Your time: 30-50 hours/month
- Error costs: 2-5 incidents/month
- Opportunity cost: Can't add features because system is fragile

**Proper Integration:**
- Built once, maintained systematically
- Monitored actively
- Handles errors gracefully
- Scales with your business
- Frees your time for actual business work

## What Actually Scales

Real integrations are:

**1. Built for your specific workflow**
Not generic Zaps. Actual code that does exactly what you need.

**2. Error-handled properly**
What happens when an API is down? When data is malformed? When a product doesn't exist?

Proper systems handle this. DIY integrations just fail.

**3. Monitored actively**
You should know immediately when something breaks. Not when a customer complains.

**4. Documented**
Someone else should be able to understand and maintain it. Not just you.

## When DIY Makes Sense

Honestly? Almost never for revenue-critical systems.

Use Zapier for:
- Internal notifications
- Simple data logging
- Non-critical workflows

Don't use it for:
- Inventory management
- Order processing
- Payment handling
- Multi-channel sync

## The Tipping Point

If you're doing less than $5K/month, DIY might be acceptable. You're learning. The stakes are low.

If you're doing $10K+/month, you should have proper integrations. The cost of errors exceeds the cost of doing it right.

If you're doing $50K+/month and still on DIY integrations, you're leaving money on the table. And risking your reputation.

## What We Actually Build

When we build integrations:

**1. We map your actual workflow**
Not generic. Your specific business logic.

**2. We handle errors properly**
Retry logic. Fallbacks. Notifications when manual intervention is needed.

**3. We make it maintainable**
Documented. Monitored. Someone can take over if needed.

**4. We make it invisible**
It just works. You don't think about it. You focus on business.

## The Bottom Line

DIY integrations seem cheap. They're expensive when you calculate:
- Your time
- Error costs
- Scaling limitations
- Opportunity cost

Real integrations seem expensive. They're cheap when you calculate:
- Time saved
- Errors prevented
- Growth enabled
- Peace of mind

We're not against DIY. We're against false economy.

Build it right or budget for the real cost of "cheap."

Need help evaluating what makes sense for your stage? Let's talk.
    `
  },
  {
    slug: "security-not-optional",
    title: "Security Isn't Optional",
    date: "February 8, 2026",
    author: "StahlSystemsGroup",
    category: "Security",
    readTime: "6 min",
    content: `
"We'll add security later."

No. You won't.

## What Actually Happens

Here's the pattern:

**Launch phase:** "Let's just get live. We'll worry about security later."

**Growth phase:** "We're too busy growing to think about security now."

**Breach phase:** "How did this happen?"

If money flows through your system, security isn't a feature. It's foundational.

## The Reality Check

**What you think hackers want:**
Your customer data to sell on the dark web.

**What they actually want:**
1. Your payment processor credentials
2. Access to commit fraud through your account
3. Your customer list for phishing
4. Your server resources for crypto mining

All of which happen before you notice.

## The Basic Requirements

If you accept payments online, you need:

**1. SSL Certificate**
Not optional. Not "eventually." Day one. Every page. No exceptions.

**2. PCI Compliance**
If you handle credit cards (even through Shopify/Stripe), you need PCI compliance.

Don't store card data. Use tokenization. Follow the rules.

**3. Regular Updates**
WordPress site? Your core, themes, and plugins need updates within 48 hours of release.

Security patches aren't suggestions. They're critical.

**4. Strong Authentication**
Two-factor authentication on admin accounts. No exceptions.

"My password is strong" doesn't matter when credential stuffing attacks exist.

**5. Regular Backups**
Daily backups. Tested restores. Not on the same server.

Can you restore your entire site from a backup right now? If you're not sure, that's a no.

**6. Monitoring**
You should know if something weird is happening. Failed login attempts. Unusual traffic. API errors.

You don't need a SOC team. You need basic monitoring.

## What We Actually Implement

When we build stores, security is integrated:

**Platform Level:**
- Force SSL everywhere
- Strong password policies
- Two-factor authentication required
- Admin access locked to specific IPs when possible

**Application Level:**
- Payment tokenization only
- No sensitive data in logs
- API rate limiting
- Input validation on everything

**Infrastructure Level:**
- Web application firewall
- DDoS protection
- Regular updates automated
- Security monitoring enabled

**Process Level:**
- Access controls documented
- Change management process
- Incident response plan
- Regular security reviews

## The Cost of Skipping This

**Small breach:**
- 2-3 days of downtime
- Lost revenue: $5K-20K
- Customer trust damage: Priceless
- Recovery cost: $3K-10K

**Medium breach:**
- Payment processor suspension
- Legal liability
- Customer notification requirements
- Recovery cost: $20K-100K

**Large breach:**
- Business closure
- Lawsuits
- Criminal liability in some cases

## The Actual Cost of Doing It Right

**Basic security for small stores:** $500-2,000 in setup
**Ongoing security maintenance:** $100-500/month

Compare that to breach costs.

## The Common Mistakes

**1. "We're on Shopify, we're secure"**
Shopify handles payment security. They don't handle your admin credentials, your third-party app permissions, or your team's access policies.

**2. "We're too small to be targeted"**
Attacks are automated. Bots don't care about your size. They scan for vulnerabilities and exploit them.

**3. "We'll add security before we launch"**
No. Security is architectural. You can't bolt it on later without rebuilding.

**4. "Our developer said it's secure"**
Is that developer a security expert? Have they done penetration testing? Or are they just confident?

## What You Should Do Today

**If you haven't launched yet:**
Build security in from the start. It's 10x easier and cheaper.

**If you're already live:**
1. Enable two-factor authentication today
2. Run a security audit this week
3. Set up automated backups this week
4. Plan for proper security implementation this month

**If you've been breached:**
1. Take the site offline
2. Contact your payment processor
3. Get professional help immediately
4. Don't try to "fix it yourself"

## Our Take

We're not paranoid. We're realistic.

Every store handling money is a target. The question isn't "will someone try?" it's "will your defenses hold?"

We build security in from day one. Not because we're scared. Because we're professional.

If money flows through it, it needs to be protected.

Need a security audit? That's where every cleanup project starts.
    `
  },
  {
    slug: "diagnostics-mindset",
    title: "The Diagnostics Mindset",
    date: "February 5, 2026",
    author: "StahlSystemsGroup",
    category: "Process",
    readTime: "5 min",
    content: `
Most agencies start with solutions.

"You need a Shopify store."
"You need Facebook ads."
"You need email automation."

We start with questions.

## Why Diagnostics?

Because symptoms aren't problems. And solutions that don't match problems are just expensive Band-Aids.

**Client says:** "My checkout conversion is low."

**Agency says:** "We'll redesign your checkout."

**We say:** "Let's find out why it's low."

Then we discover:
- Page load time is 8 seconds
- Mobile checkout breaks on iOS
- Shipping costs aren't clear until final step
- Trust badges aren't visible
- Payment options are limited

One of these is the actual problem. The rest are contributing factors.

Redesigning checkout without fixing the real issue? You'll spend money and see minimal improvement.

## The Process

**1. Observe**
What's actually happening? Not what you think is happening. Not what should be happening. What is happening?

We look at data. We test the user experience. We trace the entire flow.

**2. Measure**
Numbers don't lie. Opinions do.

Page load times. Bounce rates. Drop-off points. Error rates. All measured.

**3. Isolate**
What's the actual bottleneck? There's usually one primary issue causing 80% of the problem.

We isolate it. Test the hypothesis. Confirm.

**4. Fix**
Now we implement. With clear metrics for success.

**5. Verify**
Did the fix work? By how much? What improved? What didn't?

Then we iterate.

## Why This Matters

**Without diagnostics:**
- Implement changes blindly
- Can't measure actual impact
- Waste budget on wrong solutions
- Never know what actually works

**With diagnostics:**
- Fix actual problems
- Measure real impact
- Optimize budget for highest ROI
- Build systematic improvement process

## Real Example

**Client:** "Our sales are down 30% this month."

**Typical approach:** "Let's run ads / redesign site / add promotions"

**Diagnostic approach:**

**Investigation reveals:**
1. Site speed degraded after adding new app
2. Product images loading slowly
3. Mobile users bouncing 70%
4. Desktop users converting normally

**Root cause:** New app conflict broke image optimization on mobile.

**Fix:** Remove conflicting app, implement proper image optimization.

**Result:** Sales recovered in 3 days. Cost: $500 fix vs $5K redesign.

## The Mindset

We're not here to implement what you think you need. We're here to discover what you actually need.

Sometimes what you need is simple.
Sometimes it's complex.
Sometimes it's not what you expected.

But it's always based on evidence. Not assumptions.

## When We Hear "Just"

"Just add this feature."
"Just connect to this platform."
"Just fix this bug."

That word—"just"—tells us someone is thinking in solutions, not diagnostics.

There is no "just." There's:
- Understand the requirement
- Assess the architecture
- Identify dependencies
- Plan implementation
- Execute correctly
- Test thoroughly
- Monitor performance

## What This Looks Like In Practice

**Diagnostic call structure:**

1. What are you trying to achieve? (Business goal)
2. What's preventing that now? (Perceived problem)
3. How do you know? (Evidence)
4. What have you tried? (History)
5. What does the data show? (Reality check)

Then we dig in. Sometimes for hours. Because accurate diagnosis takes time.

## The Difference

**Template approach:** "All stores need X, Y, Z."

**Diagnostic approach:** "Your store needs A because B, and C can wait until D is resolved."

Specific. Evidence-based. Prioritized.

## Our Promise

We won't tell you what you want to hear.
We'll tell you what we actually find.

Sometimes that's "your site is solid, you need marketing help" (and we'll tell you we're not marketing experts).

Sometimes it's "your entire infrastructure needs rebuilding."

Sometimes it's "change these three things and you're good."

We don't know until we look. And we won't pretend to know before we do.

## The Bottom Line

We're not order-takers. We're not yes-men. We're diagnosticians.

We investigate. We measure. We identify root causes. Then we fix them systematically.

If you want someone to just "build what you tell them," we're not the right team.

If you want someone to figure out what you actually need and build that—let's talk.
    `
  }
];

export function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const article = articles.find(a => a.slug === selectedArticle);

  if (article) {
    return (
      <div className="min-h-screen pt-24 px-6 pb-20">
        <PageMeta 
          title={article.title}
          description={article.content.substring(0, 160)}
        />
        <div className="max-w-4xl mx-auto">
          <Link to="/journal">
            <motion.button
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8"
              whileHover={{ x: -4 }}
              onClick={() => setSelectedArticle(null)}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Journal
            </motion.button>
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-sm text-slate-600">•</span>
                <span className="text-sm text-slate-500">{article.readTime} read</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
              </div>
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-slate-300 prose-ul:my-6
                prose-li:my-2"
              style={{ whiteSpace: 'pre-line' }}
            >
              {article.content}
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <PageMeta 
        title="Journal - Technical Insights"
        description="Technical insights on multi-channel systems, revenue infrastructure, and e-commerce platforms. Articles on TikTok Shop, Amazon integration, and social selling."
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
            The <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Journal</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technical insights on multi-channel systems, revenue infrastructure, and e-commerce platforms.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              className="group cursor-pointer border border-slate-800 bg-[#0f0f1f] p-8 rounded-xl hover:border-indigo-500/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedArticle(article.slug)}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-sm text-slate-600">•</span>
                <span className="text-sm text-slate-500">{article.readTime} read</span>
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                {article.title}
              </h2>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {article.content.substring(0, 150).trim()}...
              </p>

              <div className="mt-4 text-indigo-400 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                Read More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}