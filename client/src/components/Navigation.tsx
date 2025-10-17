import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const forexLinks = [
  { title: "Understanding Pips & Spreads", description: "Learn the basics of forex trading", href: "/forex#pips" },
  { title: "Live Market Data", description: "Real-time forex pair analysis", href: "/forex#market-data" },
  { title: "Trading Strategies", description: "Proven forex trading techniques", href: "/forex#strategies" },
  { title: "Broker Reviews", description: "Compare top forex brokers", href: "/forex#brokers" },
];

const cryptoLinks = [
  { title: "Blockchain Basics", description: "Introduction to cryptocurrency", href: "/crypto#basics" },
  { title: "Live Crypto Prices", description: "Real-time market tracking", href: "/crypto#prices" },
  { title: "Trading Strategies", description: "Day trading to HODLing", href: "/crypto#strategies" },
  { title: "Exchange Reviews", description: "Best crypto exchanges compared", href: "/crypto#exchanges" },
];

const propFirmLinks = [
  { title: "What Are Prop Firms?", description: "Understand funded trading", href: "/prop-firms#what" },
  { title: "Evaluating Firms", description: "Selection criteria & guidance", href: "/prop-firms#evaluate" },
  { title: "Risk Management", description: "Performance tracking tools", href: "/prop-firms#risk" },
  { title: "Firm Reviews", description: "Top proprietary trading firms", href: "/prop-firms#reviews" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Africanpips
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="nav-forex" className="font-medium">
                    Forex Trading
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {forexLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate"
                              data-testid={`nav-link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="text-sm font-semibold leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="nav-crypto" className="font-medium">
                    Cryptocurrency
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {cryptoLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate"
                              data-testid={`nav-link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="text-sm font-semibold leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="nav-prop-firms" className="font-medium">
                    Prop Firms
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {propFirmLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate"
                              data-testid={`nav-link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="text-sm font-semibold leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/tools">
                    <Button
                      variant="ghost"
                      className="font-medium"
                      data-testid="nav-tools"
                    >
                      Tools
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild data-testid="button-login">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild data-testid="button-get-started">
              <Link href="#newsletter">Get Started</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-6 space-y-4">
            <Link href="/forex" className="block px-3 py-2 rounded-md hover-elevate">
              <div className="font-semibold">Forex Trading</div>
              <p className="text-sm text-muted-foreground">Learn forex strategies and analysis</p>
            </Link>
            <Link href="/crypto" className="block px-3 py-2 rounded-md hover-elevate">
              <div className="font-semibold">Cryptocurrency</div>
              <p className="text-sm text-muted-foreground">Master crypto trading fundamentals</p>
            </Link>
            <Link href="/prop-firms" className="block px-3 py-2 rounded-md hover-elevate">
              <div className="font-semibold">Prop Firms</div>
              <p className="text-sm text-muted-foreground">Get funded and trade professionally</p>
            </Link>
            <Link href="/tools" className="block px-3 py-2 rounded-md hover-elevate">
              <div className="font-semibold">Tools</div>
              <p className="text-sm text-muted-foreground">Calculators and trading resources</p>
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="ghost" asChild className="w-full">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="#newsletter">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
