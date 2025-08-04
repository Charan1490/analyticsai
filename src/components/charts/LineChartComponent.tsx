import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { CustomTooltip } from './CustomTooltip';
import './LineChartComponent.css';

interface LineChartComponentProps {
  data: any[];
  title?: string;
  dataKeys: {
    key: string;
    color: string;
    name?: string;
  }[];
  yAxisFormatter?: (value: number) => string;
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({
  data,
  title,
  dataKeys,
  yAxisFormatter = (value) => `$${value.toLocaleString()}`
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const textColor = isDarkMode ? '#f3f4f6' : '#333333';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  // Import the custom tooltip
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
    <div className="line-chart-component">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 25 }}>
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
            <Legend 
              wrapperStyle={{
                paddingTop: 15,
                fontSize: 12,
                color: textColor
              }}
            />
            {dataKeys.map((dataKey, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={dataKey.key}
                stroke={dataKey.color}
                name={dataKey.name || dataKey.key}
                strokeWidth={2.5}
                dot={{ r: 4, fill: dataKey.color, stroke: dataKey.color }}
                activeDot={{ r: 6, stroke: dataKey.color, strokeWidth: 2 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
