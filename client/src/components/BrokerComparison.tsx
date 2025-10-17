import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Shield } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const forexBrokers = [
  {
    name: "IC Markets",
    rating: 4.8,
    regulatedBy: ["ASIC", "CySEC", "FSA"],
    minDeposit: 200,
    spreads: "From 0.0 pips",
    leverage: "1:500",
    platforms: ["MT4", "MT5", "cTrader"],
  },
  {
    name: "Pepperstone",
    rating: 4.7,
    regulatedBy: ["FCA", "ASIC", "CySEC"],
    minDeposit: 200,
    spreads: "From 0.0 pips",
    leverage: "1:500",
    platforms: ["MT4", "MT5", "cTrader"],
  },
  {
    name: "XM Global",
    rating: 4.5,
    regulatedBy: ["CySEC", "ASIC", "IFSC"],
    minDeposit: 5,
    spreads: "From 0.6 pips",
    leverage: "1:888",
    platforms: ["MT4", "MT5"],
  },
];

const cryptoExchanges = [
  {
    name: "Binance",
    rating: 4.6,
    tradingFees: "0.1% - 0.5%",
    security: "SAFU Fund, 2FA",
    coins: "350+",
  },
  {
    name: "Coinbase",
    rating: 4.4,
    tradingFees: "0.5% - 3.99%",
    security: "Insurance, Cold Storage",
    coins: "200+",
  },
  {
    name: "Kraken",
    rating: 4.5,
    tradingFees: "0% - 0.26%",
    security: "Cold Storage, 2FA",
    coins: "185+",
  },
];

const propFirms = [
  {
    name: "FTMO",
    rating: 4.7,
    fundingAmount: "Up to $200,000",
    profitSplit: "80% - 90%",
    evaluationFee: 155,
    maxDrawdown: "10%",
  },
  {
    name: "The5%ers",
    rating: 4.6,
    fundingAmount: "Up to $250,000",
    profitSplit: "50% - 100%",
    evaluationFee: 225,
    maxDrawdown: "4% - 6%",
  },
  {
    name: "MyForexFunds",
    rating: 4.5,
    fundingAmount: "Up to $300,000",
    profitSplit: "75% - 85%",
    evaluationFee: 99,
    maxDrawdown: "8% - 10%",
  },
];

export function BrokerComparison() {
  return (
    <section className="py-16 sm:py-24" id="broker-comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Broker & Exchange Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare the best brokers, exchanges, and prop firms to find the perfect fit for your trading needs
          </p>
        </div>

        <Tabs defaultValue="forex" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8" data-testid="tabs-broker-comparison">
            <TabsTrigger value="forex" data-testid="tab-forex-brokers">Forex</TabsTrigger>
            <TabsTrigger value="crypto" data-testid="tab-crypto-exchanges">Crypto</TabsTrigger>
            <TabsTrigger value="prop" data-testid="tab-prop-firms">Prop Firms</TabsTrigger>
          </TabsList>

          <TabsContent value="forex" className="space-y-6">
            {forexBrokers.map((broker, index) => (
              <Card key={broker.name} className="p-6 hover-elevate" data-testid={`card-forex-broker-${index}`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1 space-y-2">
                    <h3 className="font-bold text-xl">{broker.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(broker.rating) ? "fill-accent text-accent" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{broker.rating}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {broker.regulatedBy.map((reg) => (
                        <Badge key={reg} variant="secondary" className="text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          {reg}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Min Deposit</div>
                      <div className="font-semibold">${broker.minDeposit}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Spreads</div>
                      <div className="font-semibold">{broker.spreads}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Leverage</div>
                      <div className="font-semibold">{broker.leverage}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Platforms</div>
                      <div className="font-semibold">{broker.platforms.join(", ")}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex items-center">
                    <Button className="w-full" data-testid={`button-visit-broker-${index}`}>
                      Visit Broker
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="crypto" className="space-y-6">
            {cryptoExchanges.map((exchange, index) => (
              <Card key={exchange.name} className="p-6 hover-elevate" data-testid={`card-crypto-exchange-${index}`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1 space-y-2">
                    <h3 className="font-bold text-xl">{exchange.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(exchange.rating) ? "fill-accent text-accent" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{exchange.rating}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Trading Fees</div>
                      <div className="font-semibold">{exchange.tradingFees}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Security</div>
                      <div className="font-semibold text-sm">{exchange.security}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-sm text-muted-foreground mb-1">Supported Coins</div>
                      <div className="font-semibold">{exchange.coins}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex items-center">
                    <Button className="w-full" data-testid={`button-visit-exchange-${index}`}>
                      Visit Exchange
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="prop" className="space-y-6">
            {propFirms.map((firm, index) => (
              <Card key={firm.name} className="p-6 hover-elevate" data-testid={`card-prop-firm-${index}`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1 space-y-2">
                    <h3 className="font-bold text-xl">{firm.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(firm.rating) ? "fill-accent text-accent" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{firm.rating}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Funding Amount</div>
                      <div className="font-semibold">{firm.fundingAmount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Profit Split</div>
                      <div className="font-semibold">{firm.profitSplit}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Evaluation Fee</div>
                      <div className="font-semibold">${firm.evaluationFee}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Max Drawdown</div>
                      <div className="font-semibold">{firm.maxDrawdown}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex items-center">
                    <Button className="w-full" data-testid={`button-visit-firm-${index}`}>
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
