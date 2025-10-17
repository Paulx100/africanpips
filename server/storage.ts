import { type NewsletterSubscriber, type InsertNewsletterSubscriber } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined>;
  getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
}

export class MemStorage implements IStorage {
  private newsletterSubscribers: Map<string, NewsletterSubscriber>;

  constructor() {
    this.newsletterSubscribers = new Map();
  }

  async createNewsletterSubscriber(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const existingSubscriber = await this.getNewsletterSubscriberByEmail(insertSubscriber.email);
    if (existingSubscriber) {
      throw new Error("Email already subscribed");
    }

    const id = randomUUID();
    const subscriber: NewsletterSubscriber = {
      ...insertSubscriber,
      id,
      subscribedAt: new Date(),
    };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined> {
    return Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase(),
    );
  }

  async getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletterSubscribers.values());
  }
}

export const storage = new MemStorage();
