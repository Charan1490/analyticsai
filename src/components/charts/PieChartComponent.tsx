import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { CustomTooltip } from './CustomTooltip';
import './PieChartComponent.css';

interface PieChartComponentProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  title?: string;
  innerRadius?: number;
  outerRadius?: number;
  valueFormatter?: (value: number) => string;
}

export const PieChartComponent: React.FC<PieChartComponentProps> = ({
  data,
  title,
  innerRadius = 60,
  outerRadius = 80,
  valueFormatter = (value) => value.toLocaleString(),
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const textColor = isDarkMode ? '#f3f4f6' : '#333333';
  
  const renderCustomTooltip = (props: any) => {
    const { active, payload } = props;
    
    if (!active || !payload || !payload.length) return null;
    
    return (
      <CustomTooltip 
        active={active}
        payload={payload}
        formatter={valueFormatter}
      />
    );
  };

  return (
    <div className="pie-chart-component">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              paddingAngle={2}
              label={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {/* Center content rendered manually instead of using a second Pie */}
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle"
              fill={textColor}
              fontSize="14"
              fontWeight="500"
              dy="-10"
            >
              Total
            </text>
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle"
              fill={textColor}
              fontSize="16"
              fontWeight="600"
              dy="15"
            >
              {valueFormatter(data.reduce((sum, entry) => sum + entry.value, 0))}
            </text>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
              wrapperStyle={{
                paddingLeft: '20px',
                fontSize: 12,
                color: textColor
              }}
            />
            <Tooltip content={renderCustomTooltip} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
