import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { DataTable } from '../components/tables/campaigns/DataTable';
import { columns } from '../components/tables/campaigns/columns';
import { campaigns } from '../data/mockData';
import { Calendar, Plus } from 'lucide-react';
import './CampaignsPage.css';

export const CampaignsPage: React.FC = () => {
  return (
    <div className="campaigns-page">
      <PageHeader
        title="Campaign Management"
        description="View and manage all your marketing campaigns."
      >
        <button className="header-btn">
          <Calendar size={16} />
          <span>Aug 2025</span>
        </button>
        <button className="header-btn create-btn">
          <Plus size={16} />
          <span>New Campaign</span>
        </button>
      </PageHeader>

      <div className="campaigns-container">
        <DataTable columns={columns} data={campaigns} />
      </div>
    </div>
  );
};
