import React from 'react';
import { Skeleton } from './Skeleton';
import './DataTableSkeleton.css';

export const DataTableSkeleton: React.FC = () => {
  return (
    <div className="data-table-skeleton">
      <div className="data-table-header">
        <Skeleton className="w-48 h-8" />
        <Skeleton className="w-32 h-8" />
      </div>
      
      <div className="data-table-content">
        {/* Header row */}
        <div className="data-table-row header">
          <Skeleton className="w-full h-10" />
        </div>
        
        {/* Data rows */}
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="data-table-row">
            <Skeleton className="w-full h-16" />
          </div>
        ))}
      </div>
      
      <div className="data-table-footer">
        <Skeleton className="w-64 h-8" />
        <Skeleton className="w-48 h-8" />
      </div>
    </div>
  );
};
