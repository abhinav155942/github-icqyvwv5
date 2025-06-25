import { useState, useEffect } from 'react';

interface SubmissionData {
  name: string;
  email: string;
  phone: string;
  business: string;
  coachingNiche: string;
  otherNiche?: string;
  monthlyRevenue: string;
  currentChallenges: string;
  services: string[];
  serviceConfigs?: Record<string, any>;
  files?: any[];
  links?: any[];
  totalCost: number;
  userType: string;
}

interface ExistingSubmission {
  id: number;
  services: string[];
  totalCost: number;
  submittedAt: string;
}

export const useDatabaseSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [existingSubmission, setExistingSubmission] = useState<ExistingSubmission | null>(null);
  const [hasSubmission, setHasSubmission] = useState(false);

  const checkExistingSubmission = async (email: string) => {
    if (!email || !email.includes('@')) return;
    
    // Debounce API calls to prevent spam
    const debounceKey = `email-check-${email}`;
    if (window[debounceKey]) {
      clearTimeout(window[debounceKey]);
    }
    
    window[debounceKey] = setTimeout(async () => {
      try {
        const response = await fetch(`/api/contact-submission?email=${encodeURIComponent(email)}`);
        const data = await response.json();
        
        if (data.hasSubmission && data.submission) {
          setExistingSubmission(data.submission);
          setHasSubmission(true);
        } else {
          setHasSubmission(false);
          setExistingSubmission(null);
        }
      } catch (error) {
        console.error('Error checking existing submission:', error);
      }
    }, 500); // 500ms debounce
  };

  const submitToDatabase = async (submissionData: SubmissionData) => {
    setIsSubmitting(true);
    setSubmitAttempts(prev => prev + 1);

    try {
      const response = await fetch('/api/contact-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setHasSubmission(true);
        setExistingSubmission({
          id: result.submissionId,
          services: submissionData.services,
          totalCost: submissionData.totalCost,
          submittedAt: new Date().toISOString()
        });
        return { success: true, message: result.message };
      } else {
        return { success: false, error: result.error || 'Submission failed' };
      }
    } catch (error) {
      console.error('Database submission error:', error);
      return { success: false, error: 'Network error occurred' };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitAttempts,
    hasSubmission,
    existingSubmission,
    submitToDatabase,
    checkExistingSubmission
  };
};