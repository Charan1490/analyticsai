import React from 'react';
import { motion } from 'framer-motion';
import type { AIInsight } from '../data/mockData';
import './AIInsightCard.css';

interface AIInsightCardProps {
  insight: AIInsight;
  index: number;
  highlighted?: boolean;
}

export const AIInsightCard: React.FC<AIInsightCardProps> = ({ 
  insight, 
  index,
  highlighted = false
}) => {
  // Animation variants for the card
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.15 // stagger effect based on index
      }
    }
  };

  // Get the appropriate CSS class for the badge based on insight type
  const getBadgeClass = () => {
    switch (insight.type) {
      case 'Recommendation':
        return 'badge-info';
      case 'Warning':
        return 'badge-warning';
      case 'Opportunity':
        return 'badge-success';
      default:
        return 'badge-info';
    }
  };

  return (
    <motion.div 
      className={`ai-insight-card ${highlighted ? 'highlighted' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="ai-insight-icon">
        <insight.icon size={24} />
      </div>
      <div className="ai-insight-content">
        <div 
          className={`badge ${getBadgeClass()}`}
        >
          {insight.type}
        </div>
        <p className="ai-insight-text">{insight.insight}</p>
        <button className="ai-insight-action-button">
          Apply Insight
        </button>
      </div>
    </motion.div>
  );
};
