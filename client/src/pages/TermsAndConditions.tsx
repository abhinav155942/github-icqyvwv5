
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Shield, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="mb-6 border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-gray-800">
              <FileText className="mr-2 h-5 w-5 text-purple-600" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing and using AI Coach Growth Suite ("Service", "Platform", "we", "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Service Description</h3>
              <p className="mb-4">
                AI Coach Growth Suite provides AI-powered business solutions including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sales funnel setup and optimization</li>
                <li>AI chatbot development and deployment</li>
                <li>Content creation and viral video clip generation</li>
                <li>Lead generation and client communication automation</li>
                <li>Custom AI assistants for various business needs</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3. User Obligations</h3>
              <div className="space-y-3">
                <p><strong>3.1 Accurate Information:</strong> You agree to provide accurate, current, and complete information when using our services.</p>
                <p><strong>3.2 Lawful Use:</strong> You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
                <p><strong>3.3 Content Responsibility:</strong> You are solely responsible for any content you upload, submit, or transmit through our platform.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Service Delivery</h3>
              <div className="space-y-3">
                <p><strong>4.1 Delivery Timeline:</strong> We guarantee delivery within 2-7 business days for standard packages.</p>
                <p><strong>4.2 Demo Services:</strong> Initial consultations and demos are provided free of charge.</p>
                <p><strong>4.3 Revisions:</strong> We offer reasonable revisions to ensure your satisfaction with delivered services.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">5. Payment Terms</h3>
              <div className="space-y-3">
                <p><strong>5.1 Pricing:</strong> Service prices are clearly displayed during the quote process.</p>
                <p><strong>5.2 Payment Methods:</strong> We accept major credit cards and digital payment methods.</p>
                <p><strong>5.3 Refund Policy:</strong> We offer a satisfaction guarantee with refunds available within 30 days of service delivery if you're not satisfied with our work.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">6. Intellectual Property</h3>
              <div className="space-y-3">
                <p><strong>6.1 Client Ownership:</strong> Upon full payment, you own all deliverables created specifically for your business.</p>
                <p><strong>6.2 Platform Rights:</strong> We retain rights to our proprietary methods, processes, and platform technology.</p>
                <p><strong>6.3 Third-Party Content:</strong> Any third-party integrations remain subject to their respective terms and licenses.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">7. Privacy and Data</h3>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">8. Limitation of Liability</h3>
              <p>
                In no event shall AI Coach Growth Suite, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">9. Service Availability</h3>
              <div className="space-y-3">
                <p><strong>9.1 Uptime:</strong> We strive for 99.9% uptime for our AI services and chatbots.</p>
                <p><strong>9.2 Maintenance:</strong> Scheduled maintenance will be communicated in advance.</p>
                <p><strong>9.3 Support:</strong> 24/7 technical support is available for active clients.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">10. Termination</h3>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">11. Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">12. Contact Information</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us through our platform or support channels.
              </p>
            </section>

            <div className="mt-8 p-4 bg-purple-50 rounded-xl border border-purple-200">
              <p className="text-sm text-purple-800">
                <strong>Note:</strong> These terms are effective as of the date last updated above. Continued use of our services constitutes acceptance of these terms.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;
