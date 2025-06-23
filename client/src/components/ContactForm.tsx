
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
import { useWebhookSubmission } from "@/hooks/useWebhookSubmission";
import { useDatabaseSubmission } from "@/hooks/useDatabaseSubmission";
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

  const { submitToWebhook } = useWebhookSubmission();
  const { 
    isSubmitting, 
    submitAttempts, 
    hasSubmission, 
    existingSubmission, 
    submitToDatabase, 
    checkExistingSubmission 
  } = useDatabaseSubmission();

  useEffect(() => {
    setTotalCost(formData.services.length * 300);
    
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

  // Check for existing submission when email changes
  useEffect(() => {
    if (formData.email && formData.email.includes('@')) {
      checkExistingSubmission(formData.email);
    }
  }, [formData.email, checkExistingSubmission]);

  // Set demo submitted state based on existing submission
  useEffect(() => {
    if (hasSubmission && existingSubmission) {
      setDemoSubmitted(true);
    }
  }, [hasSubmission, existingSubmission]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (demoSubmitted) {
      window.open("https://www.paypal.com/ncp/payment/ZVJMZLCPHGDWS", "_blank");
      return;
    }

    if (formData.services.length > 0 && !validateServiceConfigs()) {
      return;
    }

    const backup = backupFormData();
    console.log("Form backup created:", backup);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      business: formData.business,
      coachingNiche: formData.coachingNiche === "other" && formData.otherNiche ? formData.otherNiche : formData.coachingNiche,
      otherNiche: showOtherNiche ? formData.otherNiche : undefined,
      monthlyRevenue: formData.monthlyRevenue,
      currentChallenges: formData.currentChallenges,
      services: formData.services,
      serviceConfigs,
      files: files.map(file => ({ name: file.name, size: file.size, type: file.type })),
      links,
      totalCost,
      userType
    };

    // Submit to database first
    const dbResult = await submitToDatabase(submissionData);

    if (dbResult.success) {
      // Also submit to webhook for backup/integration
      const webhookData = {
        ...formData,
        userType,
        serviceConfigurations: serviceConfigs,
        uploadedFiles: files.map(f => ({ 
          name: f.name, 
          size: f.size, 
          type: f.type,
          lastModified: f.lastModified
        })),
        websiteLinks: links,
        totalFiles: files.length,
        totalServices: formData.services.length,
        estimatedValue: totalCost,
        formVersion: "3.0",
        browserInfo: {
          language: navigator.language,
          platform: navigator.platform,
          cookieEnabled: navigator.cookieEnabled
        }
      };

      if (!showOtherNiche || !formData.otherNiche) {
        delete (webhookData as any).otherNiche; 
      }
      
      if (formData.coachingNiche === "other" && formData.otherNiche) {
        webhookData.coachingNiche = formData.otherNiche;
      }

      const makeWebhookUrl = "https://hook.us2.make.com/e0avjappx2co9oc9hwt6gb53oj42sjbm";
      
      // Don't wait for webhook response as database is primary
      submitToWebhook(makeWebhookUrl, webhookData, {
        maxRetries: 2,
        retryDelay: 1000,
        timeout: 10000
      });

      setDemoSubmitted(true);
      clearSavedData();
      setShowSuccessDialog(true);
      
      toast({
        title: "Success!",
        description: dbResult.message || "Your request has been received!",
      });
    } else {
      toast({
        title: "Submission Failed",
        description: dbResult.error || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const isPurchaseDisabled = demoSubmitted && formData.services.length === 0;
  const progress = calculateProgress();

  return (
    <section id="contact-form" className="contact-form py-12 md:py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50" data-onboarding="contact-form">
      <div className="max-w-4xl mx-auto">
        <FormHeader 
          demoSubmitted={demoSubmitted}
          submitAttempts={submitAttempts}
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
                  showActualPrice={demoSubmitted}
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
