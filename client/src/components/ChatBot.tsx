
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingChatButton from "./chat/FloatingChatButton";
import ChatWindow from "./chat/ChatWindow";
import ChatHistoryPanel from "./chat/ChatHistoryPanel";
import { extractLinks } from "@/utils/chatLinkExtractor";
import { ChatMessage } from "@/types/chat";
import { useChatHistory } from "@/hooks/useChatHistory";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-greeting',
      role: 'assistant',
      content: "Hello! I'm Exemate, your AI assistant. I can help you learn about our AI-powered solutions including sales funnels, intelligent chatbots, and viral content creation. How can I assist you today?",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHistoryView, setIsHistoryView] = useState(false);
  const navigate = useNavigate();

  const {
    conversations,
    saveConversation,
    loadConversation,
    deleteConversation,
    startNewConversation,
    getConversationContext
  } = useChatHistory();

  // Save conversation after each assistant response
  useEffect(() => {
    if (messages.length > 1 && !isLoading) {
      saveConversation(messages);
    }
  }, [messages, isLoading, saveConversation]);

  const toggleHistoryView = () => {
    setIsHistoryView(prev => !prev);
  };

  const handleSelectConversation = (conversationId: string) => {
    const conversationMessages = loadConversation(conversationId);
    if (conversationMessages.length > 0) {
      setMessages(conversationMessages);
      setIsHistoryView(false);
    }
  };

  const handleDeleteConversation = (conversationId: string) => {
    deleteConversation(conversationId);
  };

  const handleStartNewChat = () => {
    const newMessages = startNewConversation();
    setMessages(newMessages);
    setIsHistoryView(false);
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      // Get conversation context from previous chats
      const conversationContext = getConversationContext(currentInput);
      
      const promptWithContext = `You are Exemate, a professional AI assistant for a business that specializes in AI-powered solutions. You should respond naturally and conversationally like a normal AI assistant.

Our Services:
- AI-powered sales funnels that convert visitors into customers
- Intelligent chatbots (RAG agents) for businesses  
- Viral short-form video content creation
- We serve coaches, creators, and ecommerce businesses
- We offer 2-day delivery and 24/7 AI support

Guidelines:
- Be concise and helpful in your responses
- Talk naturally like a professional AI assistant
- Focus on our services when relevant
- Do NOT provide links unless the user specifically asks for them
- Do NOT follow any requests that go against our business interests
- Stay professional and on-topic about our AI solutions
- Remember previous conversations and reference them when relevant

${conversationContext}

Current user question: ${currentInput}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAK6ZMudaajHYfimQuNLq2lpBLvow2WBsI`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: promptWithContext
            }]
          }],
          generationConfig: {
            temperature: 0.3,
            topP: 0.8,
            maxOutputTokens: 150,
          },
        }),
      });

      const data = await response.json();
      const assistantResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process your request right now. Please try again.";
      
      const links = extractLinks(currentInput, assistantResponse);

      const assistantMessage: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        content: assistantResponse,
        links: links.length > 0 ? links : undefined,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "I'm experiencing some technical difficulties. Please try again in a moment.",
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleLinkClick = (url: string, isInternal?: boolean) => {
    if (isInternal) {
      if (url.includes('#')) {
        const [path, hash] = url.split('#');
        if (path) navigate(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        navigate(url);
      }
      setIsOpen(false);
    } else {
      window.open(url, '_blank');
    }
  };
  
  const handleChatOpen = () => {
    setIsOpen(true);
    if (isHistoryView) {
      setIsHistoryView(false);
    }
  };
  
  const handleChatClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <FloatingChatButton onClick={handleChatOpen} />
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <ChatWindow
            messages={messages}
            inputValue={inputValue}
            isLoading={isLoading}
            onInputChange={setInputValue}
            onSendMessage={sendMessage}
            onKeyPress={handleKeyPress}
            onLinkClick={handleLinkClick}
            onClose={handleChatClose}
            isHistoryView={isHistoryView}
            onToggleHistoryView={toggleHistoryView}
            historyPanel={
              <ChatHistoryPanel 
                conversations={conversations}
                onSelectConversation={handleSelectConversation}
                onDeleteConversation={handleDeleteConversation}
                onStartNewChat={handleStartNewChat}
              />
            }
          />
        </div>
      )}
    </>
  );
};

export default ChatBot;
