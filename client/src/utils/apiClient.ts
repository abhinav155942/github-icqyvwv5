interface ContactFormData {
  userType: string;
  name: string;
  email: string;
  phone?: string;
  message?: string | object;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Use relative paths to work with both dev and production
const API_BASE_URL = window.location.protocol === 'http:' && window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : window.location.origin;

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

    console.log('API request to:', url);
    console.log('Request options:', defaultOptions);

    try {
      const response = await fetch(url, defaultOptions);
      
      console.log('API response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || `HTTP ${response.status}: ${response.statusText}`;
        console.error('API error response:', errorData);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('API response data:', data);
      return data;
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