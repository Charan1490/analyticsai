import React from 'react';
import { Skeleton } from './Skeleton';
import './MetricCard.css';

export const MetricCardSkeleton: React.FC = () => {
  return (
    <div className="metric-card">
      <div className="metric-card-top">
        <Skeleton style={{ width: '80px', height: '16px' }} />
        <Skeleton style={{ 
          width: '48px', 
          height: '48px', 
          borderRadius: '1rem' 
        }} />
      </div>
      
      <Skeleton style={{ 
        width: '100px', 
        height: '30px', 
        marginBottom: '1.25rem' 
      }} />
      
      <Skeleton style={{ 
        width: '80px', 
        height: '32px', 
        borderRadius: '0.5rem',
        marginTop: 'auto'
      }} />
    </div>
  );
};
