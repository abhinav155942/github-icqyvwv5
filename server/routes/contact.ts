import express from 'express';
import { validateContactForm } from '../utils/validation.js';
import { sendToMakeWebhook } from '../utils/makeWebhook.js';

const router = express.Router();

// Handle contact form submissions
router.post('/submit', async (req, res) => {
  try {
    // Validate form data
    const validation = validateContactForm(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        error: 'Invalid form data',
        details: validation.errors
      });
    }

    const { userType, name, email, phone, message } = req.body;

    // Log the submission
    console.log('Contact form submission:', {
      userType,
      name,
      email,
      phone,
      message: message?.substring(0, 100) + '...',
      timestamp: new Date().toISOString()
    });

    // Send to Make.com webhook
    const webhookResult = await sendToMakeWebhook({
      userType,
      name,
      email,
      phone,
      message,
      source: 'contact_form',
      timestamp: new Date().toISOString()
    });

    if (!webhookResult.success) {
      console.error('Failed to send to Make.com:', webhookResult.error);
      return res.status(500).json({
        error: 'Failed to process submission',
        message: 'Please try again later'
      });
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Server error',
      message: 'Please try again later'
    });
  }
});

export default router;