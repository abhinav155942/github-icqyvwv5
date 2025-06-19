import { pgTable, text, serial, integer, boolean, json, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  business: text("business").notNull(),
  coachingNiche: text("coaching_niche").notNull(),
  otherNiche: text("other_niche"),
  monthlyRevenue: text("monthly_revenue").notNull(),
  currentChallenges: text("current_challenges").notNull(),
  services: text("services").array().notNull().default(sql`'{}'::text[]`),
  serviceConfigs: json("service_configs"),
  files: json("files"),
  links: json("links"),
  totalCost: integer("total_cost").notNull().default(0),
  userType: text("user_type").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  emailSent: boolean("email_sent").default(false).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  business: true,
  coachingNiche: true,
  otherNiche: true,
  monthlyRevenue: true,
  currentChallenges: true,
  services: true,
  serviceConfigs: true,
  files: true,
  links: true,
  totalCost: true,
  userType: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
