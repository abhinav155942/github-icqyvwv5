
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface WebhookData {
  [key: string]: any;
}

interface WebhookOptions {
  maxRetries?: number;
  retryDelay?: number;
  timeout?: number;
}

export const useWebhookSubmission = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempts, setSubmitAttempts] = useState(0);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const validateWebhookData = (data: WebhookData): boolean => {
    const required = ['name', 'email', 'currentChallenges'];
    const missing = required.filter(field => !data[field] || data[field].trim() === '');
    
    if (missing.length > 0) {
      toast({
        title: "Validation Error",
        description: `Please fill in required fields: ${missing.join(', ')}`,
        variant: "destructive",
      });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const submitToWebhook = async (
    webhookUrl: string, 
    data: WebhookData, 
    options: WebhookOptions = {}
  ) => {
    const { maxRetries = 3, timeout = 10000 } = options;
    let currentRetryDelay = options.retryDelay || 2000;
    
    if (!validateWebhookData(data)) {
      return { success: false, error: 'Validation failed' };
    }

    setIsSubmitting(true);
    
    // Convert data to plain text format for GET request
    const plainTextData = Object.entries(data)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}: ${value.join(', ')}`;
        }
        return `${key}: ${value}`;
      })
      .join('\n');

    // Create URL search params for GET request
    const params = new URLSearchParams();
    params.append('data', plainTextData);
    params.append('timestamp', new Date().toISOString());
    params.append('submissionId', `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

    const finalUrl = `${webhookUrl}?${params.toString()}`;

    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Webhook submission attempt ${attempt}/${maxRetries}:`, {
          url: webhookUrl,
          method: 'GET',
          dataLength: plainTextData.length
        });

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(finalUrl, {
          method: "GET",
          headers: {
            "Accept": "text/plain, application/json",
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const responseText = await response.text();
          console.log("Webhook success:", responseText);
          
          setSubmitAttempts(prev => prev + 1);
          setIsSubmitting(false);
          
          toast({
            title: "Success!",
            description: "Your information has been submitted successfully.",
          });

          return { success: true, response: responseText, attempt };
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

      } catch (error) {
        lastError = error as Error;
        console.error(`Webhook attempt ${attempt} failed:`, error);

        if (attempt < maxRetries) {
          console.log(`Retrying in ${currentRetryDelay}ms...`);
          await sleep(currentRetryDelay);
          // Exponential backoff
          currentRetryDelay *= 1.5;
        }
      }
    }

    setIsSubmitting(false);
    setSubmitAttempts(prev => prev + 1);

    // All attempts failed
    const errorMessage = lastError?.message || 'Unknown error occurred';
    
    toast({
      title: "Submission Failed",
      description: `Failed to submit after ${maxRetries} attempts. Please try again later or contact support.`,
      variant: "destructive",
    });

    return { 
      success: false, 
      error: errorMessage, 
      attempts: maxRetries,
      lastError 
    };
  };

  const submitToMultipleWebhooks = async (webhooks: string[], data: WebhookData) => {
    const results = await Promise.allSettled(
      webhooks.map(url => submitToWebhook(url, data))
    );

    const successful = results.filter(r => r.status === 'fulfilled' && r.value.success);
    const failed = results.filter(r => r.status === 'rejected' || !r.value.success);

    console.log(`Webhook results: ${successful.length} successful, ${failed.length} failed`);

    if (successful.length > 0) {
      toast({
        title: "Submission Successful",
        description: `Data submitted to ${successful.length} of ${webhooks.length} endpoints.`,
      });
      return { success: true, successful: successful.length, failed: failed.length };
    } else {
      toast({
        title: "All Submissions Failed",
        description: "Failed to submit to any webhook endpoint. Please try again.",
        variant: "destructive",
      });
      return { success: false, successful: 0, failed: failed.length };
    }
  };

  return {
    submitToWebhook,
    submitToMultipleWebhooks,
    isSubmitting,
    submitAttempts
  };
};
