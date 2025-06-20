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
      comment: "The AI chatbot setup was straightforward and now handles 70% of my customer inquiries. Amazing how much time this saves me every day! The automation is incredibly smooth and my customers love the instant responses.",
      date: "2025-06-12",
      verified: true,
      emoji: "😊",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 3,
      comment: "Good service overall. The funnel setup worked well for my coaching business and I'm seeing real results. Support was helpful when I had questions and they responded quickly to all my concerns.",
      date: "2025-06-08",
      verified: true,
      emoji: "👍",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David Rodriguez",
      rating: 4,
      comment: "Impressed with the video content automation. Saves me hours each week and the quality is consistently high. A few minor bugs initially but they were quickly fixed by the responsive team.",
      date: "2025-06-05",
      verified: true,
      emoji: "🚀",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Jennifer Park",
      rating: 3,
      comment: "The AI assistant is quite useful for daily operations. Initial setup required some patience and fine-tuning to match our specific workflow requirements. The learning phase took longer than anticipated, but once configured properly, it has significantly streamlined our processes. Customer support was responsive throughout the implementation period.",
      date: "2025-06-02",
      verified: true,
      emoji: "💡"
    },
    {
      id: 5,
      name: "Michael Thompson",
      rating: 5,
      comment: "Outstanding results! Our e-commerce conversion rate jumped 45% in the first month alone. The team delivered exactly what they promised - professional, efficient, and with excellent ongoing support. The automation features have freed up countless hours for strategic planning. This investment has already paid for itself multiple times over.",
      date: "2025-05-28",
      verified: true,
      emoji: "🎉",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 3,
      comment: "Solid platform with practical features. The learning curve was steeper than expected, requiring several weeks to fully master all functionalities. However, the support team guided us through each step patiently. Now that we're up and running, the results speak for themselves - improved efficiency and better customer engagement across all channels.",
      date: "2025-05-25",
      verified: true,
      emoji: "📈",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Robert Kim",
      rating: 4,
      comment: "The chatbot integration exceeded expectations. Customer service response times improved dramatically, and our team can now focus on strategic growth initiatives instead of routine inquiries. The AI handles complex questions surprisingly well, and customers appreciate the instant responses. ROI became apparent within the first few weeks of implementation.",
      date: "2025-05-22",
      verified: true,
      emoji: "✨"
    },
    {
      id: 8,
      name: "Amanda Davis",
      rating: 3,
      comment: "Content creation tools have transformed our social media strategy. While some features performed better than others, the overall impact on our online presence has been substantial. The automation saves hours of manual work each week, allowing our creative team to focus on higher-level strategy and brand development.",
      date: "2025-05-18",
      verified: true,
      emoji: "💪",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "James Wilson",
      rating: 4,
      comment: "Comprehensive automation solution that delivered consistent results. The setup process was remarkably smooth, with clear documentation and responsive technical support. Our operational efficiency has improved significantly, and the system scales beautifully with our growing business needs. Highly recommended for companies ready to embrace AI-powered automation.",
      date: "2025-05-15",
      verified: true,
      emoji: "🔥"
    },
    {
      id: 10,
      name: "Emily Johnson",
      rating: 3,
      comment: "Decent platform with room for improvement. The AI features work as advertised but could be more intuitive to use.",
      date: "2025-05-10",
      verified: true
    },
    {
      id: 11,
      name: "Alex Martinez",
      rating: 4,
      comment: "The funnel optimization really helped my conversion rates. Good value for money and responsive customer service.",
      date: "2025-05-05",
      verified: true
    },
    {
      id: 12,
      name: "Rachel Green",
      rating: 3,
      comment: "Useful tools for content creators. Some features exceeded expectations while others were just okay. Mixed but positive experience.",
      date: "2025-04-28",
      verified: true
    },
    {
      id: 13,
      name: "Kevin Brown",
      rating: 4,
      comment: "Solid AI solutions that actually work. The implementation was professional and the ongoing support has been reliable.",
      date: "2025-04-22",
      verified: true
    },
    {
      id: 14,
      name: "Sophie Turner",
      rating: 3,
      comment: "Good platform with practical features. The interface could be more user-friendly but the functionality is there.",
      date: "2025-04-18",
      verified: true
    },
    {
      id: 15,
      name: "Daniel Lee",
      rating: 4,
      comment: "The automation features have streamlined my workflow considerably. Setup was straightforward and results came quickly.",
      date: "2025-04-12",
      verified: true
    },
    {
      id: 16,
      name: "Olivia White",
      rating: 3,
      comment: "Reasonable service with good support. The AI tools are helpful though not groundbreaking. Satisfied with the outcome.",
      date: "2025-04-05",
      verified: true
    },
    {
      id: 17,
      name: "Thomas Garcia",
      rating: 4,
      comment: "Effective solutions for my consulting business. The chatbot has improved client engagement and the setup was professional.",
      date: "2025-03-28",
      verified: true
    },
    {
      id: 18,
      name: "Isabella Moore",
      rating: 3,
      comment: "Decent experience overall. The platform delivers on its promises but some features could be more polished. Fair value.",
      date: "2025-03-22",
      verified: true
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