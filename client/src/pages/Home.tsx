import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MarketData } from "@/components/MarketData";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Calculators } from "@/components/Calculators";
import { BrokerComparison } from "@/components/BrokerComparison";
import { NewsSection } from "@/components/NewsSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <MarketData />
        <ServicesOverview />
        <Calculators />
        <BrokerComparison />
        <NewsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
