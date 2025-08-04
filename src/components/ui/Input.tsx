import React, { useState } from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  className = '',
  icon,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (props.onBlur) props.onBlur(e);
  };
  
  return (
    <div className="input-container">
      <div className={`input-wrapper ${isFocused ? 'is-focused' : ''} ${error ? 'has-error' : ''} ${className}`}>
        {icon && <div className="input-icon">{icon}</div>}
        <input
          className={`input ${icon ? 'has-icon' : ''}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};
