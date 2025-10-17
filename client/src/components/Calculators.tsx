import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, TrendingUp } from "lucide-react";

export function Calculators() {
  const [pipCalc, setPipCalc] = useState({
    currencyPair: "EURUSD",
    accountCurrency: "USD",
    positionSize: "1",
    pipMovement: "10"
  });
  const [pipResult, setPipResult] = useState<{ pipValue: number; profitLoss: number } | null>(null);

  const [plCalc, setPlCalc] = useState({
    entryPrice: "1.0850",
    exitPrice: "1.0900",
    positionSize: "1",
    positionType: "long"
  });
  const [plResult, setPlResult] = useState<{ profitLoss: number; percentage: number; pips: number } | null>(null);

  const calculatePipValue = () => {
    const positionSize = parseFloat(pipCalc.positionSize);
    const pips = parseFloat(pipCalc.pipMovement);
    
    let pipValue = 0;
    if (pipCalc.currencyPair.includes("JPY")) {
      pipValue = (0.01 / 1) * positionSize * 100000;
    } else {
      pipValue = (0.0001 / 1) * positionSize * 100000;
    }
    
    const profitLoss = pipValue * pips;
    setPipResult({ pipValue, profitLoss });
  };

  const calculateProfitLoss = () => {
    const entry = parseFloat(plCalc.entryPrice);
    const exit = parseFloat(plCalc.exitPrice);
    const position = parseFloat(plCalc.positionSize);
    
    const priceDiff = plCalc.positionType === "long" ? exit - entry : entry - exit;
    const pips = priceDiff * 10000;
    const profitLoss = priceDiff * position * 100000;
    const percentage = (priceDiff / entry) * 100;
    
    setPlResult({ profitLoss, percentage, pips });
  };

  return (
    <section className="py-16 sm:py-24 bg-muted/30" id="calculators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Trading Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate pip values and profit/loss instantly with our professional trading tools
          </p>
        </div>

        <Tabs defaultValue="pip" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8" data-testid="tabs-calculators">
            <TabsTrigger value="pip" data-testid="tab-pip-calculator">
              <Calculator className="w-4 h-4 mr-2" />
              Pip Calculator
            </TabsTrigger>
            <TabsTrigger value="pl" data-testid="tab-pl-calculator">
              <TrendingUp className="w-4 h-4 mr-2" />
              P/L Calculator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pip">
            <Card className="p-6 sm:p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pip-currency-pair">Currency Pair</Label>
                    <Select
                      value={pipCalc.currencyPair}
                      onValueChange={(value) => setPipCalc({ ...pipCalc, currencyPair: value })}
                    >
                      <SelectTrigger id="pip-currency-pair" data-testid="select-pip-currency-pair">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EURUSD">EUR/USD</SelectItem>
                        <SelectItem value="GBPUSD">GBP/USD</SelectItem>
                        <SelectItem value="USDJPY">USD/JPY</SelectItem>
                        <SelectItem value="AUDUSD">AUD/USD</SelectItem>
                        <SelectItem value="USDCAD">USD/CAD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pip-account-currency">Account Currency</Label>
                    <Select
                      value={pipCalc.accountCurrency}
                      onValueChange={(value) => setPipCalc({ ...pipCalc, accountCurrency: value })}
                    >
                      <SelectTrigger id="pip-account-currency" data-testid="select-pip-account-currency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="JPY">JPY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pip-position-size">Position Size (Lots)</Label>
                    <Input
                      id="pip-position-size"
                      type="number"
                      step="0.01"
                      value={pipCalc.positionSize}
                      onChange={(e) => setPipCalc({ ...pipCalc, positionSize: e.target.value })}
                      data-testid="input-pip-position-size"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pip-movement">Pip Movement</Label>
                    <Input
                      id="pip-movement"
                      type="number"
                      step="1"
                      value={pipCalc.pipMovement}
                      onChange={(e) => setPipCalc({ ...pipCalc, pipMovement: e.target.value })}
                      data-testid="input-pip-movement"
                    />
                  </div>
                </div>

                <Button
                  onClick={calculatePipValue}
                  className="w-full"
                  size="lg"
                  data-testid="button-calculate-pip"
                >
                  Calculate
                </Button>

                {pipResult && (
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Pip Value</div>
                        <div className="text-2xl font-bold" data-testid="result-pip-value">
                          ${pipResult.pipValue.toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Profit/Loss</div>
                        <div
                          className={`text-2xl font-bold ${pipResult.profitLoss >= 0 ? "text-green-600" : "text-red-600"}`}
                          data-testid="result-pip-profit-loss"
                        >
                          {pipResult.profitLoss >= 0 ? "+" : ""}${pipResult.profitLoss.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pl">
            <Card className="p-6 sm:p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pl-entry-price">Entry Price</Label>
                    <Input
                      id="pl-entry-price"
                      type="number"
                      step="0.0001"
                      value={plCalc.entryPrice}
                      onChange={(e) => setPlCalc({ ...plCalc, entryPrice: e.target.value })}
                      data-testid="input-pl-entry-price"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pl-exit-price">Exit Price</Label>
                    <Input
                      id="pl-exit-price"
                      type="number"
                      step="0.0001"
                      value={plCalc.exitPrice}
                      onChange={(e) => setPlCalc({ ...plCalc, exitPrice: e.target.value })}
                      data-testid="input-pl-exit-price"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pl-position-size">Position Size (Lots)</Label>
                    <Input
                      id="pl-position-size"
                      type="number"
                      step="0.01"
                      value={plCalc.positionSize}
                      onChange={(e) => setPlCalc({ ...plCalc, positionSize: e.target.value })}
                      data-testid="input-pl-position-size"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pl-position-type">Position Type</Label>
                    <Select
                      value={plCalc.positionType}
                      onValueChange={(value) => setPlCalc({ ...plCalc, positionType: value })}
                    >
                      <SelectTrigger id="pl-position-type" data-testid="select-pl-position-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="long">Long (Buy)</SelectItem>
                        <SelectItem value="short">Short (Sell)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={calculateProfitLoss}
                  className="w-full"
                  size="lg"
                  data-testid="button-calculate-pl"
                >
                  Calculate
                </Button>

                {plResult && (
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Profit/Loss</div>
                        <div
                          className={`text-2xl font-bold ${plResult.profitLoss >= 0 ? "text-green-600" : "text-red-600"}`}
                          data-testid="result-pl-amount"
                        >
                          {plResult.profitLoss >= 0 ? "+" : ""}${plResult.profitLoss.toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Percentage</div>
                        <div
                          className={`text-2xl font-bold ${plResult.percentage >= 0 ? "text-green-600" : "text-red-600"}`}
                          data-testid="result-pl-percentage"
                        >
                          {plResult.percentage >= 0 ? "+" : ""}{plResult.percentage.toFixed(2)}%
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Pips</div>
                        <div className="text-2xl font-bold" data-testid="result-pl-pips">
                          {plResult.pips.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
