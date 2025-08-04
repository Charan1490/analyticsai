import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/ui/PageHeader';
import { MetricCard } from '../components/ui/MetricCard';
import { Skeleton } from '../components/ui/Skeleton';
import { MetricCardSkeleton } from '../components/ui/MetricCardSkeleton';
import { ChartSkeleton } from '../components/ui/ChartSkeleton';
import { DataTableSkeleton } from '../components/ui/DataTableSkeleton';
import { AIInsightEngineSkeleton } from '../components/ui/AIInsightEngineSkeleton';
import { metricData, revenueByMonth, sourceBreakdown, conversionBreakdown } from '../data/mockData';
import type { MetricData } from '../data/mockData';
import { PerformanceChart } from '../components/PerformanceChart';
import { CampaignCards } from '../components/CampaignCards';
import { AIInsightEngine } from '../components/AIInsightEngine';
import { Calendar, RefreshCw, Loader2 } from 'lucide-react';
import { LastUpdated } from '../components/ui/LastUpdated';
import { LineChartComponent } from '../components/charts/LineChartComponent';
import { BarChartComponent } from '../components/charts/BarChartComponent';
import { PieChartComponent } from '../components/charts/PieChartComponent';
import { ChartContainer } from '../components/charts/ChartContainer';
import { CampaignTable } from '../components/tables/CampaignTable';
import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [metrics, setMetrics] = useState<MetricData[]>(metricData);
  
  // Simulate data fetching delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Real-time data updates feature
  
  // Simulate real-time updates every 30 seconds
  useEffect(() => {
    const updateInterval = setInterval(() => {
      // Update metrics with small random variations
      const updatedMetrics = metrics.map(metric => {
        if (metric.id === 'total-revenue') {
          const currentValue = parseInt(metric.value.replace(/[$,]/g, ''));
          const randomChange = Math.floor(Math.random() * 500) - 200; // Random change between -200 and +300
          const newValue = currentValue + randomChange;
          const changePercentNum = ((newValue - currentValue) / currentValue * 100);
          const changePercent = changePercentNum.toFixed(1);
          
          return {
            ...metric,
            value: `$${newValue.toLocaleString()}`,
            change: `${changePercentNum > 0 ? '+' : ''}${changePercent}%`,
            changeType: changePercentNum >= 0 ? 'positive' : 'negative' as 'positive' | 'negative'
          };
        }
        return metric;
      });
      
      setMetrics(updatedMetrics as MetricData[]);
      setLastUpdated(new Date());
    }, 30000);
    
    return () => clearInterval(updateInterval);
  }, [metrics]);
  
  // Format numbers with dollar sign
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  // Format numbers for visitors
  const formatVisitors = (value: number) => {
    return value.toLocaleString();
  };

  // Prepare data for the BarChart
  const trafficSourceData = sourceBreakdown.map(source => ({
    name: source.name,
    value: source.visitors,
    color: source.color
  }));

  // Render function for loading state
  const renderLoadingState = () => (
    <div className="dashboard-page">
      <PageHeader 
        title="Dashboard Overview" 
        description="Loading dashboard data..."
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
      
      {/* Metric Card Skeletons */}
      <div className="metrics-grid">
        {Array(4).fill(0).map((_, i) => (
          <MetricCardSkeleton key={i} />
        ))}
      </div>
      
      {/* Chart Skeletons */}
      <div className="charts-grid">
        <ChartSkeleton title="Revenue Over Time" height={300} />
        <ChartSkeleton title="Traffic Sources" height={300} />
      </div>
      <div className="conversion-chart-container">
        <ChartSkeleton title="Conversion Breakdown" height={300} />
      </div>
      
      {/* Performance Chart Skeleton */}
      <ChartSkeleton title="Performance" height={250} />
      
      {/* Campaign Cards Skeleton */}
      <div className="campaign-cards">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="campaign-card">
            <Skeleton className="w-full h-32" />
          </div>
        ))}
      </div>
      
      {/* Recent Campaigns Skeleton */}
      <div className="campaigns-table-section">
        <Skeleton className="w-48 h-8 mb-4" />
        <DataTableSkeleton />
      </div>
      
      {/* AI Insights Skeleton */}
      <AIInsightEngineSkeleton />
    </div>
  );

  if (isLoading) {
    return renderLoadingState();
  }

  return (
    <div className="dashboard-page">
      <PageHeader 
        title="Dashboard Overview" 
        description="Monitor key metrics, campaign performance, and AI-powered insights."
      >
        <LastUpdated timestamp={lastUpdated} />
        <button className="header-btn">
          <Calendar size={16} />
          <span>Aug 2025</span>
        </button>
        <button 
          className="header-btn"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setLastUpdated(new Date());
              setIsLoading(false);
            }, 1000);
          }}
        >
          <RefreshCw size={16} />
          <span>Refresh</span>
        </button>
      </PageHeader>

      {/* Metrics Grid */}
      <motion.div 
        className="metrics-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }
            }}
          >
            <MetricCard
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              icon={metric.icon}
              color={metric.color}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div 
        className="charts-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ChartContainer title="Revenue Over Time">
            <LineChartComponent 
              data={revenueByMonth}
              dataKeys={[
                { key: 'revenue', color: '#3b82f6', name: 'Current Year' },
                { key: 'previousYearRevenue', color: '#9ca3af', name: 'Previous Year' }
              ]}
              yAxisFormatter={formatCurrency}
            />
          </ChartContainer>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <ChartContainer title="Traffic Sources">
            <BarChartComponent 
              data={trafficSourceData}
              valueKey="value"
              yAxisFormatter={formatVisitors}
            />
          </ChartContainer>
        </motion.div>
      </motion.div>
      
      {/* Conversion Breakdown Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="conversion-chart-container"
      >
        <ChartContainer title="Conversion Breakdown">
          <PieChartComponent 
            data={conversionBreakdown}
            valueFormatter={formatVisitors}
            innerRadius={60}
            outerRadius={90}
          />
        </ChartContainer>
      </motion.div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <PerformanceChart />
      </motion.div>

      {/* Campaign Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <CampaignCards />
      </motion.div>

      {/* Recent Campaigns Data Table */}
      <motion.div 
        className="campaigns-table-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          Recent Campaigns
        </motion.h2>
        <CampaignTable />
      </motion.div>

      {/* AI Insight Engine */}
      <AIInsightEngine />
    </div>
  );
};
