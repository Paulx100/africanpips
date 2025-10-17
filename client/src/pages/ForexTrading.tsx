import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, BookOpen, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import forexImage from "@assets/generated_images/Forex_trading_screens_workspace_5ac1b3b2.png";

export default function ForexTrading() {
  const features = [
    {
      icon: TrendingUp,
      title: "Understanding Pips & Spreads",
      description: "Learn the fundamental concepts of forex trading including how pips work, spread calculations, and their impact on your trading profitability."
    },
    {
      icon: BarChart3,
      title: "Technical Analysis",
      description: "Master chart patterns, indicators, and technical analysis tools to identify high-probability trading opportunities in currency markets."
    },
    {
      icon: BookOpen,
      title: "Trading Strategies",
      description: "Explore proven forex strategies including scalping, day trading, swing trading, and position trading for different market conditions."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Implement proper risk management techniques including position sizing, stop losses, and portfolio diversification to protect your capital."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${forexImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Master Forex Trading
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Learn currency trading from the ground up with comprehensive guides,
                real-time market analysis, and expert strategies tailored for African traders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/tools">Start Trading</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20" asChild>
                  <Link href="#market-data">View Live Data</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Comprehensive Forex Education
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to become a successful forex trader
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="p-6 hover-elevate">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30" id="market-data">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Live Forex Market Data
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track major currency pairs in real-time with advanced charting
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">EUR/USD</h3>
                <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=FX%3AEURUSD&interval=D&hidesidetoolbar=0&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&locale=en"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">GBP/USD</h3>
                <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d88&symbol=FX%3AGBPUSD&interval=D&hidesidetoolbar=0&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&locale=en"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" id="brokers">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Top Forex Brokers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compare regulated brokers and find the best fit for your trading needs
              </p>
            </div>

            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/#broker-comparison">
                  View Broker Comparison
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
