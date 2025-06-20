import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail, generateConfirmationEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Contact form submission endpoint
  app.post("/api/contact-submission", async (req: Request, res: Response) => {
    try {
      const {
        name,
        email,
        phone,
        business,
        coachingNiche,
        otherNiche,
        monthlyRevenue,
        currentChallenges,
        services,
        serviceConfigs,
        files,
        links,
        totalCost,
        userType
      } = req.body;

      // Validate required fields
      if (!name || !email || !phone || !business || !coachingNiche || !monthlyRevenue || !currentChallenges || !services || !userType) {
        return res.status(400).json({ 
          success: false, 
          error: "Missing required fields" 
        });
      }

      // Save to database
      const submission = await storage.createContactSubmission({
        name,
        email,
        phone,
        business,
        coachingNiche,
        otherNiche: otherNiche || null,
        monthlyRevenue,
        currentChallenges,
        services,
        serviceConfigs: serviceConfigs || null,
        files: files || null,
        links: links || null,
        totalCost: totalCost || 0,
        userType
      });

      // Send notification to n8n webhook
      try {
        const webhookUrl = "https://stacksinfo.app.n8n.cloud/webhook/3a6e5602-b960-4820-89e8-5efc7fdc19a3";
        const webhookParams = new URLSearchParams({
          name,
          email,
          phone,
          business,
          coachingNiche,
          monthlyRevenue,
          currentChallenges,
          services: services.join(', '),
          totalCost: totalCost.toString(),
          userType,
          submissionId: submission.id.toString(),
          timestamp: new Date().toISOString()
        });

        const webhookResponse = await fetch(`${webhookUrl}?${webhookParams}`, {
          method: 'GET',
          headers: {
            'User-Agent': 'AI Coach Growth Suite',
          }
        });

        console.log(`n8n webhook called: ${webhookResponse.status}`);
      } catch (webhookError) {
        console.error("Failed to notify n8n webhook:", webhookError);
        // Don't fail the submission if webhook fails
      }

      // Send confirmation email
      try {
        const emailContent = generateConfirmationEmail(name, services, totalCost);
        const emailSent = await sendEmail({
          to: email,
          from: "noreply@aicoachgrowthsuite.com", // Replace with your verified sender email
          subject: emailContent.subject,
          html: emailContent.html,
          text: emailContent.text
        });

        if (emailSent) {
          await storage.markEmailSent(submission.id);
        }
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't fail the submission if email fails
      }

      res.json({ 
        success: true, 
        submissionId: submission.id,
        message: "Your request has been received. We'll get back to you within 24-48 hours!"
      });

    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to process submission" 
      });
    }
  });

  // Check if user has existing submission (updated to work with query params)
  app.get("/api/contact-submission", async (req: Request, res: Response) => {
    try {
      const { email } = req.query;
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Email parameter required' });
      }
      
      const submission = await storage.getContactSubmissionByEmail(email);
      
      res.json({ 
        hasSubmission: !!submission,
        submission: submission ? {
          id: submission.id,
          services: submission.services,
          totalCost: submission.totalCost,
          submittedAt: submission.submittedAt
        } : null
      });
    } catch (error) {
      console.error("Error checking submission:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to check submission status" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  });

  return httpServer;
}
