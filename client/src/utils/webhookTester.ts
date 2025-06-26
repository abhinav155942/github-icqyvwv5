// Webhook testing utility for Make.com integration
export const testWebhook = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+1234567890",
    business: "Test Business",
    coaching_niche: "Health & Wellness",
    monthly_revenue: "$5,000 - $10,000",
    current_challenges: "Need more leads and better conversion rates",
    selected_services: "AI Assistant, Sales Funnel Setup",
    user_type: "coach",
    submission_date: new Date().toLocaleDateString(),
    submission_time: new Date().toLocaleTimeString(),
    website_links: "Portfolio: https://example.com | LinkedIn: https://linkedin.com/in/test",
    uploaded_files: "resume.pdf, portfolio.zip",
    service_configurations: "AI Assistant: Custom chatbot for lead generation | Sales Funnel: Complete funnel with email automation"
  };

  const webhookUrl = "https://hook.us2.make.com/zgk94s652bfrodb93eudl9rjsiay0524";

  try {
    console.log('=== WEBHOOK TEST START ===');
    console.log('Testing webhook with data:', testData);
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
    console.log('Response body:', responseText);
    console.log('=== WEBHOOK TEST SUCCESS ===');
    
    return { success: true, status: response.status, body: responseText };
  } catch (error) {
    console.error('=== WEBHOOK TEST FAILED ===');
    console.error('Error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Make test function available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).testWebhook = testWebhook;
  console.log('Debug function available: testWebhook()');
}