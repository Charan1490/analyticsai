import { useState, useMemo } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import type { SortingState, ColumnFiltersState } from '@tanstack/react-table';
import { Input } from '../../ui/Input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../../ui/table/Table';
import { Search, ChevronLeft, ChevronRight, Download, SearchX } from 'lucide-react';
import { EmptyState } from '../../ui/EmptyState';
import Papa from 'papaparse';
import './DataTable.css';

interface DataTableProps<TData> {
  columns: any[];
  data: TData[];
  initialPageSize?: number;
}

export function DataTable<TData>({
  columns,
  data,
  initialPageSize = 5
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [rowSelection, setRowSelection] = useState({});
  
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: initialPageSize,
      },
    }
  });
  
  // Export table data to CSV
  const exportToCsv = () => {
    const filteredData = table.getFilteredRowModel().rows.map(row => {
      const rowData: Record<string, any> = {};
      columns.forEach(column => {
        // @ts-ignore - we know the accessor exists
        const key = column.accessorKey || column.id;
        // @ts-ignore - we know the getValue method exists
        rowData[column.header || key] = row.getValue(key);
      });
      return rowData;
    });
    
    const csv = Papa.unparse(filteredData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `campaign-data-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="data-table-container">
      <div className="data-table-header">
        <div className="data-table-search-container">
          <Input
            placeholder="Search campaigns..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            icon={<Search size={16} />}
            className="search-input"
          />
          
          <button 
            className="export-button"
            onClick={exportToCsv}
            title="Export to CSV"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
        
        <div className="data-table-selected">
          {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <p className="selected-count">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected
            </p>
          )}
        </div>
      </div>
      
      <div className="data-table-wrapper">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={`interactive-row ${row.getIsSelected() ? 'selected' : ''}`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  <EmptyState 
                    icon={<SearchX size={40} />}
                    title="No campaigns found" 
                    message="Try adjusting your search or filter criteria to find what you're looking for."
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="data-table-footer">
        <div className="data-table-pagination-info">
          Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{" "}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          of {table.getFilteredRowModel().rows.length}
        </div>
        
        <div className="data-table-pagination">
          <button
            className="pagination-button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>
          <div className="pagination-pages">
            <span className="page-info">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
          </div>
          <button
            className="pagination-button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
