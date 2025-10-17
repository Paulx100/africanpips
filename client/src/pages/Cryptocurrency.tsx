import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bitcoin, Shield, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import cryptoImage from "@assets/generated_images/Cryptocurrency_blockchain_network_visualization_2e916bc6.png";

export default function Cryptocurrency() {
  const features = [
    {
      icon: Bitcoin,
      title: "Blockchain Fundamentals",
      description: "Understand the technology behind cryptocurrencies, including blockchain mechanics, consensus mechanisms, and decentralization principles."
    },
    {
      icon: Shield,
      title: "Security & Wallets",
      description: "Learn about cryptocurrency security best practices, wallet types, private key management, and protecting your digital assets."
    },
    {
      icon: TrendingUp,
      title: "Trading Strategies",
      description: "Master crypto trading techniques from day trading to long-term hodling, including technical and fundamental analysis approaches."
    },
    {
      icon: Zap,
      title: "DeFi & Advanced Topics",
      description: "Explore decentralized finance, staking, yield farming, NFTs, and other advanced cryptocurrency investment opportunities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cryptoImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-orange-800/85 to-amber-700/75" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Navigate the World of Cryptocurrency
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From blockchain basics to advanced trading strategies, master digital asset
                trading with comprehensive guides and real-time market insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/tools">Start Learning</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20" asChild>
                  <Link href="#prices">Live Crypto Prices</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Comprehensive Crypto Education
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master cryptocurrency trading from fundamentals to advanced strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="p-6 hover-elevate">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-amber-700 dark:text-amber-300" />
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

        <section className="py-16 sm:py-24 bg-muted/30" id="prices">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Live Cryptocurrency Prices
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track Bitcoin, Ethereum, and top altcoins in real-time
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Bitcoin (BTC/USD)</h3>
                <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_crypto1&symbol=COINBASE%3ABTCUSD&interval=D&hidesidetoolbar=0&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&locale=en"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Ethereum (ETH/USD)</h3>
                <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_crypto2&symbol=COINBASE%3AETHUSD&interval=D&hidesidetoolbar=0&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&locale=en"
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

        <section className="py-16 sm:py-24" id="exchanges">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Top Crypto Exchanges
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compare leading cryptocurrency exchanges on fees, security, and features
              </p>
            </div>

            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/#broker-comparison">
                  View Exchange Comparison
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
