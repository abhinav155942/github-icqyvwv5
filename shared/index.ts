// Shared types and utilities
export interface UserType {
  id: string;
  name: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  userType: string;
  businessName?: string;
  businessStage?: string;
  monthlyRevenue?: string;
  currentChallenges?: string;
  goals?: string;
  timeline?: string;
  budget?: string;
  links?: Array<{
    url: string;
    description: string;
  }>;
  additionalInfo?: string;
}