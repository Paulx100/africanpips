import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Newsletter subscribers
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").notNull().defaultNow(),
});

export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({
  id: true,
  subscribedAt: true,
});

export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;

// Broker data type
export interface Broker {
  id: string;
  name: string;
  logo: string;
  rating: number;
  regulatedBy: string[];
  minDeposit: number;
  spreads: string;
  leverage: string;
  platforms: string[];
  website: string;
}

// Crypto Exchange data type
export interface CryptoExchange {
  id: string;
  name: string;
  logo: string;
  rating: number;
  tradingFees: string;
  security: string;
  coins: number;
  website: string;
}

// Prop Firm data type
export interface PropFirm {
  id: string;
  name: string;
  logo: string;
  rating: number;
  fundingAmount: string;
  profitSplit: string;
  evaluationFee: number;
  maxDrawdown: string;
  website: string;
}

// News Article data type
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: "Forex" | "Crypto" | "Prop Firms" | "African Markets";
  image: string;
  date: string;
  readTime: number;
  slug: string;
}

// Calculator input/output types
export interface PipCalculatorInput {
  currencyPair: string;
  accountCurrency: string;
  positionSize: number;
  pipMovement: number;
}

export interface PipCalculatorResult {
  pipValue: number;
  profitLoss: number;
  currency: string;
}

export interface ProfitLossCalculatorInput {
  entryPrice: number;
  exitPrice: number;
  positionSize: number;
  positionType: "long" | "short";
  currencyPair: string;
}

export interface ProfitLossCalculatorResult {
  profitLoss: number;
  percentage: number;
  pips: number;
  currency: string;
}
