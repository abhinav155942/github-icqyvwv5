
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Scale Your Coaching Business with AI?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join hundreds of coaches who've automated their lead generation and client communication with our AI-powered solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <span className="text-green-400 font-medium">✓ 2-day delivery guaranteed</span>
            <span className="text-green-400 font-medium">✓ 24/7 AI support</span>
            <span className="text-green-400 font-medium">✓ 65% refund in 2 days</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6 text-sm">
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
          
          <div className="text-sm text-gray-500 pt-8 border-t border-gray-800">
            © 2024-25 HookAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
