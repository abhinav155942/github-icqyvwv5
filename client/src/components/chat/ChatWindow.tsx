
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, X, History } from "lucide-react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { ChatMessage } from "@/types/chat";

interface ChatWindowProps {
  messages: ChatMessage[];
  inputValue: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onLinkClick: (url: string, isInternal?: boolean) => void;
  onClose: () => void;
  isHistoryView: boolean;
  onToggleHistoryView: () => void;
  historyPanel: React.ReactNode;
}

const ChatWindow = ({
  messages,
  inputValue,
  isLoading,
  onInputChange,
  onSendMessage,
  onKeyPress,
  onLinkClick,
  onClose,
  isHistoryView,
  onToggleHistoryView,
  historyPanel
}: ChatWindowProps) => {
  return (
    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl transform transition-all duration-300 hover:scale-[1.005]"> {/* Increased rounding, subtle hover scale */}
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-2xl saturate-150"> {/* Match rounding, saturate gradient */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-6 w-6 mr-2" />
            <CardTitle className="text-lg">Exemate</CardTitle>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleHistoryView}
              className="text-white hover:bg-white/20 transform transition-transform hover:scale-110 hover:-translate-y-0.5" // Added hover effect
              title="View chat history"
            >
              <History className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 transform transition-transform hover:scale-110 hover:-translate-y-0.5" // Added hover effect
              title="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 h-[28rem] flex flex-col">
        {isHistoryView ? (
          <div className="flex-grow overflow-y-auto rounded-b-2xl bg-white/30"> {/* Added rounding and slight bg for history view consistency */}
            {historyPanel}
          </div>
        ) : (
          <>
            <ChatMessages 
              messages={messages}
              isLoading={isLoading}
              onLinkClick={onLinkClick}
            />
            <ChatInput
              value={inputValue}
              onChange={onInputChange}
              onSend={onSendMessage}
              onKeyPress={onKeyPress}
              isLoading={isLoading}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatWindow;
