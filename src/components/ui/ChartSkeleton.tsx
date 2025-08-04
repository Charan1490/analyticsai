import React from 'react';
import { Skeleton } from './Skeleton';
import '../charts/ChartContainer.css';

interface ChartSkeletonProps {
  title?: string;
  height?: number;
}

export const ChartSkeleton: React.FC<ChartSkeletonProps> = ({
  title = 'Chart',
  height = 300
}) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <Skeleton className="w-32 h-6" />
      </div>
      <div className="chart-content">
        <Skeleton style={{ height: `${height}px` }} />
      </div>
    </div>
  );
};
