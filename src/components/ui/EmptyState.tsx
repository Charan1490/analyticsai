import React from 'react';
import { SearchX } from 'lucide-react';
import './EmptyState.css';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No results found",
  message = "Try adjusting your search or filter criteria to find what you're looking for.",
  icon = <SearchX size={48} />
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        {icon}
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-message">{message}</p>
    </div>
  );
};
