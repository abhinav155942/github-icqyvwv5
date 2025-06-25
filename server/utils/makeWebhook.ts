interface WebhookPayload {
  userType: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source: string;
  timestamp: string;
}

interface WebhookResponse {
  success: boolean;
  error?: string;
}

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/e0avjappx2co9oc9hwt6gb53oj42sjbm';

export async function sendToMakeWebhook(payload: WebhookPayload): Promise<WebhookResponse> {
  try {
    console.log('Sending to Make.com webhook:', { ...payload, message: payload.message?.substring(0, 50) + '...' });

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'AI-Coach-Suite/1.0'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.text();
    console.log('Make.com webhook response:', result);

    return { success: true };

  } catch (error) {
    console.error('Make.com webhook error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}