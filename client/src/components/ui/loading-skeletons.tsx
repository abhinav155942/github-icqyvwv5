import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Card skeleton for service cards, testimonials, etc.
export const CardSkeleton = () => (
  <Card className="shadow-lg">
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </CardHeader>
    <CardContent className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/5" />
    </CardContent>
  </Card>
);

// Hero section skeleton
export const HeroSkeleton = () => (
  <div className="text-center py-20 px-4">
    <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
    <Skeleton className="h-6 w-2/3 mx-auto mb-4" />
    <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
    <div className="flex justify-center gap-4">
      <Skeleton className="h-12 w-32" />
      <Skeleton className="h-12 w-32" />
    </div>
  </div>
);

// Service benefits skeleton
export const ServiceBenefitSkeleton = () => (
  <div className="grid md:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="text-center p-6">
        <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
        <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </div>
    ))}
  </div>
);

// Review skeleton
export const ReviewSkeleton = () => (
  <Card className="p-6">
    <div className="flex items-start space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-5 w-24" />
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-4" />
            ))}
          </div>
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-3 w-20 mt-2" />
      </div>
    </div>
  </Card>
);

// Contact form skeleton
export const ContactFormSkeleton = () => (
  <Card className="max-w-2xl mx-auto">
    <CardHeader>
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-32" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-5 w-5" />
              <div className="flex-1">
                <Skeleton className="h-5 w-40 mb-1" />
                <Skeleton className="h-4 w-full" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        ))}
      </div>
      <Skeleton className="h-12 w-full" />
    </CardContent>
  </Card>
);

// FAQ skeleton
export const FAQSkeleton = () => (
  <div className="max-w-3xl mx-auto space-y-4">
    {[1, 2, 3, 4, 5].map((i) => (
      <Card key={i} className="p-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-6" />
        </div>
      </Card>
    ))}
  </div>
);

// Process steps skeleton
export const ProcessSkeleton = () => (
  <div className="grid md:grid-cols-4 gap-6">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="text-center">
        <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
        <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </div>
    ))}
  </div>
);

// Chat message skeleton
export const ChatMessageSkeleton = () => (
  <div className="space-y-4">
    <div className="flex justify-end">
      <Skeleton className="h-12 w-64 rounded-xl" />
    </div>
    <div className="flex justify-start">
      <Skeleton className="h-16 w-72 rounded-xl" />
    </div>
  </div>
);

// Page skeleton for full page loading
export const PageSkeleton = () => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <HeroSkeleton />
      <ServiceBenefitSkeleton />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
      <ProcessSkeleton />
      <ContactFormSkeleton />
    </div>
  </div>
);