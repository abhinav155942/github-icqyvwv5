import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  emoji?: string;
  avatar?: string;
}

const ReviewsSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Marcus Chen",
      rating: 4,
      comment: "The AI chatbot implementation was surprisingly straightforward for our tech startup. Within two weeks, it was handling 70% of customer inquiries automatically. The time savings have been incredible - we're talking 4-5 hours daily that my team can now dedicate to product development. Customer satisfaction scores actually improved because of the instant response times.",
      date: "2025-06-12",
      verified: true,
      emoji: "😊",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 3,
      comment: "Working with HookAI has been a solid experience for my coaching business. The funnel setup took about three weeks to perfect, but the results are undeniable. My lead conversion rate improved by 30% in the first month. The support team was patient with my questions and always responded within a few hours. Sometimes the initial learning curve felt steep, but it was worth pushing through.",
      date: "2025-06-08",
      verified: true,
      emoji: "👍",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David Rodriguez",
      rating: 4,
      comment: "The video content automation has been a game-changer for our marketing agency. We're producing 3x more content with the same team size. The AI understands our brand voice remarkably well after the initial training period. There were a few minor glitches in the first week, but the technical team resolved them quickly. Our clients are impressed with the consistent quality and faster turnaround times.",
      date: "2025-06-05",
      verified: true,
      emoji: "🚀",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Jennifer Park",
      rating: 3,
      comment: "The AI assistant integration required more customization than I initially expected for our e-commerce platform. The learning phase stretched over six weeks as we fine-tuned the workflows. However, once everything was properly configured, our order processing efficiency improved dramatically. Customer support was responsive throughout the implementation, always providing detailed solutions. Now our team can handle 40% more orders with the same staffing.",
      date: "2025-06-02",
      verified: true,
      emoji: "💡",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Michael Thompson",
      rating: 5,
      comment: "Outstanding results from day one! Our e-commerce conversion rate jumped 45% in the first month alone. The automation handles everything from lead scoring to personalized email campaigns. The team delivered exactly what they promised - professional implementation, efficient setup, and excellent ongoing support. This investment has already generated triple its cost in additional revenue. The system continues to learn and improve our results month over month.",
      date: "2025-05-28",
      verified: true,
      emoji: "🎉",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 3,
      comment: "The platform offers solid functionality with practical business applications. The learning curve was steeper than anticipated, requiring several weeks of dedicated training for our team. However, the support team guided us through each step with patience and expertise. Now that we're fully operational, the results speak for themselves - improved efficiency, better customer engagement, and streamlined workflows. The ROI became clear after the third month of implementation.",
      date: "2025-05-25",
      verified: true,
      emoji: "📈",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Robert Kim",
      rating: 4,
      comment: "The chatbot integration exceeded all expectations for our consulting firm. Customer service response times improved from hours to seconds, and our team can now focus on strategic growth initiatives. The AI handles complex technical questions surprisingly well, often providing better answers than our junior staff. Customers appreciate the instant responses, especially outside business hours. The ROI became apparent within just three weeks of going live.",
      date: "2025-05-22",
      verified: true,
      emoji: "✨",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Amanda Davis",
      rating: 3,
      comment: "The content creation tools have completely transformed our social media strategy. While some features performed better than others initially, the overall impact on our online presence has been substantial. We're publishing 5x more content with half the manual effort. The automation saves approximately 15 hours of work each week, allowing our creative team to focus on high-level strategy and brand development instead of repetitive tasks.",
      date: "2025-05-18",
      verified: true,
      emoji: "💪",
      avatar: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "James Wilson",
      rating: 4,
      comment: "This comprehensive automation solution delivered consistent results from week one. The setup process was remarkably smooth, with clear documentation and responsive technical support available 24/7. Our operational efficiency has improved by 60%, and the system scales beautifully as our business grows. The monthly reporting features help us track improvements in real-time. Highly recommended for companies ready to embrace AI-powered automation at scale.",
      date: "2025-05-15",
      verified: true,
      emoji: "🔥",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Emily Johnson",
      rating: 3,
      comment: "The platform offers decent functionality with room for improvement in user experience. The AI features work as advertised but the interface could be more intuitive. After spending time learning the system, we've seen gradual improvements in our workflow efficiency. The customer support team has been helpful in addressing our specific needs. Overall, it's a solid foundation that continues to evolve with regular updates.",
      date: "2025-05-10",
      verified: true,
      emoji: "📝",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "Alex Martinez",
      rating: 4,
      comment: "The funnel optimization delivered exceptional results for our digital marketing campaigns. Conversion rates improved by 35% within six weeks of implementation. The value proposition is clear - excellent ROI and responsive customer service throughout the process. The team provided detailed analytics that helped us understand our customer journey better. I've already recommended this service to three other business owners in my network.",
      date: "2025-05-05",
      verified: true,
      emoji: "💰",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Rachel Green",
      rating: 3,
      comment: "The content creation tools have been genuinely useful for our creative agency. Some features exceeded expectations while others needed refinement over time. The AI-generated social media posts save us about 10 hours weekly. The learning algorithm adapts well to our brand voice after initial training. Mixed experience overall, but definitely positive impact on our content production workflow and client satisfaction.",
      date: "2025-04-28",
      verified: true,
      emoji: "🎨",
      avatar: "https://images.unsplash.com/photo-1594736797933-d0401ba6fe65?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 13,
      name: "Kevin Brown",
      rating: 4,
      comment: "These AI solutions actually deliver measurable results for our manufacturing business. The implementation process was professional with clear timelines and deliverables. Ongoing support has been reliable and technically competent. We've automated three major processes that previously required manual oversight. The system handles complex decision trees better than expected, and our operational costs have decreased by 25% since deployment.",
      date: "2025-04-22",
      verified: true,
      emoji: "⚙️",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 14,
      name: "Sophie Turner",
      rating: 3,
      comment: "The platform provides practical features that address real business challenges. While the interface could be more user-friendly, the core functionality is solid and reliable. Our team adapted to the system within a month of training. The reporting dashboard gives us insights we never had before. It's not the most elegant solution, but it gets the job done effectively and integrates well with our existing software stack.",
      date: "2025-04-18",
      verified: true,
      emoji: "📊",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 15,
      name: "Daniel Lee",
      rating: 4,
      comment: "The automation features have completely streamlined our accounting workflow. Setup was more straightforward than anticipated, with comprehensive documentation and tutorial videos. Results became apparent within the first two weeks of operation. Our month-end closing process now takes half the time it used to. The error rate in our financial reporting has dropped to virtually zero since implementing these AI tools.",
      date: "2025-04-12",
      verified: true,
      emoji: "⚡",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 16,
      name: "Olivia White",
      rating: 3,
      comment: "Reasonable service with consistently good technical support when needed. The AI tools are helpful for our daily operations, though not groundbreaking compared to some competitors. The pricing is fair for the value delivered, and we've seen steady improvements in efficiency. Customer service responds quickly to tickets and provides thorough solutions. Satisfied with the outcome and would consider upgrading to premium features.",
      date: "2025-04-05",
      verified: true,
      emoji: "✅",
      avatar: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return stars;
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 6);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {renderStars(averageRating)}
            </div>
            <span className="text-lg font-semibold text-gray-700">
              {averageRating.toFixed(1)} out of 5
            </span>
            <span className="text-gray-500">
              ({reviews.length} reviews)
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feedback from businesses who've used our AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative flex-shrink-0">
                    {review.avatar ? (
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-purple-200 shadow-md"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-xl shadow-md">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    {review.emoji && (
                      <span className="absolute -bottom-1 -right-1 text-lg sm:text-xl lg:text-2xl bg-white rounded-full p-0.5 sm:p-1 shadow-sm">
                        {review.emoji}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <h4 className="font-bold text-sm sm:text-base lg:text-lg text-gray-800 truncate">{review.name}</h4>
                      <div className="flex flex-shrink-0">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    {review.verified && (
                      <span className="text-xs text-green-600 bg-green-50 px-2 sm:px-3 py-1 rounded-full font-medium border border-green-200 inline-block">
                        ✓ Verified Purchase
                      </span>
                    )}
                  </div>
                </div>
                <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-medium italic">
                  "{review.comment}"
                </blockquote>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {reviews.length > 6 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              {showAllReviews ? 'Show Less Reviews' : 'Show All Reviews'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;