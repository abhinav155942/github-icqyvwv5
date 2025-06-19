
export interface ChatMessage {
  id?: string; // Optional: for unique message identification
  role: 'user' | 'assistant';
  content: string;
  links?: Array<{ text: string; url: string; isInternal?: boolean }>;
  timestamp?: number; // Optional: for sorting or display
}

export interface Conversation {
  id: string;
  title: string; // e.g., first user message, or a timestamp
  lastActivity: number; // timestamp of the last message
  messages: ChatMessage[];
}
