
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-gray-800">
              <Lock className="mr-2 h-5 w-5 text-purple-600" />
              Your Privacy Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-purple-600" />
                1. Information We Collect
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Personal Information</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Name and email address</li>
                    <li>Business name and industry information</li>
                    <li>Contact preferences and communication history</li>
                    <li>Service requirements and business goals</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Files and Content</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Files, images, and videos you upload</li>
                    <li>Website links and references you provide</li>
                    <li>Business content and materials for AI training</li>
                    <li>Chat conversations and support interactions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Usage Data</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>How you use our platform and services</li>
                    <li>Performance metrics and analytics</li>
                    <li>Device information and browser data</li>
                    <li>IP address and location data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Database className="mr-2 h-5 w-5 text-purple-600" />
                2. How We Use Your Information
              </h3>
              <div className="space-y-3">
                <p><strong>Service Delivery:</strong> To create, customize, and deliver AI solutions tailored to your business needs.</p>
                <p><strong>Communication:</strong> To respond to inquiries, provide support, and send service updates.</p>
                <p><strong>Improvement:</strong> To enhance our platform, develop new features, and improve service quality.</p>
                <p><strong>Analytics:</strong> To understand usage patterns and optimize user experience.</p>
                <p><strong>Legal Compliance:</strong> To comply with applicable laws and protect our rights.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Data Storage and Security</h3>
              <div className="space-y-3">
                <p><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard encryption.</p>
                <p><strong>Access Controls:</strong> Strict access controls ensure only authorized personnel can access your data.</p>
                <p><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments.</p>
                <p><strong>Data Centers:</strong> Your data is stored in secure, SOC 2 compliant data centers.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Data Sharing and Third Parties</h3>
              <div className="space-y-3">
                <p><strong>No Sale of Data:</strong> We never sell your personal information to third parties.</p>
                <p><strong>Service Providers:</strong> We may share data with trusted service providers who help us deliver our services (hosting, analytics, payment processing).</p>
                <p><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights.</p>
                <p><strong>Business Transfers:</strong> In the event of a merger or acquisition, your data may be transferred to the new entity.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">5. AI and Machine Learning</h3>
              <div className="space-y-3">
                <p><strong>Custom AI Training:</strong> Your business data may be used to train AI models specifically for your use case.</p>
                <p><strong>Data Isolation:</strong> Your data is kept separate and is not used to train models for other clients.</p>
                <p><strong>Model Retention:</strong> AI models created for you remain your property and can be deleted upon request.</p>
                <p><strong>Performance Monitoring:</strong> We monitor AI performance to ensure quality and accuracy.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">6. Your Rights and Choices</h3>
              <div className="space-y-3">
                <p><strong>Access:</strong> You can request access to the personal information we hold about you.</p>
                <p><strong>Correction:</strong> You can request correction of inaccurate or incomplete information.</p>
                <p><strong>Deletion:</strong> You can request deletion of your personal information, subject to legal requirements.</p>
                <p><strong>Portability:</strong> You can request a copy of your data in a portable format.</p>
                <p><strong>Opt-out:</strong> You can opt out of marketing communications at any time.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">7. Cookies and Tracking</h3>
              <div className="space-y-3">
                <p><strong>Essential Cookies:</strong> We use cookies necessary for platform functionality.</p>
                <p><strong>Analytics:</strong> We use analytics cookies to understand how our platform is used.</p>
                <p><strong>Marketing:</strong> Marketing cookies help us provide relevant content and advertisements.</p>
                <p><strong>Control:</strong> You can control cookie preferences through your browser settings.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">8. Data Retention</h3>
              <div className="space-y-3">
                <p><strong>Active Accounts:</strong> We retain your data while your account is active and for legitimate business purposes.</p>
                <p><strong>Inactive Accounts:</strong> Data from inactive accounts may be deleted after 3 years of inactivity.</p>
                <p><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations.</p>
                <p><strong>Backups:</strong> Data in backups may persist for up to 30 days after deletion.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">9. International Data Transfers</h3>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">10. Children's Privacy</h3>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">11. Changes to This Policy</h3>
              <p>
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">12. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us through our platform support channels or email us directly.
              </p>
            </section>

            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Your Trust is Important:</strong> We are committed to protecting your privacy and being transparent about our data practices. This policy reflects our dedication to safeguarding your information while providing exceptional AI-powered services.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
