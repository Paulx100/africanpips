import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscriptionMutation = useMutation({
    mutationFn: (email: string) => 
      apiRequest("POST", "/api/newsletter/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest market insights and trading tips.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    subscriptionMutation.mutate(email);
  };

  return (
    <section className="py-16 sm:py-24" id="newsletter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-gradient-to-br from-primary to-primary/90 border-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12">
            <div className="space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm w-fit">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Free Market Updates</span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
                Stay Ahead of the Market
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                Join 50,000+ traders receiving weekly market analysis, trading strategies,
                and exclusive educational content directly to your inbox.
              </p>

              <ul className="space-y-3">
                {[
                  "Daily Forex & Crypto market analysis",
                  "Expert trading strategies and tips",
                  "Exclusive webinar invitations",
                  "New broker and prop firm reviews"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="newsletter-email" className="text-sm font-semibold text-white">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="newsletter-email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-11 h-12 bg-white text-foreground border-white/20 focus:border-accent"
                          data-testid="input-newsletter-email"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      disabled={subscriptionMutation.isPending}
                      data-testid="button-subscribe-newsletter"
                    >
                      {subscriptionMutation.isPending ? "Subscribing..." : "Subscribe Now"}
                    </Button>

                    <p className="text-xs text-white/70 text-center">
                      No spam. Unsubscribe at any time. We respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
