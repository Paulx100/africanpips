import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calculators } from "@/components/Calculators";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, BarChart3 } from "lucide-react";

export default function Tools() {
  const tools = [
    {
      icon: Calculator,
      title: "Pip Calculator",
      description: "Calculate pip values for any currency pair and position size to accurately assess potential profits and losses."
    },
    {
      icon: TrendingUp,
      title: "Profit/Loss Calculator",
      description: "Determine your exact profit or loss based on entry price, exit price, and position size for both long and short trades."
    },
    {
      icon: DollarSign,
      title: "Position Size Calculator",
      description: "Calculate optimal position sizes based on your account balance, risk tolerance, and stop loss distance."
    },
    {
      icon: BarChart3,
      title: "Risk/Reward Calculator",
      description: "Analyze potential trade setups by calculating risk-to-reward ratios and expected profitability."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 sm:py-32 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Professional Trading Tools
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Free calculators and tools to help you make informed trading decisions,
                manage risk, and maximize profitability in Forex and Crypto markets.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Available Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential calculators for every trader's toolkit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Card key={tool.title} className="p-6 text-center hover-elevate">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Calculators />

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-center">
                How to Use These Calculators
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pip Calculator</h3>
                  <p>
                    Select your currency pair, account currency, position size in lots, and the number
                    of pips you expect to gain or lose. The calculator will show you the monetary value
                    of each pip and your total profit/loss.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Profit/Loss Calculator</h3>
                  <p>
                    Enter your entry price, exit price (or current price), position size, and whether
                    you're going long or short. The calculator will display your profit/loss in dollars,
                    percentage, and pips.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Best Practices</h3>
                  <p>
                    Always calculate your risk before entering a trade. Use these tools to determine
                    if a trade setup meets your risk management criteria and aligns with your trading
                    strategy. Remember that proper position sizing is key to long-term trading success.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
