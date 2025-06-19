
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, Users, Video, ShoppingCart } from "lucide-react";

interface UserTypeSelectorProps {
  open: boolean;
  onSelect: (userType: string) => void;
}

const UserTypeSelector = ({ open, onSelect }: UserTypeSelectorProps) => {
  const userTypes = [
    {
      id: "coach",
      title: "Coach or Consultant",
      description: "Life coach, business coach, consultant, or any coaching service",
      icon: User,
      color: "purple"
    },
    {
      id: "creator",
      title: "Content Creator",
      description: "YouTuber, influencer, podcaster, or content producer",
      icon: Video,
      color: "pink"
    },
    {
      id: "ecommerce",
      title: "E-commerce Business",
      description: "Online store, product seller, or e-commerce entrepreneur",
      icon: ShoppingCart,
      color: "blue"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-2xl [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold text-gray-800 mb-2">
            Welcome! What Best Describes You?
          </DialogTitle>
          <p className="text-center text-gray-600 text-lg">
            Help us customize your experience by selecting your business type
          </p>
        </DialogHeader>
        
        <div className="grid gap-4 py-6">
          {userTypes.map((type) => (
            <Button
              key={type.id}
              variant="outline"
              className="h-auto p-6 text-left hover:shadow-lg transition-all duration-300 border-2"
              onClick={() => onSelect(type.id)}
            >
              <div className="flex items-start space-x-4 w-full">
                <div className={`p-3 rounded-full bg-${type.color}-100`}>
                  <type.icon className={`h-6 w-6 text-${type.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserTypeSelector;
