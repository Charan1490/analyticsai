import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useTheme } from '../contexts/ThemeContext';
import './PerformanceChart.css';

const data = [
  { name: 'Jan', facebook: 4000, instagram: 2400, tiktok: 1600 },
  { name: 'Feb', facebook: 3000, instagram: 2800, tiktok: 2200 },
  { name: 'Mar', facebook: 2000, instagram: 3200, tiktok: 2800 },
  { name: 'Apr', facebook: 2780, instagram: 3908, tiktok: 2500 },
  { name: 'May', facebook: 1890, instagram: 4800, tiktok: 2300 },
  { name: 'Jun', facebook: 2390, instagram: 3800, tiktok: 2800 },
  { name: 'Jul', facebook: 3490, instagram: 4300, tiktok: 3500 },
];

export const PerformanceChart: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const textColor = isDarkMode ? '#f3f4f6' : '#333333';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  
  return (
    <div className="performance-chart">
      <div className="chart-header">
        <h2>Campaign Performance</h2>
        <div className="chart-filters">
          <select className="chart-filter">
            <option value="6months">Last 6 months</option>
            <option value="year">Last 12 months</option>
            <option value="30days">Last 30 days</option>
          </select>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorFacebook" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTiktok" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              stroke={textColor} 
              tick={{ fill: textColor }}
            />
            <YAxis 
              stroke={textColor} 
              tick={{ fill: textColor }}
            />
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDarkMode ? '#1e293b' : '#fff',
                borderColor: isDarkMode ? '#334155' : '#e5e7eb',
                color: textColor
              }} 
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="facebook" 
              name="Facebook" 
              stroke="#3b82f6" 
              fillOpacity={1} 
              fill="url(#colorFacebook)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="instagram" 
              name="Instagram" 
              stroke="#8b5cf6" 
              fillOpacity={1} 
              fill="url(#colorInstagram)"
              strokeWidth={2} 
            />
            <Area 
              type="monotone" 
              dataKey="tiktok" 
              name="TikTok" 
              stroke="#14b8a6" 
              fillOpacity={1} 
              fill="url(#colorTiktok)"
              strokeWidth={2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
