export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateContactForm(data: any): ValidationResult {
  const errors: string[] = [];

  // Required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Email must be a valid email address');
    }
  }

  if (!data.userType || typeof data.userType !== 'string') {
    errors.push('User type is required');
  } else {
    const validUserTypes = ['coach', 'creator', 'ecommerce'];
    if (!validUserTypes.includes(data.userType)) {
      errors.push('User type must be one of: coach, creator, ecommerce');
    }
  }

  // Optional but validated if present
  if (data.phone && typeof data.phone === 'string') {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      errors.push('Phone number must be valid');
    }
  }

  if (data.message && typeof data.message === 'string' && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateWebhookData(data: any): ValidationResult {
  const errors: string[] = [];

  // Basic structure validation
  if (!data || typeof data !== 'object') {
    errors.push('Data must be an object');
    return { isValid: false, errors };
  }

  // Check for required fields in webhook
  if (data.name && typeof data.name !== 'string') {
    errors.push('Name must be a string');
  }

  if (data.email && typeof data.email !== 'string') {
    errors.push('Email must be a string');
  }

  if (data.userType && typeof data.userType !== 'string') {
    errors.push('User type must be a string');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}