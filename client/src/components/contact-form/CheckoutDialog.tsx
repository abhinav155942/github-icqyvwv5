
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CreditCard, ArrowRight } from "lucide-react";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  checkoutUrl: string;
  numberOfServices: number;
  totalCost: number;
  selectedServices: string[];
}

const CheckoutDialog = ({ 
  open, 
  onOpenChange, 
  checkoutUrl, 
  numberOfServices, 
  totalCost, 
  selectedServices 
}: CheckoutDialogProps) => {
  
  const getServiceDisplayName = (serviceId: string) => {
    const serviceNames = {
      'chatbot': 'AI Coach Assistant',
      'funnel': 'Sales Funnel Setup',
      'video': 'Viral Content Clips',
      'website': 'Professional Coach Website'
    };
    return serviceNames[serviceId as keyof typeof serviceNames] || serviceId;
  };

  const handleProceedToPayment = () => {
    window.open(checkoutUrl, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <DialogTitle>Demo Request Submitted!</DialogTitle>
          </div>
          <DialogDescription>
            Your free demo request has been successfully submitted. Since you've already used your free demo, you can now proceed with payment to access our premium services.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Selected Services:</h3>
              <div className="space-y-2">
                {selectedServices.map((serviceId, index) => (
                  <div key={serviceId} className="flex justify-between items-center">
                    <span className="text-sm">{index + 1}. {getServiceDisplayName(serviceId)}</span>
                    <span className="text-sm font-medium">$300</span>
                  </div>
                ))}
              </div>
              <div className="border-t mt-3 pt-3">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total ({numberOfServices} service{numberOfServices > 1 ? 's' : ''})</span>
                  <span>${totalCost}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Close
            </Button>
            <Button 
              onClick={handleProceedToPayment}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Pay with PayPal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;