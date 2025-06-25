
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

  // Make.com webhook submission script
  const submitToMakeWebhook = async (formData: any) => {
    const webhookUrl = "https://hook.us2.make.com/e0avjappx2co9oc9hwt6gb53oj42sjbm";
    
    try {
      console.log('Sending data to Make.com webhook:', formData);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      const responseText = await response.text();
      console.log('Make.com webhook response:', responseText);
      
      return { success: true, response: responseText };
    } catch (error) {
      console.error('Make.com webhook error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.services.length > 0 && !validateServiceConfigs()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data for Make.com webhook
      const webhookData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.business,
        coaching_niche: formData.coachingNiche === "other" ? formData.otherNiche : formData.coachingNiche,
        monthly_revenue: formData.monthlyRevenue,
        current_challenges: formData.currentChallenges,
        selected_services: formData.services.join(', '),
        user_type: userType,
        submission_timestamp: new Date().toISOString(),
        service_configs: serviceConfigs,
        uploaded_files: files.map(f => ({ name: f.name, size: f.size, type: f.type })),
        website_links: links,
        form_version: "webhook_only"
      };

      // Send to Make.com webhook
      await submitToMakeWebhook(webhookData);
      
      SoundEffects.playSuccess();
      setDemoSubmitted(true);
      clearSavedData();
      setShowSuccessDialog(true);
      
      toast({
        title: "Success!",
        description: "Your request has been sent successfully!",
      });
    } catch (error) {
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
              totalCost={totalCost}
              progress={progress}
            />
            
            <CardContent className="relative">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
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
                  isPurchaseDisabled={isPurchaseDisabled}
                  demoSubmitted={demoSubmitted}
                  totalCost={totalCost}
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
