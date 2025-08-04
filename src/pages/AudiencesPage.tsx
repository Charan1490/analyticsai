import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/ui/PageHeader';
import { ChartContainer } from '../components/charts/ChartContainer';
import { PieChartComponent } from '../components/charts/PieChartComponent';
import { BarChartComponent } from '../components/charts/BarChartComponent';
import { conversionBreakdown } from '../data/mockData';
import { ChartSkeleton } from '../components/ui/ChartSkeleton';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Calendar, RefreshCw, Loader2, Users } from 'lucide-react';
import './AudiencesPage.css';

const demographicsData = [
  { name: '18-24', value: 18500, color: '#3b82f6' },
  { name: '25-34', value: 32700, color: '#8b5cf6' },
  { name: '35-44', value: 24600, color: '#10b981' },
  { name: '45-54', value: 15300, color: '#f59e0b' },
  { name: '55+', value: 9800, color: '#9ca3af' }
];

const geoData = [
  { name: 'North America', value: 42500, color: '#3b82f6' },
  { name: 'Europe', value: 28700, color: '#8b5cf6' },
  { name: 'Asia', value: 19600, color: '#10b981' },
  { name: 'Oceania', value: 6300, color: '#f59e0b' },
  { name: 'Other', value: 3900, color: '#9ca3af' }
];

const deviceData = [
  { name: 'Mobile', value: 54500, color: '#3b82f6' },
  { name: 'Desktop', value: 38700, color: '#8b5cf6' },
  { name: 'Tablet', value: 8600, color: '#10b981' },
  { name: 'Other', value: 1200, color: '#9ca3af' }
];

export const AudiencesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate data fetching delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const formatNumber = (value: number) => {
    return value.toLocaleString();
  };
  
  if (isLoading) {
    return (
      <div className="audiences-page">
        <PageHeader
          title="Audience Segments"
          description="Loading audience data..."
        >
          <button className="header-btn" disabled>
            <Calendar size={16} />
            <span>Aug 2025</span>
          </button>
          <button className="header-btn loading" disabled>
            <Loader2 size={16} className="animate-spin" />
            <span>Loading...</span>
          </button>
        </PageHeader>
        
        <div className="audiences-charts-grid">
          <ChartSkeleton title="Age Demographics" height={300} />
          <ChartSkeleton title="Geographic Distribution" height={300} />
          <ChartSkeleton title="Device Usage" height={300} />
          <ChartSkeleton title="Conversion Funnel" height={300} />
        </div>
      </div>
    );
  }
  
  return (
    <div className="audiences-page">
      <PageHeader
        title="Audience Segments"
        description="View and manage your target audience segments."
      >
        <button className="header-btn">
          <Calendar size={16} />
          <span>Aug 2025</span>
        </button>
        <button 
          className="header-btn"
          onClick={() => setIsLoading(true)}
        >
          <RefreshCw size={16} />
          <span>Refresh</span>
        </button>
      </PageHeader>
      
      <div className="audiences-overview">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="audience-stats-card"
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <Users className="card-icon" size={20} />
                Audience Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="audience-stats">
                <div className="audience-stat">
                  <span className="stat-value">94,118</span>
                  <span className="stat-label">Total Users</span>
                </div>
                <div className="audience-stat">
                  <span className="stat-value">62%</span>
                  <span className="stat-label">Returning Users</span>
                </div>
                <div className="audience-stat">
                  <span className="stat-value">3.5m</span>
                  <span className="stat-label">Avg. Session</span>
                </div>
                <div className="audience-stat">
                  <span className="stat-value">42%</span>
                  <span className="stat-label">Conversion Rate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="audiences-charts-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <ChartContainer title="Age Demographics">
            <PieChartComponent 
              data={demographicsData}
              valueFormatter={formatNumber}
              innerRadius={60}
              outerRadius={90}
            />
          </ChartContainer>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <ChartContainer title="Geographic Distribution">
            <PieChartComponent 
              data={geoData}
              valueFormatter={formatNumber}
              innerRadius={60}
              outerRadius={90}
            />
          </ChartContainer>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <ChartContainer title="Device Usage">
            <PieChartComponent 
              data={deviceData}
              valueFormatter={formatNumber}
              innerRadius={60}
              outerRadius={90}
            />
          </ChartContainer>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <ChartContainer title="Conversion Funnel">
            <BarChartComponent 
              data={conversionBreakdown}
              valueKey="value"
              yAxisFormatter={formatNumber}
            />
          </ChartContainer>
        </motion.div>
      </motion.div>
    </div>
  );
};
