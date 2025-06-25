// Local Storage Manager for Contact Form Submissions
export interface SubmissionData {
  id: string;
  timestamp: string;
  data: any;
  status: 'pending' | 'success' | 'failed';
  error?: string;
  response?: string;
}

export class LocalStorageManager {
  private static readonly SUBMISSIONS_KEY = 'contact_submissions';
  private static readonly FORM_DRAFT_KEY = 'contact-form-draft';

  // Get all submissions from local storage
  static getSubmissions(): SubmissionData[] {
    try {
      const submissions = localStorage.getItem(this.SUBMISSIONS_KEY);
      return submissions ? JSON.parse(submissions) : [];
    } catch (error) {
      console.error('Error reading submissions from local storage:', error);
      return [];
    }
  }

  // Save a new submission to local storage
  static saveSubmission(submission: SubmissionData): void {
    try {
      const submissions = this.getSubmissions();
      submissions.push(submission);
      localStorage.setItem(this.SUBMISSIONS_KEY, JSON.stringify(submissions));
    } catch (error) {
      console.error('Error saving submission to local storage:', error);
    }
  }

  // Update submission status
  static updateSubmissionStatus(submissionId: string, status: 'pending' | 'success' | 'failed', error?: string, response?: string): void {
    try {
      const submissions = this.getSubmissions();
      const submission = submissions.find(s => s.id === submissionId);
      if (submission) {
        submission.status = status;
        if (error) submission.error = error;
        if (response) submission.response = response;
        localStorage.setItem(this.SUBMISSIONS_KEY, JSON.stringify(submissions));
      }
    } catch (error) {
      console.error('Error updating submission status:', error);
    }
  }

  // Get failed submissions for retry
  static getFailedSubmissions(): SubmissionData[] {
    return this.getSubmissions().filter(s => s.status === 'failed');
  }

  // Clear old submissions (older than 30 days)
  static cleanupOldSubmissions(): void {
    try {
      const submissions = this.getSubmissions();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const filteredSubmissions = submissions.filter(s => 
        new Date(s.timestamp) > thirtyDaysAgo
      );
      
      localStorage.setItem(this.SUBMISSIONS_KEY, JSON.stringify(filteredSubmissions));
    } catch (error) {
      console.error('Error cleaning up old submissions:', error);
    }
  }

  // Get form draft from local storage
  static getFormDraft(): any {
    try {
      const draft = localStorage.getItem(this.FORM_DRAFT_KEY);
      return draft ? JSON.parse(draft) : null;
    } catch (error) {
      console.error('Error reading form draft:', error);
      return null;
    }
  }

  // Save form draft to local storage
  static saveFormDraft(formData: any, links: any[]): void {
    try {
      const draftData = {
        formData,
        links,
        timestamp: Date.now()
      };
      localStorage.setItem(this.FORM_DRAFT_KEY, JSON.stringify(draftData));
    } catch (error) {
      console.error('Error saving form draft:', error);
    }
  }

  // Clear form draft
  static clearFormDraft(): void {
    try {
      localStorage.removeItem(this.FORM_DRAFT_KEY);
    } catch (error) {
      console.error('Error clearing form draft:', error);
    }
  }

  // Generate unique submission ID
  static generateSubmissionId(): string {
    return `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}