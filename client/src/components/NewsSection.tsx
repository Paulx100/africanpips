import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";

const newsArticles = [
  {
    id: "1",
    title: "African Central Banks Signal Policy Shifts Amid Global Market Volatility",
    excerpt: "Major African central banks are considering monetary policy adjustments as global market conditions evolve, creating new opportunities for forex traders in the region.",
    category: "African Markets" as const,
    date: "2025-10-15",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop"
  },
  {
    id: "2",
    title: "Bitcoin ETF Approvals Drive Institutional Adoption in Emerging Markets",
    excerpt: "The approval of spot Bitcoin ETFs in major markets is accelerating institutional cryptocurrency adoption across African financial institutions.",
    category: "Crypto" as const,
    date: "2025-10-14",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop"
  },
  {
    id: "3",
    title: "Top Prop Firms Expand Funded Trader Programs for African Markets",
    excerpt: "Leading proprietary trading firms are launching specialized programs targeting talented traders in Africa with improved profit splits and lower evaluation fees.",
    category: "Prop Firms" as const,
    date: "2025-10-13",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop"
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Forex":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Crypto":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    case "Prop Firms":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "African Markets":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export function NewsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Latest Market Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay ahead with the latest news, analysis, and trends in trading
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex" data-testid="button-view-all-news">
            <Link href="/news">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={article.id} className="overflow-hidden group hover-elevate transition-all duration-300" data-testid={`card-news-${index}`}>
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} min
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="w-full justify-between group/btn" data-testid={`button-read-news-${index}`}>
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild className="w-full">
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
