import { useState, useEffect } from 'react';

interface UseLoadingStateOptions {
  initialLoading?: boolean;
  minLoadingTime?: number; // Minimum time to show loading (prevents flash)
  timeout?: number; // Maximum loading time before auto-complete
}

export const useLoadingState = (options: UseLoadingStateOptions = {}) => {
  const { 
    initialLoading = true, 
    minLoadingTime = 800, 
    timeout = 10000 
  } = options;
  
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [startTime] = useState(Date.now());

  const finishLoading = async () => {
    const elapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsed);
    
    if (remainingTime > 0) {
      await new Promise(resolve => setTimeout(resolve, remainingTime));
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isLoading && timeout > 0) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, timeout]);

  return {
    isLoading,
    setIsLoading,
    finishLoading
  };
};

// Hook for component-specific loading states
export const useComponentLoading = (componentName: string) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const setLoading = (key: string, loading: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [`${componentName}-${key}`]: loading
    }));
  };

  const isLoading = (key: string) => {
    return loadingStates[`${componentName}-${key}`] || false;
  };

  return {
    setLoading,
    isLoading
  };
};