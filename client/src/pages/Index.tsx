
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import CoachServices from "@/components/CoachServices";
import CreatorServices from "@/components/CreatorServices";
import EcommerceServices from "@/components/EcommerceServices";
import CoachBenefits from "@/components/CoachBenefits";
import CreatorBenefits from "@/components/CreatorBenefits";
import EcommerceBenefits from "@/components/EcommerceBenefits";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import UserTypeSelector from "@/components/UserTypeSelector";
import RecommendationPopup from "@/components/RecommendationPopup";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [userType, setUserType] = useState<string>("");
  const [showUserTypeSelector, setShowUserTypeSelector] = useState(true);

  useEffect(() => {
    // Check if user type is already saved
    const savedUserType = localStorage.getItem('userType');
    if (savedUserType) {
      setUserType(savedUserType);
      setShowUserTypeSelector(false);
    }
  }, []);

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
    setShowUserTypeSelector(false);
    // Save user type to localStorage
    localStorage.setItem('userType', type);
  };

  const renderServices = () => {
    switch(userType) {
      case "coach":
        return <CoachServices />;
      case "creator":
        return <CreatorServices />;
      case "ecommerce":
        return <EcommerceServices />;
      default:
        return <CoachServices />; // Default fallback
    }
  };

  const renderBenefits = () => {
    switch(userType) {
      case "coach":
        return <CoachBenefits />;
      case "creator":
        return <CreatorBenefits />;
      case "ecommerce":
        return <EcommerceBenefits />;
      default:
        return <CoachBenefits />; // Default fallback
    }
  };

  return (
    <div className="min-h-screen">
      <UserTypeSelector 
        open={showUserTypeSelector} 
        onSelect={handleUserTypeSelect} 
      />
      <RecommendationPopup userType={userType} />
      <Hero />
      {renderServices()}
      {renderBenefits()}
      <Process />
      <ContactForm userType={userType} />
      <FAQ />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
