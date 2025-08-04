import React from 'react';
import { DollarSign, Users, MousePointer, BarChart } from 'lucide-react';
import './DashboardStats.css';

export const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Ad Spend',
      value: '$12,456',
      change: '+8.2%',
      positive: true,
      icon: <DollarSign />,
      color: '#3b82f6'
    },
    {
      title: 'Impressions',
      value: '1.2M',
      change: '+12.5%',
      positive: true,
      icon: <Users />,
      color: '#8b5cf6'
    },
    {
      title: 'Clicks',
      value: '48.6K',
      change: '+5.4%',
      positive: true,
      icon: <MousePointer />,
      color: '#10b981'
    },
    {
      title: 'Conversions',
      value: '2,456',
      change: '-2.3%',
      positive: false,
      icon: <BarChart />,
      color: '#f59e0b'
    }
  ];

  return (
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div 
            className="stat-icon" 
            style={{ backgroundColor: `${stat.color}10`, color: stat.color }}
          >
            {stat.icon}
          </div>
          <div className="stat-content">
            <h3 className="stat-title">{stat.title}</h3>
            <div className="stat-value-container">
              <span className="stat-value">{stat.value}</span>
              <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
