import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { AIInsightCard } from './AIInsightCard';
import { aiInsights } from '../data/mockData';
import './AIInsightEngine.css';

export const AIInsightEngine: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [highlightedInsight, setHighlightedInsight] = useState(0);
  
  // Animation variants for container (parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Cycle through insights
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedInsight((prev) => 
        prev === aiInsights.length - 1 ? 0 : prev + 1
      );
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="ai-insight-engine">
        <div className="insight-header">
          <h2><BrainCircuit size={20} /> AI Insight Engine</h2>
          <span className="insight-badge">Analyzing...</span>
        </div>
        <div className="insights-loading">
          <div className="pulse-loader"></div>
          <p>Processing campaign data and generating insights...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-insight-engine">
      <motion.div 
        className="insight-header"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2><BrainCircuit size={20} /> AI Insight Engine</h2>
        <span className="insight-badge">{aiInsights.length} New Insights</span>
      </motion.div>
      
      <motion.div 
        className="ai-insights-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {aiInsights.map((insight, index) => (
          <AIInsightCard 
            key={insight.id} 
            insight={insight} 
            index={index}
            highlighted={highlightedInsight === index}
          />
        ))}
      </motion.div>
    </div>
  );
};
