import React from 'react';
import { Skeleton } from './Skeleton';
import { AIInsightSkeleton } from './AIInsightSkeleton';

export const AIInsightEngineSkeleton: React.FC = () => {
  return (
    <div className="ai-insight-engine">
      <div className="insight-header">
        <Skeleton className="w-40 h-8" />
        <Skeleton className="w-24 h-6" />
      </div>
      
      <div className="ai-insights-grid">
        {Array(6).fill(0).map((_, i) => (
          <AIInsightSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
