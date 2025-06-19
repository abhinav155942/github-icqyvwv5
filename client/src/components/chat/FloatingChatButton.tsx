
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { SoundEffects } from "@/utils/soundEffects";

interface FloatingChatButtonProps {
  onClick: () => void;
}

const FloatingChatButton = ({ onClick }: FloatingChatButtonProps) => {
  const handleClick = () => {
    SoundEffects.playClick();
    onClick();
  };

  const handleHover = () => {
    SoundEffects.playHover();
  };

  return (
    <Button
      onClick={handleClick}
      onMouseEnter={handleHover}
      className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 saturate-150"
    >
      <Bot className="h-8 w-8 text-white" />
    </Button>
  );
};

export default FloatingChatButton;
