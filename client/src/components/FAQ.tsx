import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      question: "Why should I choose HookAI over other agencies?",
      answer: "HookAI stands out with our AI-powered automation solutions that mostly delivers 3× growth rates. We've helped 88+ brands generate over $430k in revenue through our dedicated team of AI specialists. Unlike traditional agencies, our services are mostly automated, providing faster results and more consistent performance and we do provide demos to you for better understanding."
    },
    {
      question: "What sets HookAI apart from the competition?",
      answer: "We have developed our custom system that uses powerful AI service to create a smooth flow for your project and our team of AI specialist review and test each flow, we have our own servers so you don't have to worry about storage,domains or updates."
    },
    {
      question: "How can HookAI will help us?",
      answer: "We use advanced AI-powered analytics and real-time tracking systems to provide you a full stack ai automation and services that will help you to increase your revenue but also saves your time and money"

    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🤔</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 px-4">
            Need Help?
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 pr-4 leading-tight">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <div className="border-t border-gray-100 pt-3 sm:pt-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;