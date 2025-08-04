import React from 'react';
import { DataTable } from './EnhancedDataTable';
import { ArrowUp, ArrowDown } from 'lucide-react';
import './ExampleTable.css';

// Define your data type
interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  costPerConversion: number;
}

// Example data
const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale 2025',
    status: 'active',
    budget: 15000,
    spent: 7834.25,
    impressions: 358432,
    clicks: 12543,
    ctr: 3.5,
    cpc: 0.62,
    conversions: 1254,
    costPerConversion: 6.25
  },
  {
    id: '2',
    name: 'Product Launch - Alpha',
    status: 'active',
    budget: 25000,
    spent: 12453.84,
    impressions: 543210,
    clicks: 18765,
    ctr: 3.45,
    cpc: 0.66,
    conversions: 2134,
    costPerConversion: 5.84
  },
  {
    id: '3',
    name: 'Brand Awareness Q3',
    status: 'paused',
    budget: 10000,
    spent: 4567.12,
    impressions: 234567,
    clicks: 6754,
    ctr: 2.88,
    cpc: 0.68,
    conversions: 543,
    costPerConversion: 8.41
  },
  {
    id: '4',
    name: 'Retargeting Campaign',
    status: 'active',
    budget: 5000,
    spent: 2345.67,
    impressions: 156789,
    clicks: 7654,
    ctr: 4.88,
    cpc: 0.31,
    conversions: 876,
    costPerConversion: 2.68
  },
  {
    id: '5',
    name: 'Holiday Special 2024',
    status: 'completed',
    budget: 20000,
    spent: 20000,
    impressions: 687543,
    clicks: 24321,
    ctr: 3.54,
    cpc: 0.82,
    conversions: 3210,
    costPerConversion: 6.23
  },
  {
    id: '6',
    name: 'New Customer Acquisition',
    status: 'active',
    budget: 30000,
    spent: 12567.34,
    impressions: 456789,
    clicks: 15678,
    ctr: 3.43,
    cpc: 0.80,
    conversions: 1876,
    costPerConversion: 6.70
  }
];

// Define columns
const columns = [
  {
    accessorKey: 'name',
    header: 'Campaign Name',
    cell: ({ row }: any) => <div className="campaign-name">{row.getValue('name')}</div>
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: any) => {
      const status = row.getValue('status');
      return (
        <div className={`status-badge status-${status}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      );
    }
  },
  {
    accessorKey: 'budget',
    header: 'Budget',
    cell: ({ row }: any) => <div className="budget">${row.getValue('budget').toLocaleString()}</div>
  },
  {
    accessorKey: 'spent',
    header: 'Spent',
    cell: ({ row }: any) => <div className="spent">${row.getValue('spent').toLocaleString()}</div>
  },
  {
    accessorKey: 'impressions',
    header: 'Impressions',
    cell: ({ row }: any) => <div>{row.getValue('impressions').toLocaleString()}</div>
  },
  {
    accessorKey: 'clicks',
    header: 'Clicks',
    cell: ({ row }: any) => <div>{row.getValue('clicks').toLocaleString()}</div>
  },
  {
    accessorKey: 'ctr',
    header: 'CTR',
    cell: ({ row }: any) => <div>{row.getValue('ctr')}%</div>
  },
  {
    accessorKey: 'conversions',
    header: 'Conversions',
    cell: ({ row }: any) => {
      const value = row.getValue('conversions');
      const prevValue = value - Math.floor(Math.random() * 100);
      const change = value - prevValue;
      const isPositive = change >= 0;
      
      return (
        <div className="metric-with-change">
          <span>{value.toLocaleString()}</span>
          <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? <ArrowUp className="change-icon" /> : <ArrowDown className="change-icon" />}
            {Math.abs(change)}
          </span>
        </div>
      );
    }
  },
  {
    accessorKey: 'costPerConversion',
    header: 'Cost/Conv.',
    cell: ({ row }: any) => <div>${row.getValue('costPerConversion').toFixed(2)}</div>
  }
];

export const CampaignTable: React.FC = () => {
  return (
    <div className="campaign-table-container">
      <h2 className="table-title">Campaign Performance</h2>
      <DataTable 
        columns={columns}
        data={campaigns}
        searchKey="campaigns"
        initialPageSize={5}
      />
    </div>
  );
}
