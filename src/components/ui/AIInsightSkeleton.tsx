import React from 'react';
import { Skeleton } from './Skeleton';

export const AIInsightSkeleton: React.FC = () => {
  return (
    <div className="ai-insight-card">
      <div className="ai-insight-icon">
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
      <div className="ai-insight-content">
        <Skeleton className="w-20 h-6 mb-2" />
        <Skeleton className="w-full h-16" />
        <div style={{ marginTop: '1rem' }}>
          <Skeleton className="w-24 h-8" />
        </div>
      </div>
    </div>
  );
};
