import express from 'express';
import { validateWebhookData } from '../utils/validation.js';

const router = express.Router();

// Handle incoming webhooks from Make.com or other services
router.post('/receive', async (req, res) => {
  try {
    console.log('Webhook received:', {
      headers: req.headers,
      body: req.body,
      timestamp: new Date().toISOString()
    });

    // Validate incoming data
    const validation = validateWebhookData(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        error: 'Invalid webhook data',
        details: validation.errors
      });
    }

    // Process the webhook data
    const { userType, name, email, phone, message, source } = req.body;

    // Log the processed data (you can extend this to save to database)
    console.log('Processed webhook data:', {
      userType,
      name,
      email,
      phone,
      message,
      source,
      processedAt: new Date().toISOString()
    });

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Webhook processed successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({
      error: 'Failed to process webhook',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Handle test webhooks
router.post('/test', (req, res) => {
  console.log('Test webhook received:', req.body);
  res.json({
    success: true,
    message: 'Test webhook received',
    echo: req.body,
    timestamp: new Date().toISOString()
  });
});

export default router;