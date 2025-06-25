import express from 'express';
import { storage } from '../storage.js';

const router = express.Router();

// Get all contact submissions
router.get('/submissions', async (req, res) => {
  try {
    const submissions = await storage.getAllContactSubmissions();
    res.json({
      success: true,
      data: submissions,
      count: submissions.length
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      error: 'Failed to fetch submissions',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get submission by ID
router.get('/submissions/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid submission ID' });
    }

    const submission = await storage.getContactSubmission(id);
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    res.json({
      success: true,
      data: submission
    });
  } catch (error) {
    console.error('Error fetching submission:', error);
    res.status(500).json({
      error: 'Failed to fetch submission',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get submissions by email
router.get('/submissions/email/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const submissions = await storage.getContactSubmissionByEmail(email);
    
    res.json({
      success: true,
      data: submissions,
      count: submissions.length
    });
  } catch (error) {
    console.error('Error fetching submissions by email:', error);
    res.status(500).json({
      error: 'Failed to fetch submissions',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get webhook logs
router.get('/webhooks', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit as string) || 100;
    const logs = await storage.getWebhookLogs(limit);
    
    res.json({
      success: true,
      data: logs,
      count: logs.length
    });
  } catch (error) {
    console.error('Error fetching webhook logs:', error);
    res.status(500).json({
      error: 'Failed to fetch webhook logs',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Analytics endpoints
router.get('/analytics/summary', async (req, res) => {
  try {
    const submissions = await storage.getAllContactSubmissions();
    const webhooks = await storage.getWebhookLogs(1000);
    
    const analytics = {
      totalSubmissions: submissions.length,
      submissionsToday: submissions.filter(s => {
        const today = new Date();
        const submissionDate = new Date(s.createdAt);
        return submissionDate.toDateString() === today.toDateString();
      }).length,
      submissionsThisWeek: submissions.filter(s => {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return new Date(s.createdAt) > weekAgo;
      }).length,
      submissionsByUserType: submissions.reduce((acc, s) => {
        acc[s.userType] = (acc[s.userType] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      submissionsByStatus: submissions.reduce((acc, s) => {
        acc[s.status] = (acc[s.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      totalWebhooks: webhooks.length,
      webhookSuccessRate: webhooks.length > 0 
        ? (webhooks.filter(w => w.success === 'true').length / webhooks.length * 100).toFixed(2)
        : '0'
    };
    
    res.json({
      success: true,
      data: analytics
    });
  } catch (error) {
    console.error('Error generating analytics:', error);
    res.status(500).json({
      error: 'Failed to generate analytics',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;