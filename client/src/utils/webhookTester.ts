// Webhook testing utility
export const testWebhook = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+1234567890",
    business: "Test Business",
    coaching_niche: "Health & Wellness",
    monthly_revenue: "$5,000 - $10,000",
    current_challenges: "Need more leads",
    selected_services: "AI Assistant, Sales Funnel",
    user_type: "coach",
    submission_timestamp: new Date().toISOString(),
    form_version: "webhook_test"
  };

  const webhookUrl = "https://hook.us2.make.com/e0avjappx2co9oc9hwt6gb53oj42sjbm";

  try {
    console.log('=== WEBHOOK TEST START ===');
    console.log('Testing webhook with data:', testData);
    console.log('JSON payload:', JSON.stringify(testData, null, 2));
    console.log('Webhook URL:', webhookUrl);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseText = await response.text();
    console.log('Webhook test response:', responseText);
    console.log('=== WEBHOOK TEST END ===');
    return { success: true, response: responseText };
  } catch (error) {
    console.error('Webhook test failed:', error);
    console.log('=== WEBHOOK TEST FAILED ===');
    return { success: false, error };
  }
};

// Enhanced form data inspector
export const inspectFormData = () => {
  const formElements = document.querySelectorAll('input, select, textarea');
  const formData = {};
  const missingNameAttributes = [];
  
  console.log('=== FORM DATA INSPECTION ===');
  formElements.forEach((element) => {
    const el = element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    
    // Check for missing name attributes
    if (!el.name && el.id) {
      missingNameAttributes.push(el.id);
    }
    
    if (el.name || el.id) {
      const key = el.name || el.id;
      const value = el.value;
      formData[key] = value;
      console.log(`${key}: "${value}" ${!el.name ? '(WARNING: Missing name attribute)' : ''}`);
    }
  });
  
  if (missingNameAttributes.length > 0) {
    console.warn('⚠️ Elements missing name attributes:', missingNameAttributes);
  }
  
  console.log('Complete form data object:', formData);
  console.log('=== END FORM DATA INSPECTION ===');
  return formData;
};

// Add test functions to window for manual testing
if (typeof window !== 'undefined') {
  (window as any).testWebhook = testWebhook;
  (window as any).inspectFormData = inspectFormData;
  console.log('Available debug functions:');
  console.log('- testWebhook() - Test webhook with sample data');
  console.log('- inspectFormData() - Inspect current form field values');
}