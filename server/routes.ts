import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
      
      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to newsletter",
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid email address",
          errors: error.errors
        });
      }
      
      if (error instanceof Error && error.message === "Email already subscribed") {
        return res.status(409).json({
          success: false,
          message: "This email is already subscribed to our newsletter"
        });
      }
      
      console.error("Newsletter subscription error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to subscribe. Please try again later."
      });
    }
  });

  // Get all newsletter subscribers (for admin purposes)
  app.get("/api/newsletter/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      res.json({
        success: true,
        count: subscribers.length,
        subscribers: subscribers.map(s => ({
          id: s.id,
          email: s.email,
          subscribedAt: s.subscribedAt
        }))
      });
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch subscribers"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
