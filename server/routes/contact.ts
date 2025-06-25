import express from 'express';
import { validateContactForm } from '../utils/validation.js';
import { sendToMakeWebhook } from '../utils/makeWebhook.js';
import { storage } from '../storage.js';

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
    
    // Parse message if it's JSON string (from frontend)
    let formData: any = {};
    try {
      if (typeof message === 'string' && message.startsWith('{')) {
        formData = JSON.parse(message);
      } else if (typeof message === 'object' && message !== null) {
        formData = message;
      }
    } catch (e) {
      console.warn('Could not parse message as JSON:', e);
    }

    // Save to database first
    const submission = await storage.createContactSubmission({
      userType,
      name,
      email,
      phone,
      business: formData.business || '',
      coachingNiche: formData.coaching_niche || '',
      otherNiche: formData.other_niche || '',
      monthlyRevenue: formData.monthly_revenue || '',
      currentChallenges: formData.current_challenges || '',
      selectedServices: formData.services_array || [],
      serviceConfigs: formData.service_configs || {},
      uploadedFiles: formData.uploaded_files || [],
      websiteLinks: formData.website_links || [],
      formData: formData,
      submissionSource: 'contact_form',
      status: 'pending'
    });

    console.log('Contact form submission saved:', {
      id: submission.id,
      userType,
      name,
      email,
      phone,
      timestamp: submission.createdAt
    });

    // Send to Make.com webhook
    const webhookResult = await sendToMakeWebhook({
      userType,
      name,
      email,
      phone,
      message: formData,
      source: 'contact_form',
      timestamp: new Date().toISOString(),
      submissionId: submission.id
    });

    // Update submission status based on webhook result
    if (webhookResult.success) {
      await storage.updateContactSubmissionStatus(
        submission.id, 
        'sent', 
        'Webhook sent successfully'
      );
    } else {
      await storage.updateContactSubmissionStatus(
        submission.id, 
        'failed', 
        undefined, 
        webhookResult.error
      );
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
      submissionId: submission.id,
      timestamp: submission.createdAt
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