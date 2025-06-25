interface ContactFormData {
  userType: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? window.location.origin 
  : 'http://localhost:3001';

export class ApiClient {
  private static async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}/api${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  static async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    return this.request<ApiResponse>('/contact/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async testWebhook(data: any): Promise<ApiResponse> {
    return this.request<ApiResponse>('/webhook/test', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.request<{ status: string; timestamp: string }>('/health');
  }
}