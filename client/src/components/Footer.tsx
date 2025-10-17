import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    trading: {
      title: "Trading",
      links: [
        { label: "Forex Trading", href: "/forex" },
        { label: "Cryptocurrency", href: "/crypto" },
        { label: "Prop Firms", href: "/prop-firms" },
        { label: "Trading Tools", href: "/tools" },
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Market News", href: "/news" },
        { label: "Broker Reviews", href: "/forex#brokers" },
        { label: "Exchange Reviews", href: "/crypto#exchanges" },
        { label: "Trading Guides", href: "/guides" },
      ]
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/africanpips", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/africanpips", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/africanpips", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/africanpips", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/africanpips", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Africanpips
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering African traders with comprehensive education, real-time insights,
              and expert strategies for Forex, Crypto, and Prop Trading.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate transition-colors"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Africanpips. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Risk Warning:</strong> Trading Forex, Cryptocurrencies, and CFDs involves significant risk and may not be suitable for all investors.
            Past performance is not indicative of future results. Please ensure you fully understand the risks involved and seek independent advice if necessary.
          </p>
        </div>
      </div>
    </footer>
  );
}
