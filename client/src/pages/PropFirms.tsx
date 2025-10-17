import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Target, DollarSign, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function PropFirms() {
  const features = [
    {
      icon: Building2,
      title: "What Are Prop Firms?",
      description: "Proprietary trading firms provide capital to qualified traders, allowing you to trade larger positions without risking your own money while sharing profits."
    },
    {
      icon: Target,
      title: "Evaluation Process",
      description: "Learn how to pass prop firm evaluations, including profit targets, maximum drawdown rules, and consistency requirements to qualify for funded accounts."
    },
    {
      icon: DollarSign,
      title: "Profit Splits & Payouts",
      description: "Understand different profit-sharing models, payout structures, and how to maximize your earnings as a funded trader with prop firms."
    },
    {
      icon: Trophy,
      title: "Performance Optimization",
      description: "Master risk management, trading psychology, and strategy optimization to maintain consistent performance and scale your funded accounts."
    }
  ];

  const benefits = [
    "Trade with $10,000 - $300,000 in capital",
    "Keep 50% - 100% of your profits",
    "No personal financial risk",
    "Professional trading environment",
    "Access to advanced tools & platforms",
    "Scaling opportunities for top performers"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDh2OGgtOHpNNDQgMjJoOHY4aC04ek0zNiAzMGg4djhoLTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Get Funded. Trade Professionally.
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Access capital from leading proprietary trading firms and turn your trading
                skills into a sustainable income without risking your own money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="#reviews">Compare Prop Firms</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20" asChild>
                  <Link href="/tools">Use Calculators</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Everything About Prop Trading
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete guide to qualifying for and succeeding with funded trading accounts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="p-6 hover-elevate">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-700 dark:text-green-300" />
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

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl">
                  Why Trade with Prop Firms?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proprietary trading firms offer skilled traders the opportunity to manage
                  significant capital and earn substantial income without the need for personal
                  investment. Here's what makes prop trading attractive:
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-green-700 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">$100K+</div>
                      <div className="text-sm text-muted-foreground">Average Funding</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Top-performing traders can manage accounts worth $100,000 or more,
                    with opportunities to scale to $300,000+ based on performance.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" asChild>
                    <Link href="#reviews">Find Your Prop Firm</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" id="reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Top Prop Firms Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compare leading proprietary trading firms on funding amounts, profit splits, and evaluation criteria
              </p>
            </div>

            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/#broker-comparison">
                  View Detailed Comparison
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
