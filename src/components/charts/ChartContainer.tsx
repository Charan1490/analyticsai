import React from 'react';
import { motion } from 'framer-motion';
import './ChartContainer.css';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children,
  className = '',
  actions
}) => {
  return (
    <motion.div 
      className={`chart-container-wrapper ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        {actions && <div className="chart-actions">{actions}</div>}
      </div>
      <div className="chart-body">
        {children}
      </div>
    </motion.div>
  );
};
