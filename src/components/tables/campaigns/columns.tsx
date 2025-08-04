import type { ColumnDef } from '@tanstack/react-table';
import { Badge } from '../../ui/Badge';
import { Checkbox } from '../../ui/Checkbox';
import type { CampaignTableData } from '../../../data/mockData';
import { ArrowUpDown } from 'lucide-react';

// Helper function to format date
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(date);
};

// Badge variant based on status
const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Paused':
      return 'warning';
    case 'Completed':
      return 'info';
    default:
      return 'default';
  }
};

export const columns: ColumnDef<CampaignTableData>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(!!e.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <button
          className="sort-button"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Campaign Name
          <ArrowUpDown size={16} />
        </button>
      )
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue('name')}</div>,
    enableSorting: true,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge variant={getStatusVariant(status)}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    cell: ({ row }) => formatDate(row.getValue('startDate')),
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
    cell: ({ row }) => formatDate(row.getValue('endDate')),
  },
  {
    accessorKey: 'budget',
    header: 'Budget',
    cell: ({ row }) => <div className="font-medium">{row.getValue('budget')}</div>,
  },
  {
    accessorKey: 'platform',
    header: 'Platform',
    cell: ({ row }) => row.getValue('platform'),
  },
];
