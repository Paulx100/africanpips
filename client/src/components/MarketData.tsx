import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MarketData() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30" id="market-data">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Live Market Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time tracking of top Forex pairs and Cryptocurrencies with advanced technical analysis
          </p>
        </div>

        <Tabs defaultValue="forex" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8" data-testid="tabs-market-data">
            <TabsTrigger value="forex" data-testid="tab-forex">Forex</TabsTrigger>
            <TabsTrigger value="crypto" data-testid="tab-crypto">Cryptocurrency</TabsTrigger>
          </TabsList>

          <TabsContent value="forex" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6" data-testid="card-forex-eurusd">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">EUR/USD</h3>
                    <p className="text-sm text-muted-foreground">Euro / US Dollar</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" data-testid="price-eurusd">1.0847</div>
                    <div className="text-sm text-green-600" data-testid="change-eurusd">+0.0012 (+0.11%)</div>
                  </div>
                </div>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%201)%22%2C%22underLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%200.3)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%7D"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>

              <Card className="p-6" data-testid="card-forex-gbpusd">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">GBP/USD</h3>
                    <p className="text-sm text-muted-foreground">British Pound / US Dollar</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" data-testid="price-gbpusd">1.2654</div>
                    <div className="text-sm text-red-600" data-testid="change-gbpusd">-0.0023 (-0.18%)</div>
                  </div>
                </div>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AGBPUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%201)%22%2C%22underLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%200.3)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%7D"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>

              <Card className="p-6" data-testid="card-forex-usdjpy">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">USD/JPY</h3>
                    <p className="text-sm text-muted-foreground">US Dollar / Japanese Yen</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" data-testid="price-usdjpy">148.92</div>
                    <div className="text-sm text-green-600" data-testid="change-usdjpy">+0.45 (+0.30%)</div>
                  </div>
                </div>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AUSDJPY%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%201)%22%2C%22underLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%200.3)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%7D"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>

              <Card className="p-6" data-testid="card-forex-xauusd">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">XAU/USD</h3>
                    <p className="text-sm text-muted-foreground">Gold / US Dollar</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" data-testid="price-xauusd">2,034.50</div>
                    <div className="text-sm text-green-600" data-testid="change-xauusd">+12.30 (+0.61%)</div>
                  </div>
                </div>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22TVC%3AGOLD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(230%2C%20184%2C%200%2C%201)%22%2C%22underLineColor%22%3A%22rgba(230%2C%20184%2C%200%2C%200.3)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%7D"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6" data-testid="card-crypto-btcusd">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">BTC/USD</h3>
                    <p className="text-sm text-muted-foreground">Bitcoin / US Dollar</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" data-testid="price-btcusd">$43,127</div>
                    <div className="text-sm text-green-600" data-testid="change-btcusd">+$1,245 (+2.97%)</div>
                  </div>
                </div>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22COINBASE%3ABTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%201)%22%2C%22underLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%200.3)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%7D"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>

              <Card className="p-6" data-testid="card-crypto-ethusd">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ETH/USD</h3>
                    <p className="text-sm text-muted-foreground">Ethereum / US Dollar</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" data-testid="price-ethusd">$2,291</div>
                    <div className="text-sm text-green-600" data-testid="change-ethusd">+$87 (+3.95%)</div>
                  </div>
                </div>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22COINBASE%3AETHUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%201)%22%2C%22underLineColor%22%3A%22rgba(26%2C%2077%2C%20143%2C%200.3)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%7D"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowTransparency
                    scrolling="no"
                  />
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
