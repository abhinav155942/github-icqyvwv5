
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
import { useLoadingState } from "@/hooks/useLoadingState";

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
  const [hasUsedFreeDemo, setHasUsedFreeDemo] = useState(false);
  const { finishLoading } = useLoadingState({ 
    initialLoading: true, 
    minLoadingTime: 600 
  });

  // Use custom hooks for enhanced functionality
  const {
    formData,
    files,
    links,
    setFiles,
    setLinks,
    updateFormData,
    clearSavedData
  } = useFormPersistence();


  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already used their free demo
    const usedDemo = localStorage.getItem('hookai_demo_used');
    if (usedDemo) {
      setHasUsedFreeDemo(true);
    }

    // Simulate form loading and initialization
    const timer = setTimeout(() => {
      finishLoading();
    }, 400);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  useEffect(() => {
    // Calculate cost based on number of services selected and demo status
    const serviceCost = hasUsedFreeDemo ? formData.services.length * 300 : 0;
    setTotalCost(serviceCost);
    
    // Initialize service configs for selected services
    formData.services.forEach(serviceId => {
      if (!serviceConfigs[serviceId]) {
        setServiceConfigs(prev => ({
          ...prev,
          [serviceId]: { description: '', links: [], platforms: [] }
        }));
      }
    });
  }, [formData.services, hasUsedFreeDemo]);

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

  // Pricing and checkout logic
  const getCheckoutUrl = (numberOfServices: number) => {
    const pricingMap = {
      1: "https://www.paypal.com/ncp/payment/RAL8XL4PLF388", // $300
      2: "https://www.paypal.com/ncp/payment/72QM3XUV3CQE2", // $600
      3: "https://www.paypal.com/ncp/payment/G7MTTA6CKFZPW", // $900
      4: "https://www.paypal.com/ncp/payment/C63UJL244KXR6"  // $1200
    };
    return pricingMap[numberOfServices as keyof typeof pricingMap] || pricingMap[1];
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
      // Prepare webhook data - each field as individual string
      const webhookData = {
        name: formData.name || 'Not provided',
        email: formData.email || 'Not provided',
        phone: formData.phone || 'Not provided',
        business: formData.business || 'Not provided',
        coaching_niche: formData.coachingNiche === "other" ? formData.otherNiche : formData.coachingNiche || 'Not provided',
        monthly_revenue: formData.monthlyRevenue || 'Not provided',
        current_challenges: formData.currentChallenges || 'Not provided',
        selected_services: formData.services.length > 0 ? formData.services.join(', ') : 'No services selected',
        user_type: userType || 'Not specified',
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
        website_links: links.length > 0 ? links.map(link => `${link.description}: ${link.url}`).join(' | ') : 'No links provided',
        uploaded_files: files.length > 0 ? files.map(f => f.name).join(', ') : 'No files uploaded',
        service_configurations: Object.keys(serviceConfigs).length > 0 ? 
          Object.entries(serviceConfigs).map(([service, config]) => 
            `${service}: ${config.description}`
          ).join(' | ') : 'No service configurations'
      };

      console.log('Sending to Make.com webhook:', webhookData);

      // Send to Make.com webhook
      const webhookUrl = "https://hook.us2.make.com/zgk94s652bfrodb93eudl9rjsiay0524";
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status} ${response.statusText}`);
      }

      console.log('Webhook response:', response.status);
      
      // Store submission locally as backup
      LocalStorageManager.saveFormDraft({
        ...formData,
        submissionStatus: 'sent',
        submissionTime: new Date().toISOString()
      }, links);
      
      SoundEffects.playSuccess();
      setDemoSubmitted(true);
      clearSavedData();
      
      // Handle redirect based on demo status
      if (hasUsedFreeDemo && formData.services.length > 0) {
        // User has already used demo - redirect to payment
        const paymentUrl = getCheckoutUrl(formData.services.length);
        window.open(paymentUrl, '_blank');
        
        toast({
          title: "Service Request Submitted!",
          description: "Redirecting to secure payment...",
        });
      } else {
        // First time user - mark demo as used and show success
        localStorage.setItem('hookai_demo_used', 'true');
        setHasUsedFreeDemo(true);
        
        toast({
          title: "Free Demo Request Submitted!",
          description: "You will receive your demo within 24-48 hours.",
        });
        
        setShowSuccessDialog(true);
      }
      
    } catch (error) {
      console.error('Webhook submission error:', error);
      
      // Store failed submission locally
      LocalStorageManager.saveFormDraft({
        ...formData,
        submissionStatus: 'failed',
        submissionTime: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      }, links);
      
      toast({
        title: "Submission Failed",
        description: "Unable to send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = formData.services.length === 0;
  const progress = calculateProgress();

  return (
    <section id="contact-form" className="contact-form py-8 md:py-12 lg:py-20 px-2 sm:px-4 bg-gradient-to-br from-slate-50 to-purple-50" data-onboarding="contact-form">
      <div className="max-w-4xl mx-auto w-full">
        <FormHeader 
          demoSubmitted={demoSubmitted}
          progress={progress}
          hasUsedFreeDemo={hasUsedFreeDemo}
        />

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-20"></div>
          <Card className="relative shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50"></div>
            
            <FormCardHeader 
              demoSubmitted={demoSubmitted}
              userType={userType}
              services={formData.services}
              totalCost={totalCost}
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
                  showActualPrice={hasUsedFreeDemo}
                />

                {formData.services.map(serviceId => (
                  <ServiceConfigSection
                    key={serviceId}
                    serviceId={serviceId}
                    serviceName={
                      serviceId === 'chatbot' ? 'AI Assistant' :
                      serviceId === 'funnel' ? 'Sales Funnel' :
                      serviceId === 'video' ? 'Content Clips' :
                      serviceId === 'website' ? 'Professional Website' : serviceId
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
                  totalCost={totalCost}
                  hasUsedFreeDemo={hasUsedFreeDemo}
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
