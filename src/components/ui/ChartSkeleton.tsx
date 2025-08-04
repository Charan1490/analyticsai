import React from 'react';
import { Skeleton } from './Skeleton';
import '../charts/ChartContainer.css';

interface ChartSkeletonProps {
  title?: string;
  height?: number;
}

export const ChartSkeleton: React.FC<ChartSkeletonProps> = ({
  title,
  height = 300
}) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        {/* Using the title prop for aria-label to make it useful without triggering lint warnings */}
        <Skeleton className="w-32 h-6" aria-label={title || 'Chart title'} />
      </div>
      <div className="chart-content">
        <Skeleton style={{ height: `${height}px` }} />
      </div>
    </div>
  );
};
