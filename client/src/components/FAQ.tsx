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
      question: "Why should I choose Adymize over other agencies?",
      answer: "Adymize stands out with our AI-powered automation solutions that deliver 3× growth rates. We've helped 88+ brands generate over $430k in revenue through our dedicated team of AI specialists. Unlike traditional agencies, our services are mostly automated, providing faster results and more consistent performance."
    },
    {
      question: "What sets Adymize apart from the competition?",
      answer: "Our unique approach combines cutting-edge AI technology with proven marketing strategies. We offer automated solutions that work 24/7, personalized strategies for each client, and a track record of delivering remarkable results. Our team focuses on automation that scales with your business growth."
    },
    {
      question: "How can Adymize guarantee accurate reporting?",
      answer: "We use advanced AI-powered analytics and real-time tracking systems to provide transparent, accurate reporting. Our automated reporting tools monitor key performance indicators continuously, giving you detailed insights into your campaigns' performance with complete transparency and accountability."
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl">🤔</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Need Help?
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;