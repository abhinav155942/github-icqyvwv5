
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Users } from "lucide-react";

interface PersonalInfoSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  onUpdate: (updates: { name?: string; email?: string; phone?: string }) => void;
  isSubmitting: boolean;
}

export const PersonalInfoSection = ({ formData, onUpdate, isSubmitting }: PersonalInfoSectionProps) => {
  return (
    <div className="bg-white/60 rounded-2xl p-6 border border-purple-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <Users className="h-5 w-5 mr-2 text-purple-600" />
        Personal Information
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-gray-700 font-medium flex items-center">
            Full Name <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
            placeholder="Enter your full name"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-gray-700 font-medium flex items-center">
            Email Address <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
            placeholder="Enter your email"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="mt-6">
        <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center">
          Phone Number <span className="text-red-500 ml-1">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onUpdate({ phone: e.target.value })}
          className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
          placeholder="Enter your phone number (e.g., +1234567890)"
          pattern="^\+[1-9]\d{1,14}$"
          title="Please enter a valid phone number in international format (e.g., +1234567890)"
          required
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};
