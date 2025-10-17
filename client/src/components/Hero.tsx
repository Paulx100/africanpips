import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/African_traders_in_modern_office_9dbc5c12.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent font-semibold text-sm">
              <Award className="w-4 h-4" />
              Trusted by 50,000+ African Traders
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Empower Your{" "}
            <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
              Trading Journey
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Master Forex, Cryptocurrency, and Prop Trading with comprehensive education,
            real-time market insights, and expert strategies tailored for African traders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="text-base px-8 py-6 h-auto"
              asChild
              data-testid="button-start-learning"
            >
              <Link href="#services">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 h-auto bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              asChild
              data-testid="button-explore-tools"
            >
              <Link href="/tools">Explore Tools</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10" data-testid="stat-trading-instruments">
              <TrendingUp className="w-8 h-8 text-accent" />
              <div className="text-3xl font-bold text-white" data-testid="stat-value-instruments">10,000+</div>
              <div className="text-sm text-gray-300">Trading Instruments</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10" data-testid="stat-active-traders">
              <Users className="w-8 h-8 text-accent" />
              <div className="text-3xl font-bold text-white" data-testid="stat-value-traders">50K+</div>
              <div className="text-sm text-gray-300">Active Traders</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10" data-testid="stat-african-countries">
              <Award className="w-8 h-8 text-accent" />
              <div className="text-3xl font-bold text-white" data-testid="stat-value-countries">45+</div>
              <div className="text-sm text-gray-300">African Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
