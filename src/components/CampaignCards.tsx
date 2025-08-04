import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, MoreHorizontal } from 'lucide-react';
import './CampaignCards.css';

const campaigns = [
  {
    id: 1,
    name: 'Summer Sale Promotion',
    platform: 'Facebook',
    status: 'active',
    budget: '$1,200',
    spent: '$843',
    performance: 'up',
    performanceValue: '+12.5%',
    color: '#3b82f6'
  },
  {
    id: 2,
    name: 'Brand Awareness',
    platform: 'Instagram',
    status: 'active',
    budget: '$2,500',
    spent: '$1,245',
    performance: 'up',
    performanceValue: '+8.3%',
    color: '#8b5cf6'
  },
  {
    id: 3,
    name: 'Product Launch',
    platform: 'TikTok',
    status: 'scheduled',
    budget: '$3,000',
    spent: '$0',
    performance: 'pending',
    performanceValue: 'Starts Aug 15',
    color: '#14b8a6'
  },
  {
    id: 4,
    name: 'Holiday Special',
    platform: 'Google Ads',
    status: 'paused',
    budget: '$4,500',
    spent: '$1,823',
    performance: 'down',
    performanceValue: '-3.7%',
    color: '#f59e0b'
  }
];

export const CampaignCards: React.FC = () => {
  return (
    <div className="campaign-cards">
      <div className="campaign-header">
        <h2>Active Campaigns</h2>
        <button className="view-all-btn">View All Campaigns</button>
      </div>
      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <motion.div
            key={campaign.id}
            className="campaign-card"
            whileHover={{ 
              x: 5,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="campaign-left">
              <div className="campaign-platform" style={{ backgroundColor: campaign.color }}>
                {campaign.platform.substring(0, 1)}
              </div>
              <div className="campaign-name-container">
                <h3 className="campaign-name">{campaign.name}</h3>
                <span className="campaign-platform-name">{campaign.platform}</span>
              </div>
            </div>
            
            <div className="campaign-details">
              <div className="campaign-stat">
                <span className="stat-label">Budget</span>
                <span className="stat-value">{campaign.budget}</span>
              </div>
              <div className="campaign-stat">
                <span className="stat-label">Spent</span>
                <span className="stat-value">{campaign.spent}</span>
              </div>
              <div className="campaign-stat">
                <span className="stat-label">Status</span>
                <span className={`campaign-status ${campaign.status}`}>
                  {campaign.status === 'active' && 'Active'}
                  {campaign.status === 'paused' && 'Paused'}
                  {campaign.status === 'scheduled' && 'Scheduled'}
                </span>
              </div>
            </div>
            
            <div className="campaign-right">
              <div className="campaign-performance">
                {campaign.performance === 'up' && (
                  <div className="performance up">
                    <TrendingUp size={16} />
                    <span>{campaign.performanceValue}</span>
                  </div>
                )}
                {campaign.performance === 'down' && (
                  <div className="performance down">
                    <TrendingDown size={16} />
                    <span>{campaign.performanceValue}</span>
                  </div>
                )}
                {campaign.performance === 'pending' && (
                  <div className="performance pending">
                    <Clock size={16} />
                    <span>{campaign.performanceValue}</span>
                  </div>
                )}
              </div>
              <div className="campaign-menu">
                <MoreHorizontal size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
