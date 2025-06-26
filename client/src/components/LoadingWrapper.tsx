import React, { useEffect } from 'react';
import { useLoadingState } from '@/hooks/useLoadingState';

interface LoadingWrapperProps {
  children: React.ReactNode;
  skeleton: React.ReactNode;
  delay?: number;
  minLoadingTime?: number;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ 
  children, 
  skeleton, 
  delay = 200,
  minLoadingTime = 800
}) => {
  const { isLoading, finishLoading } = useLoadingState({ 
    initialLoading: true, 
    minLoadingTime 
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, delay);

    return () => clearTimeout(timer);
  }, [finishLoading, delay]);

  if (isLoading) {
    return <div className="animate-pulse">{skeleton}</div>;
  }

  return <div className="animate-fade-in">{children}</div>;
};