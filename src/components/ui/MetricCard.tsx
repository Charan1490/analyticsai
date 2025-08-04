import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './MetricCard.css';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ElementType;
  color?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color = '#3b82f6'
}) => {
  return (
    <div className="metric-card">
      <div className="metric-card-top">
        <div className="metric-label">{title}</div>
        <div 
          className="metric-icon" 
          style={{ 
            backgroundColor: `${color}15`, 
            color: color,
            boxShadow: `0 4px 12px ${color}30`
          }}
        >
          <Icon size={22} />
        </div>
      </div>

      <div className="metric-value stagger-animate">{value}</div>

      <div className={`metric-change ${changeType}`}>
        {changeType === 'positive' ? (
          <ArrowUpRight size={18} strokeWidth={2.5} />
        ) : (
          <ArrowDownRight size={18} strokeWidth={2.5} />
        )}
        <span>{change}</span>
      </div>
    </div>
  );
};
