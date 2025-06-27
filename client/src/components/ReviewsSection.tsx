import { useEffect } from "react";
import { Star, StarHalf } from "lucide-react";
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
      name: "Sarah M.",
      rating: 4,
      comment: "Honestly wasn't sure about this at first, but after 3 months my coaching business has completely changed. Before I was chasing leads all day and barely converting anyone. Now I'm getting 3-4 qualified calls per week without doing any of the follow-up myself. The setup took about 2 weeks but it's been worth every penny. My only complaint is I wish I'd done this sooner.",
      date: "2025-06-14",
      verified: true,
      emoji: "💼",
      avatar: "/attached_assets/Screenshot 2025-06-27 122508_1751008652254.png"
    },
    {
      id: 2,
      name: "Marcus J.",
      rating: 3,
      comment: "The AI chatbot thing seemed gimmicky but actually works pretty well. It screens out the tire kickers before they even get to my calendar. Still working out some kinks with the responses but overall saves me time. Team was responsive when I had questions during setup.",
      date: "2025-06-11",
      verified: true,
      emoji: "🎯",
      avatar: "/attached_assets/Screenshot 2025-06-27 123152_1751008658265.png"
    },
    {
      id: 3,
      name: "Lisa R.",
      rating: 4,
      comment: "The video clips they made from my long-form content actually get views now. I was posting hour-long videos that maybe 20 people watched. Now these short clips are getting thousands of views and I'm booking discovery calls from people who found me through them. Takes about a week to get the clips back but the quality is solid.",
      date: "2025-06-08",
      verified: true,
      emoji: "📈",
      avatar: "/attached_assets/Screenshot 2025-06-27 122930_1751008660917.png"
    },
    {
      id: 4,
      name: "Robert T.",
      rating: 3,
      comment: "Website looks professional and the booking system works. Clients can schedule directly without the back-and-forth emails. Had a few small issues with the calendar integration at first but they fixed it quickly. Not cheap but definitely an upgrade from my old site.",
      date: "2025-06-05",
      verified: true,
      emoji: "💻",
      avatar: "/attached_assets/Screenshot 2025-06-27 122604_1751008665347.png"
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

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-gray-50">
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
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border animate-pulse">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
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

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-gray-200">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-1">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                        </span>
                      </div>
                    </div>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;