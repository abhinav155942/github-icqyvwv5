
import { useState, useEffect, useCallback } from 'react';
import { Conversation, ChatMessage } from '@/types/chat';

export const useChatHistory = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);

  // Load conversations from localStorage on mount
  useEffect(() => {
    const savedConversations = localStorage.getItem('chatConversations');
    if (savedConversations) {
      try {
        const parsed = JSON.parse(savedConversations);
        setConversations(parsed);
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
  }, []);

  // Save conversations to localStorage whenever they change
  useEffect(() => {
    if (conversations.length > 0) {
      localStorage.setItem('chatConversations', JSON.stringify(conversations));
    }
  }, [conversations]);

  const saveConversation = useCallback((messages: ChatMessage[]) => {
    if (messages.length <= 1) return; // Don't save if only greeting message

    const conversationId = currentConversationId || `conv-${Date.now()}`;
    const title = messages.find(msg => msg.role === 'user')?.content.slice(0, 30) + '...' || 'New Conversation';
    
    const conversation: Conversation = {
      id: conversationId,
      title,
      lastActivity: Date.now(),
      messages
    };

    setConversations(prev => {
      const existingIndex = prev.findIndex(conv => conv.id === conversationId);
      if (existingIndex >= 0) {
        // Update existing conversation
        const updated = [...prev];
        updated[existingIndex] = conversation;
        return updated.sort((a, b) => b.lastActivity - a.lastActivity);
      } else {
        // Add new conversation
        return [conversation, ...prev].sort((a, b) => b.lastActivity - a.lastActivity);
      }
    });
    
    setCurrentConversationId(conversationId);
  }, [currentConversationId]);

  const loadConversation = (conversationId: string): ChatMessage[] => {
    const conversation = conversations.find(conv => conv.id === conversationId);
    if (conversation) {
      setCurrentConversationId(conversationId);
      return conversation.messages;
    }
    return [];
  };

  const deleteConversation = (conversationId: string) => {
    setConversations(prev => prev.filter(conv => conv.id !== conversationId));
    if (currentConversationId === conversationId) {
      setCurrentConversationId(null);
    }
  };

  const getConversationContext = (currentMessage: string): string => {
    // Get the 3 most recent conversations for context
    const recentConversations = conversations
      .slice(0, 3)
      .filter(conv => conv.messages.length > 1);

    if (recentConversations.length === 0) return '';

    let contextSummary = '\n\nPrevious conversation context:\n';
    
    recentConversations.forEach((conv, index) => {
      const userMessages = conv.messages.filter(msg => msg.role === 'user');
      const assistantMessages = conv.messages.filter(msg => msg.role === 'assistant');
      
      if (userMessages.length > 0 && assistantMessages.length > 0) {
        contextSummary += `\nConversation ${index + 1} (${new Date(conv.lastActivity).toLocaleDateString()}):\n`;
        contextSummary += `User asked: ${userMessages[0].content.slice(0, 100)}${userMessages[0].content.length > 100 ? '...' : ''}\n`;
        contextSummary += `You responded: ${assistantMessages[0].content.slice(0, 100)}${assistantMessages[0].content.length > 100 ? '...' : ''}\n`;
      }
    });

    return contextSummary;
  };

  const startNewConversation = () => {
    setCurrentConversationId(null);
    return [{
      id: 'initial-greeting',
      role: 'assistant' as const,
      content: "Hello! I'm Exemate, your AI assistant. I can help you learn about our AI-powered solutions including sales funnels, intelligent chatbots, and viral content creation. How can I assist you today?",
      timestamp: Date.now()
    }];
  };

  return {
    conversations,
    currentConversationId,
    saveConversation,
    loadConversation,
    deleteConversation,
    startNewConversation,
    getConversationContext
  };
};
