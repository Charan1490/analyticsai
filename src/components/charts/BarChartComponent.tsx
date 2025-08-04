import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { CustomTooltip } from './CustomTooltip';
import './BarChartComponent.css';

interface BarChartComponentProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  title?: string;
  valueKey?: string;
  yAxisFormatter?: (value: number) => string;
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({
  data,
  title,
  valueKey = 'value',
  yAxisFormatter = (value) => value.toLocaleString()
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const textColor = isDarkMode ? '#f3f4f6' : '#333333';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  const renderCustomTooltip = (props: any) => {
    const { active, payload, label } = props;
    
    if (!active || !payload || !payload.length) return null;
    
    return (
      <CustomTooltip 
        active={active}
        payload={payload}
        label={label}
        formatter={yAxisFormatter}
      />
    );
  };

  return (
    <div className="bar-chart-component">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 10, right: 30, left: 20, bottom: 25 }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke={textColor}
              tick={{ fill: textColor, fontSize: 12 }}
              axisLine={{ stroke: gridColor }}
              tickLine={{ stroke: gridColor }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              stroke={textColor}
              tick={{ fill: textColor, fontSize: 12 }}
              tickFormatter={yAxisFormatter}
              axisLine={{ stroke: gridColor }}
              tickLine={{ stroke: gridColor }}
            />
            <Tooltip content={renderCustomTooltip} />
            <Bar dataKey={valueKey} radius={[6, 6, 0, 0]} maxBarSize={60}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
