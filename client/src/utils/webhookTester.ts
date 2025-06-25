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
    console.log('Testing webhook with data:', testData);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseText = await response.text();
    console.log('Webhook test response:', responseText);
    return { success: true, response: responseText };
  } catch (error) {
    console.error('Webhook test failed:', error);
    return { success: false, error };
  }
};

// Add test button to window for manual testing
if (typeof window !== 'undefined') {
  (window as any).testWebhook = testWebhook;
}