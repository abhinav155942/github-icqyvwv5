import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import { ReviewSkeleton } from "@/components/ui/loading-skeletons";
import { useLoadingState } from "@/hooks/useLoadingState";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  emoji?: string;
  avatar?: string;
  fontFamily?: string;
}

const ReviewsSection = () => {
  const { isLoading, finishLoading } = useLoadingState({ 
    initialLoading: true, 
    minLoadingTime: 1200 
  });

  useEffect(() => {
    // Simulate loading reviews data
    const timer = setTimeout(() => {
      finishLoading();
    }, 600);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      rating: 4,
      comment: "The sales funnel they built for my life coaching practice has been a complete game changer. I was manually following up with every lead before, which was exhausting and time-consuming.\n\nNow the system handles most of the nurturing automatically. My discovery call booking rate went from maybe 20% to over 65%. The automated email sequence is incredibly well-written and feels personal. I've been able to scale my practice without burning out, and my monthly revenue has increased by 180% in just 6 months.",
      date: "2025-06-14",
      verified: true,
      emoji: "💼"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      rating: 4,
      comment: "As a business coach, I needed something to help qualify leads before they got on my calendar. The AI assistant they set up asks all the right questions and provides immediate value to prospects.\n\nIt saves me probably 12 hours a week screening calls. Only serious, qualified prospects make it through now. My conversion rate to paying clients has more than doubled, and the quality of leads is significantly higher. The system even handles basic objections and builds trust before prospects ever speak to me directly.",
      date: "2025-06-11",
      verified: true,
      emoji: "🎯"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      rating: 4,
      comment: "I run a wellness coaching business and was struggling to get my content seen on social media. The viral clips service took my hour-long workshops and transformed them into these powerful, bite-sized videos.\n\nMy Instagram following grew from 800 to over 15,000 in 5 months. More importantly, I'm getting actual high-quality coaching clients from the content now. Three of my current $5k package clients came directly from viral clips. The editing quality is professional and they really understand what resonates in the coaching space.",
      date: "2025-06-08",
      verified: true,
      emoji: "📈"
    },
    {
      id: 4,
      name: "Robert Thompson",
      rating: 4,
      comment: "The professional website they built for my executive coaching practice exceeded my expectations. The booking calendar integration works flawlessly and my clients love the clean, professional design.\n\nThe client portal where they can access resources and track progress has been a huge hit. Bookings are definitely up since the launch - about 40% increase in the first quarter. The mobile experience is excellent too, which is important since many of my clients book on their phones. Support team was patient with all my questions during the transition.",
      date: "2025-06-05",
      verified: true,
      emoji: "💻"
    }
  ];

  // Helper function to render avatar with improved error handling
  const renderAvatar = (review: Review) => {
    const initials = review.name.split(' ').map(n => n[0]).join('');
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
    const colorClass = colors[review.id % colors.length];
    
    if (review.avatar && review.avatar.startsWith('http')) {
      return (
        <>
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className={`w-full h-full ${colorClass} flex items-center justify-center text-white font-semibold text-sm lg:text-base`} style={{ display: 'none' }}>
            {initials}
          </div>
        </>
      );
    }
    
    return (
      <div className={`w-full h-full ${colorClass} flex items-center justify-center text-white font-semibold text-sm lg:text-base`}>
        {initials}
      </div>
    );
  };

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
  const displayedReviews = reviews; // Show all 4 reviews

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-4 w-4 bg-gray-200 animate-pulse rounded-sm"></div>
                ))}
              </div>
              <div className="h-5 w-24 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ReviewSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-purple-200 shadow-md rounded-full overflow-hidden">
                      {renderAvatar(review)}
                    </div>
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
                <div className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 whitespace-pre-line">
                  {review.comment}
                </div>
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


      </div>
    </section>
  );
};

export default ReviewsSection;