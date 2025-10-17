import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Bitcoin, Building2 } from "lucide-react";
import { Link } from "wouter";
import forexImage from "@assets/generated_images/Forex_trading_screens_workspace_5ac1b3b2.png";
import cryptoImage from "@assets/generated_images/Cryptocurrency_blockchain_network_visualization_2e916bc6.png";

export function ServicesOverview() {
  const services = [
    {
      id: "forex",
      icon: TrendingUp,
      title: "Forex Trading",
      description: "Master currency trading with comprehensive guides on pips, spreads, and proven strategies. Compare top brokers and access real-time market analysis.",
      features: ["Live Market Data", "Strategy Guides", "Broker Reviews", "Risk Management"],
      image: forexImage,
      href: "/forex",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "crypto",
      icon: Bitcoin,
      title: "Cryptocurrency",
      description: "Navigate the world of digital assets with blockchain fundamentals, trading strategies, and comprehensive exchange comparisons for secure trading.",
      features: ["Blockchain Basics", "Price Tracking", "Trading Strategies", "Exchange Reviews"],
      image: cryptoImage,
      href: "/crypto",
      color: "from-amber-600 to-orange-700"
    },
    {
      id: "prop-firms",
      icon: Building2,
      title: "Proprietary Trading Firms",
      description: "Get funded and trade professionally. Learn about prop firm evaluations, profit splits, and risk management to qualify for funded accounts.",
      features: ["Firm Evaluations", "Funding Programs", "Performance Tracking", "Payout Structures"],
      image: null,
      href: "/prop-firms",
      color: "from-green-600 to-emerald-700"
    }
  ];

  return (
    <section className="py-16 sm:py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Comprehensive Trading Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in Forex, Cryptocurrency, and Prop Trading
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="overflow-hidden group hover-elevate transition-all duration-300" data-testid={`card-service-${service.id}`}>
                <div className={`h-48 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                  {service.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-2xl">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full mt-4" data-testid={`button-learn-${service.id}`}>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
