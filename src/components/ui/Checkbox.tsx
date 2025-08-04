import React, { forwardRef } from 'react';
import './Checkbox.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Call both onChange and onCheckedChange if they exist
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };
    
    return (
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            className={`checkbox-input ${className}`}
            ref={ref}
            onChange={handleChange}
            {...props}
          />
          <div className="checkbox-box"></div>
          {label && <span className="checkbox-text">{label}</span>}
        </label>
      </div>
    );
  }
);
