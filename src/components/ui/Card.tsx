import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`glass-card-header ${className}`}>{children}</div>
  );
};

export const CardTitle: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h3 className={`glass-card-title ${className}`}>{children}</h3>
  );
};

export const CardDescription: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <p className={`glass-card-description ${className}`}>{children}</p>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`glass-card-content ${className}`}>{children}</div>
  );
};

export const CardFooter: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`glass-card-footer ${className}`}>{children}</div>
  );
};
