
import { useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { ChatMessage } from "@/types/chat";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onLinkClick: (url: string, isInternal?: boolean) => void;
}

const ChatMessages = ({ messages, isLoading, onLinkClick }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-grow overflow-y-auto p-4 space-y-4 max-h-[calc(28rem-4rem)] bg-white/30"> {/* Added slight bg to message area */}
      {messages.map((message, index) => (
        <div key={message.id || index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-xs md:max-w-sm p-3 rounded-xl shadow-lg ${ // Increased rounding and shadow
            message.role === 'user' 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white saturate-150' // Saturate user message gradient
              : 'bg-gray-100 text-gray-800'
          }`}>
            <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
            {message.links && message.links.length > 0 && (
              <div className="mt-2 space-y-1">
                {message.links.map((link, linkIndex) => (
                  <button
                    key={linkIndex}
                    onClick={() => onLinkClick(link.url, link.isInternal)}
                    className={`flex items-center text-xs hover:underline disabled:opacity-70 ${
                      message.role === 'user' ? 'text-blue-200 hover:text-blue-50' : 'text-blue-500 hover:text-blue-700' // Differentiate link colors
                    }`}
                    disabled={isLoading}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    {link.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-xl shadow-lg"> {/* Matched rounding and shadow */}
            <div className="flex space-x-1 items-center justify-center h-6">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
