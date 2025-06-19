
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { MessageSquareText, Trash2 } from 'lucide-react';
import { Conversation } from '@/types/chat';

interface ChatHistoryPanelProps {
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
  onDeleteConversation: (id: string) => void;
  onStartNewChat: () => void;
}

const ChatHistoryPanel = ({ 
  conversations, 
  onSelectConversation, 
  onDeleteConversation,
  onStartNewChat 
}: ChatHistoryPanelProps) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="p-4 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Conversation History</h3>
      <ScrollArea className="flex-grow pr-2">
        <div className="space-y-2">
          {conversations.map((convo) => (
            <div
              key={convo.id}
              className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer border border-gray-200 transition-colors"
              onClick={() => onSelectConversation(convo.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{convo.title}</p>
                  <p className="text-xs text-gray-500">
                    {formatDate(convo.lastActivity)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-red-500 ml-2"
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    onDeleteConversation(convo.id); 
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          {conversations.length === 0 && (
             <div className="text-center py-10">
                <MessageSquareText className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No past conversations yet.</p>
                <p className="text-xs text-gray-400 mt-1">Start a new chat to see it here!</p>
            </div>
          )}
        </div>
      </ScrollArea>
      <Button 
        variant="outline" 
        className="w-full mt-4"
        onClick={onStartNewChat}
      >
        Start New Chat
      </Button>
    </div>
  );
};

export default ChatHistoryPanel;
