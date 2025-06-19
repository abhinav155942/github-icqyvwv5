
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isLoading: boolean;
}

const ChatInput = ({ value, onChange, onSend, onKeyPress, isLoading }: ChatInputProps) => {
  return (
    <div className="border-t p-4 bg-white/50 rounded-b-2xl"> {/* Added rounding to match window and slight bg */}
      <div className="flex space-x-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask me anything..."
          className="flex-1 rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500" // Increased rounding for input
          disabled={isLoading}
        />
        <Button
          onClick={onSend}
          disabled={!value.trim() || isLoading}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 saturate-150 transform transition-transform hover:scale-110 hover:-translate-y-0.5" // Saturate gradient and add hover effect
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
