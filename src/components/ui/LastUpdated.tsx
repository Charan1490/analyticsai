import React from 'react';
import { Clock } from 'lucide-react';
import './LastUpdated.css';

interface LastUpdatedProps {
  timestamp: Date;
}

export const LastUpdated: React.FC<LastUpdatedProps> = ({ timestamp }) => {
  return (
    <div className="last-updated">
      <Clock size={14} />
      <span>
        Updated: {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </div>
  );
};
