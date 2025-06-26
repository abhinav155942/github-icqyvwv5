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
  fontFamily?: string;
}

const ReviewsSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Maria G.",
      rating: 5,
      comment: "OMG this chatbot thing is amazing!! I was sceptical at first but wow, it really works. My clients can get answers 24/7 now and I dont have to stay up late replying to messages.\n\nSales went up by like 40% in just 2 months! Totally recomend it 👌",
      date: "2025-06-12",
      verified: true,
      emoji: "🤩",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b002?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "John Smith",
      rating: 4,
      comment: "Good service overall. The website they made looks professional and my coaching business started getting more leads.\n\nSetup took a bit longer than expected but the end result is solid. Customer support was helpful when I had questions.",
      date: "2025-06-08",
      verified: true,
      emoji: "👍",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ahmed K",
      rating: 5,
      comment: "Very good work! The viral content clips helped my business alot. Before I had maybe 100 views on my videos, now I get thousands!\n\nThey know how to make content that people want to watch. My coaching program is full now because of the videos they made for me.",
      date: "2025-06-05",
      verified: true,
      emoji: "🚀",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Carlos M",
      rating: 4,
      comment: "These guys helped me alot with my funnel! At first I was confusd about how it works but they explained everything step by step.\n\nNow I get way more customers through my website. The setup process was pretty easy and they answered all my questions really fast. Definetly worth the money!",
      date: "2025-06-02",
      verified: true,
      emoji: "💡",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Jennifer L",
      rating: 5,
      comment: "Amazing service! The website they built for my coaching business looks so professional. I've been getting compliments from clients about how easy it is to navigate.\n\nMy bookings have increased by 60% since the new site went live. The team was patient with all my changes and revisions too.",
      date: "2025-05-28",
      verified: true,
      emoji: "🎉",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Mike R",
      rating: 3,
      comment: "Good work on the AI chatbot setup. It took some time to train it properly for my specific business but now its working well.\n\nMy customers like getting instant responses even when im sleeping lol. Support team was helpfull when I had issues.",
      date: "2025-05-25",
      verified: true,
      emoji: "📈",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Sophie T",
      rating: 4,
      comment: "Really happy with the viral clips service! Before working with them I struggled to get views on my content.\n\nNow my videos are getting shared everywhere and my coaching business is booming. They made the editing process so much easier than I expected. Would definately use again!",
      date: "2025-05-22",
      verified: true,
      emoji: "✨",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "David Chen",
      rating: 5,
      comment: "Outstanding service! The sales funnel they created for me is converting like crazy. I went from struggling to get leads to having more clients than I can handle.\n\nThe whole setup was done professionally and on time. Best investment I've made for my business this year.",
      date: "2025-05-18",
      verified: true,
      emoji: "💪",
      avatar: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Lisa K",
      rating: 4,
      comment: "The AI chatbot has been a lifesaver for my online store! It handles customer questions when im not available and even helps with sales.\n\nSetup was pretty straightforward and support team was very helpfull. My conversion rate improved by about 35% since using it.",
      date: "2025-05-15",
      verified: true,
      emoji: "🔥",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Ryan B",
      rating: 3,
      comment: "Good experience overall. The website looks profesional and my clients seem to like it.\n\nTook a bit longer than expected to complete but the end result is solid. Would reccomend for anyone needing a business website done right.",
      date: "2025-05-10",
      verified: true,
      emoji: "📝",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "Alex Martinez",
      rating: 4,
      comment: "The funnel optimization delivered exceptional results for our digital marketing campaigns. Conversion rates improved by 35% within six weeks of implementation.\n\nThe value proposition is clear - excellent ROI and responsive customer service throughout the process. The team provided detailed analytics that helped us understand our customer journey better. I've already recommended this service to three other business owners in my network.",
      date: "2025-05-05",
      verified: true,
      emoji: "💰",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Rachel Green",
      rating: 3,
      comment: "The content creation tools have been genuinely useful for our creative agency. Some features exceeded expectations while others needed refinement over time.\n\nThe AI-generated social media posts save us about 10 hours weekly. The learning algorithm adapts well to our brand voice after initial training. Mixed experience overall, but definitely positive impact on our content production workflow and client satisfaction.",
      date: "2025-04-28",
      verified: true,
      emoji: "🎨",
      avatar: "https://images.unsplash.com/photo-1594736797933-d0401ba6fe65?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 13,
      name: "Kevin Brown",
      rating: 4,
      comment: "These AI solutions actually deliver measurable results for our manufacturing business. The implementation process was professional with clear timelines and deliverables.\n\nOngoing support has been reliable and technically competent. We've automated three major processes that previously required manual oversight. The system handles complex decision trees better than expected, and our operational costs have decreased by 25% since deployment.",
      date: "2025-04-22",
      verified: true,
      emoji: "⚙️",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 14,
      name: "Sophie Turner",
      rating: 3,
      comment: "The platform provides practical features that address real business challenges. While the interface could be more user-friendly, the core functionality is solid and reliable.\n\nOur team adapted to the system within a month of training. The reporting dashboard gives us insights we never had before. It's not the most elegant solution, but it gets the job done effectively and integrates well with our existing software stack.",
      date: "2025-04-18",
      verified: true,
      emoji: "📊",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 15,
      name: "Daniel Lee",
      rating: 4,
      comment: "The automation features have completely streamlined our accounting workflow. Setup was more straightforward than anticipated, with comprehensive documentation and tutorial videos.\n\nResults became apparent within the first two weeks of operation. Our month-end closing process now takes half the time it used to. The error rate in our financial reporting has dropped to virtually zero since implementing these AI tools.",
      date: "2025-04-12",
      verified: true,
      emoji: "⚡",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 16,
      name: "Olivia White",
      rating: 3,
      comment: "Reasonable service with consistently good technical support when needed. The AI tools are helpful for our daily operations, though not groundbreaking compared to some competitors.\n\nThe pricing is fair for the value delivered, and we've seen steady improvements in efficiency. Customer service responds quickly to tickets and provides thorough solutions. Satisfied with the outcome and would consider upgrading to premium features.",
      date: "2025-04-05",
      verified: true,
      emoji: "✅",
      avatar: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&h=100&fit=crop&crop=face"
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