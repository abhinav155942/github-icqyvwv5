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
      comment: "The AI assistant is useful and has streamlined many of my daily tasks. It needed more customization than expected but eventually got it working exactly how I wanted for my business needs.",
      date: "2025-06-02",
      verified: true,
      emoji: "💡"
    },
    {
      id: 5,
      name: "Michael Thompson",
      rating: 5,
      comment: "Excellent work on my e-commerce funnel! Conversion rate improved by 45% in just the first month. Professional team, quick delivery, and ongoing support has been outstanding throughout the process.",
      date: "2025-05-28",
      verified: true,
      emoji: "🎉",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 3,
      comment: "Solid platform with practical features that actually work. The learning curve was steeper than anticipated but support helped me through every step and now I'm seeing great results.",
      date: "2025-05-25",
      verified: true,
      emoji: "📈",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Robert Kim",
      rating: 4,
      comment: "Really happy with the chatbot integration. It's handling customer service much better than I expected and my team has more time to focus on growing the business. Worth every penny!",
      date: "2025-05-22",
      verified: true,
      emoji: "✨"
    },
    {
      id: 8,
      name: "Amanda Davis",
      rating: 3,
      comment: "The content creation tools are helpful and have improved my social media presence significantly. Some features work better than others but overall it's been beneficial for my business growth.",
      date: "2025-05-18",
      verified: true,
      emoji: "💪",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "James Wilson",
      rating: 4,
      comment: "Great automation features that have transformed my workflow. The setup process was smooth and the results have been consistent. Definitely recommended for small businesses looking to scale efficiently.",
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
            Real feedback from businesses who've used our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    {review.avatar ? (
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-200 shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    {review.emoji && (
                      <span className="absolute -bottom-1 -right-1 text-2xl bg-white rounded-full p-1 shadow-sm">
                        {review.emoji}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-gray-800">{review.name}</h4>
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    {review.verified && (
                      <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium border border-green-200">
                        ✓ Verified Purchase
                      </span>
                    )}
                  </div>
                </div>
                <blockquote className="text-gray-700 text-base leading-relaxed mb-4 font-medium italic">
                  "{review.comment}"
                </blockquote>
                <p className="text-sm text-gray-500 font-medium">
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