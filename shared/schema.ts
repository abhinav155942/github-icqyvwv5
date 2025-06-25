import { pgTable, text, timestamp, serial, jsonb, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Contact submissions table
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  userType: varchar('user_type', { length: 50 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  business: varchar('business', { length: 255 }),
  coachingNiche: varchar('coaching_niche', { length: 100 }),
  otherNiche: varchar('other_niche', { length: 255 }),
  monthlyRevenue: varchar('monthly_revenue', { length: 50 }),
  currentChallenges: text('current_challenges'),
  selectedServices: jsonb('selected_services'), // Array of selected services
  serviceConfigs: jsonb('service_configs'), // Service configurations
  uploadedFiles: jsonb('uploaded_files'), // File metadata
  websiteLinks: jsonb('website_links'), // Website links and descriptions
  formData: jsonb('form_data'), // Complete form data backup
  submissionSource: varchar('submission_source', { length: 50 }).default('contact_form'),
  webhookSent: timestamp('webhook_sent'),
  webhookResponse: text('webhook_response'),
  webhookError: text('webhook_error'),
  status: varchar('status', { length: 20 }).default('pending'), // pending, sent, failed
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Webhook logs table for tracking all webhook activity
export const webhookLogs = pgTable('webhook_logs', {
  id: serial('id').primaryKey(),
  webhookType: varchar('webhook_type', { length: 50 }).notNull(), // 'incoming', 'outgoing'
  source: varchar('source', { length: 100 }), // 'make.com', 'contact_form', etc.
  endpoint: varchar('endpoint', { length: 255 }),
  method: varchar('method', { length: 10 }),
  headers: jsonb('headers'),
  payload: jsonb('payload'),
  response: jsonb('response'),
  statusCode: varchar('status_code', { length: 10 }),
  success: varchar('success', { length: 10 }).default('true'),
  error: text('error'),
  processingTime: varchar('processing_time', { length: 20 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// User sessions table for tracking user interactions
export const userSessions = pgTable('user_sessions', {
  id: serial('id').primaryKey(),
  sessionId: varchar('session_id', { length: 255 }).notNull().unique(),
  userType: varchar('user_type', { length: 50 }),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  referrer: text('referrer'),
  pageViews: jsonb('page_views'), // Array of page visits with timestamps
  formInteractions: jsonb('form_interactions'), // Form field interactions
  chatHistory: jsonb('chat_history'), // Chat messages if applicable
  conversionEvent: varchar('conversion_event', { length: 100 }), // 'form_submit', 'demo_request', etc.
  createdAt: timestamp('created_at').defaultNow().notNull(),
  lastActivity: timestamp('last_activity').defaultNow().notNull(),
});

// Relations
export const contactSubmissionsRelations = relations(contactSubmissions, ({ many }) => ({
  webhookLogs: many(webhookLogs),
}));

export const webhookLogsRelations = relations(webhookLogs, ({ one }) => ({
  contactSubmission: one(contactSubmissions),
}));

// Types
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;
export type WebhookLog = typeof webhookLogs.$inferSelect;
export type InsertWebhookLog = typeof webhookLogs.$inferInsert;
export type UserSession = typeof userSessions.$inferSelect;
export type InsertUserSession = typeof userSessions.$inferInsert;