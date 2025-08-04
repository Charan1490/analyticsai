import React from 'react';
import './CustomTooltip.css';

interface TooltipProps {
  active?: boolean;
  payload?: Array<any>;
  label?: string;
  formatter?: (value: number) => string;
  labelFormatter?: (label: string) => string;
}

export const CustomTooltip: React.FC<TooltipProps> = ({
  active,
  payload,
  label,
  formatter = (value) => `${value}`,
  labelFormatter = (label) => `${label}`
}) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="custom-tooltip-card">
      <div className="tooltip-header">
        {labelFormatter(label || '')}
      </div>
      <div className="tooltip-content">
        {payload.map((entry, index) => (
          <div key={index} className="tooltip-item">
            <div className="tooltip-color" style={{ backgroundColor: entry.color }} />
            <span className="tooltip-name">{entry.name || entry.dataKey}:</span>
            <span className="tooltip-value">{formatter(entry.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
