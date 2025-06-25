
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

interface ChallengesSectionProps {
  currentChallenges: string;
  onUpdate: (value: string) => void;
  isSubmitting: boolean;
}

export const ChallengesSection = ({ currentChallenges, onUpdate, isSubmitting }: ChallengesSectionProps) => {
  return (
    <div className="bg-white/60 rounded-2xl p-6 border border-purple-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <MessageSquare className="h-5 w-5 mr-2 text-purple-600" />
        Tell Us About Your Goals
      </h3>
      <div>
        <Label htmlFor="challenges" className="text-gray-700 font-medium flex items-center">
          Current Challenges &amp; Goals (Please be specific) <span className="text-red-500 ml-1">*</span>
        </Label>
        <Textarea
          id="challenges"
          name="challenges"
          value={currentChallenges}
          onChange={(e) => onUpdate(e.target.value)}
          className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 min-h-[140px] rounded-xl"
          placeholder="Tell us about your biggest challenges in lead generation, client communication, content creation, etc. What would success look like for you?"
          required
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};
