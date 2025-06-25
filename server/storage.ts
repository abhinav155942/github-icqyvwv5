import { 
  contactSubmissions, 
  webhookLogs, 
  userSessions,
  type ContactSubmission,
  type InsertContactSubmission,
  type WebhookLog,
  type InsertWebhookLog,
  type UserSession,
  type InsertUserSession
} from "../shared/schema.js";
import { db } from "./db.js";
import { eq, desc } from "drizzle-orm";

export class DatabaseStorage {
  // Contact Submissions
  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(data)
      .returning();
    return submission;
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    const [submission] = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id));
    return submission || undefined;
  }

  async getContactSubmissionByEmail(email: string): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.email, email))
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async updateContactSubmissionStatus(
    id: number, 
    status: string, 
    webhookResponse?: string, 
    webhookError?: string
  ): Promise<void> {
    await db
      .update(contactSubmissions)
      .set({
        status,
        webhookResponse,
        webhookError,
        webhookSent: webhookResponse ? new Date() : undefined,
        updatedAt: new Date()
      })
      .where(eq(contactSubmissions.id, id));
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  // Webhook Logs
  async logWebhook(data: InsertWebhookLog): Promise<WebhookLog> {
    const [log] = await db
      .insert(webhookLogs)
      .values(data)
      .returning();
    return log;
  }

  async getWebhookLogs(limit: number = 100): Promise<WebhookLog[]> {
    return await db
      .select()
      .from(webhookLogs)
      .orderBy(desc(webhookLogs.createdAt))
      .limit(limit);
  }

  // User Sessions
  async createUserSession(data: InsertUserSession): Promise<UserSession> {
    const [session] = await db
      .insert(userSessions)
      .values(data)
      .returning();
    return session;
  }

  async getUserSession(sessionId: string): Promise<UserSession | undefined> {
    const [session] = await db
      .select()
      .from(userSessions)
      .where(eq(userSessions.sessionId, sessionId));
    return session || undefined;
  }

  async updateUserSession(sessionId: string, data: Partial<InsertUserSession>): Promise<void> {
    await db
      .update(userSessions)
      .set({
        ...data,
        lastActivity: new Date()
      })
      .where(eq(userSessions.sessionId, sessionId));
  }
}

export const storage = new DatabaseStorage();