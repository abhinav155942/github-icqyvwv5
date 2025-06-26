
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FormHeader } from "./contact-form/FormHeader";
import { FormCardHeader } from "./contact-form/FormCardHeader";
import { PersonalInfoSection } from "./contact-form/PersonalInfoSection";
import { BusinessInfoSection } from "./contact-form/BusinessInfoSection";
import { ServicesSection } from "./contact-form/ServicesSection";
import { ServiceConfigSection } from "./contact-form/ServiceConfigSection";
import { ChallengesSection } from "./contact-form/ChallengesSection";
import { FileUploadSection } from "./contact-form/FileUploadSection";
import { LinksSection } from "./contact-form/LinksSection";
import { FormFooter } from "./contact-form/FormFooter";
import { SuccessDialog } from "./contact-form/SuccessDialog";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import { SoundEffects } from "@/utils/soundEffects";
import { LocalStorageManager } from "@/utils/localStorageManager";


interface ContactFormProps {
  userType: string;
}

interface ServiceConfig {
  description: string;
  links: string[];
  platforms?: string[];
}

const ContactForm = ({ userType }: ContactFormProps) => {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showOtherNiche, setShowOtherNiche] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [serviceConfigs, setServiceConfigs] = useState<Record<string, ServiceConfig>>({});

  // Use custom hooks for enhanced functionality
  const {
    formData,
    files,
    links,
    setFiles,
    setLinks,
    updateFormData,
    clearSavedData,
    backupFormData
  } = useFormPersistence();


  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Free demo version - no cost calculation needed
    setTotalCost(0);
    
    // Initialize service configs for selected services
    formData.services.forEach(serviceId => {
      if (!serviceConfigs[serviceId]) {
        setServiceConfigs(prev => ({
          ...prev,
          [serviceId]: { description: '', links: [], platforms: [] }
        }));
      }
    });
  }, [formData.services]);

  // Simple form state - no external database checks needed

  // Calculate form completion percentage
  const calculateProgress = () => {
    let completedSections = 0;
    const totalSections = 6;

    if (formData.name && formData.email && formData.phone) completedSections++;
    if (formData.business && formData.coachingNiche && formData.monthlyRevenue) completedSections++;
    if (formData.services.length > 0) completedSections++;
    if (formData.currentChallenges) completedSections++;
    if (formData.services.length === 0 || formData.services.every(serviceId => 
      serviceConfigs[serviceId]?.description?.trim()
    )) completedSections++;
    if (files.length > 0 || links.length > 0) completedSections++;

    return Math.round((completedSections / totalSections) * 100);
  };

  const handleServiceToggle = (service: string) => {
    updateFormData({
      services: formData.services.includes(service) 
        ? formData.services.filter(s => s !== service)
        : [...formData.services, service]
    });
  };

  const handleServiceConfigChange = (serviceId: string, config: ServiceConfig) => {
    setServiceConfigs(prev => ({
      ...prev,
      [serviceId]: config
    }));
  };

  const handleNicheChange = (value: string) => {
    updateFormData({ coachingNiche: value });
    setShowOtherNiche(value === "other");
  };

  const validateServiceConfigs = () => {
    for (const serviceId of formData.services) {
      const config = serviceConfigs[serviceId];
      if (!config?.description?.trim()) {
        toast({
          title: "Configuration Required",
          description: `Please provide a description for the ${serviceId} service configuration.`,
          variant: "destructive",
        });
        return false;
      }
    }
    return true;
  };



  const validateRequiredFields = () => {
    const requiredFields = [
      { field: formData.name, name: 'Full Name' },
      { field: formData.email, name: 'Email Address' },
      { field: formData.phone, name: 'Phone Number' },
      { field: formData.business, name: 'Business Name' },
      { field: formData.coachingNiche, name: 'Category/Niche' },
      { field: formData.currentChallenges, name: 'Current Challenges' }
    ];

    // Check if "other" niche is selected and otherNiche is empty
    if (formData.coachingNiche === "other" && !formData.otherNiche?.trim()) {
      toast({
        title: "Missing Information",
        description: "Please specify your niche/category when 'Other' is selected.",
        variant: "destructive",
      });
      return false;
    }

    // Check if services are selected
    if (formData.services.length === 0) {
      toast({
        title: "Service Selection Required",
        description: "Please select at least one service to request your free demo.",
        variant: "destructive",
      });
      return false;
    }

    // Check required fields
    for (const { field, name } of requiredFields) {
      if (!field?.trim()) {
        toast({
          title: "Missing Information",
          description: `Please fill in the ${name} field.`,
          variant: "destructive",
        });
        return false;
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all required fields before submission
    if (!validateRequiredFields()) {
      setIsSubmitting(false);
      return;
    }

    if (formData.services.length > 0 && !validateServiceConfigs()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Debug: Log current form data
      console.log('Form submitted locally:', formData);
      console.log('Current files:', files);
      console.log('Current links:', links);
      console.log('Current serviceConfigs:', serviceConfigs);
      
      // Simulate form submission without any external calls
      setTimeout(() => {
        SoundEffects.playSuccess();
        setDemoSubmitted(true);
        clearSavedData();
        setShowSuccessDialog(true);
        
        toast({
          title: "Success!",
          description: "Your form has been submitted locally!",
        });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Unable to process your request. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = formData.services.length === 0;
  const progress = calculateProgress();

  return (
    <section id="contact-form" className="contact-form py-12 md:py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50" data-onboarding="contact-form">
      <div className="max-w-4xl mx-auto">
        <FormHeader 
          demoSubmitted={demoSubmitted}
          progress={progress}
        />

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-20"></div>
          <Card className="relative shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50"></div>
            
            <FormCardHeader 
              demoSubmitted={demoSubmitted}
              userType={userType}
              services={formData.services}
              totalCost={0}
              progress={progress}
            />
            
            <CardContent className="relative">
              <form onSubmit={handleSubmit} method="POST" encType="application/x-www-form-urlencoded" className="space-y-6 md:space-y-8">
                <PersonalInfoSection
                  formData={{ name: formData.name, email: formData.email, phone: formData.phone }}
                  onUpdate={updateFormData}
                  isSubmitting={isSubmitting}
                />

                <BusinessInfoSection
                  userType={userType}
                  formData={{
                    business: formData.business,
                    coachingNiche: formData.coachingNiche,
                    otherNiche: formData.otherNiche,
                    monthlyRevenue: formData.monthlyRevenue
                  }}
                  onUpdate={updateFormData}
                  showOtherNiche={showOtherNiche}
                  onNicheChange={handleNicheChange}
                  isSubmitting={isSubmitting}
                />

                <ServicesSection
                  userType={userType}
                  services={formData.services}
                  onServiceToggle={handleServiceToggle}
                  isSubmitting={isSubmitting}
                  showActualPrice={false}
                />

                {formData.services.map(serviceId => (
                  <ServiceConfigSection
                    key={serviceId}
                    serviceId={serviceId}
                    serviceName={
                      serviceId === 'chatbot' ? 'AI Assistant' :
                      serviceId === 'funnel' ? 'Sales Funnel' :
                      serviceId === 'video' ? 'Content Clips' : serviceId
                    }
                    isSelected={true}
                    config={serviceConfigs[serviceId] || { description: '', links: [], platforms: [] }}
                    onConfigChange={handleServiceConfigChange}
                  />
                ))}

                <ChallengesSection
                  currentChallenges={formData.currentChallenges}
                  onUpdate={(value) => updateFormData({ currentChallenges: value })}
                  isSubmitting={isSubmitting}
                />

                <div id="file-upload-section">
                  <FileUploadSection
                    files={files}
                    onFilesChange={setFiles}
                    isSubmitting={isSubmitting}
                  />
                </div>

                <LinksSection
                  links={links}
                  onLinksChange={setLinks}
                  isSubmitting={isSubmitting}
                />

                <FormFooter
                  isSubmitting={isSubmitting}
                  isPurchaseDisabled={isSubmitDisabled}
                  demoSubmitted={demoSubmitted}
                  totalCost={0}
                />
              </form>
            </CardContent>
          </Card>
        </div>

        <SuccessDialog 
          open={showSuccessDialog}
          onOpenChange={setShowSuccessDialog}
        />
      </div>
    </section>
  );
};

export default ContactForm;
