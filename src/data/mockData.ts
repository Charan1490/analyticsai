import { DollarSign, Users, ArrowUpCircle, BarChart, BrainCircuit, ShieldAlert, Rocket, TrendingUp, Target, Lightbulb } from 'lucide-react';

export interface MetricData {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ElementType;
  color: string;
}

// AI Insight Engine data
export interface AIInsight {
  id: string;
  insight: string;
  type: 'Recommendation' | 'Warning' | 'Opportunity';
  icon: React.ElementType;
}

// Revenue data by month
export interface RevenueData {
  name: string;
  revenue: number;
  previousYearRevenue?: number;
}

export const revenueByMonth: RevenueData[] = [
  { name: 'Aug', revenue: 15200, previousYearRevenue: 12500 },
  { name: 'Sep', revenue: 16800, previousYearRevenue: 13400 },
  { name: 'Oct', revenue: 19500, previousYearRevenue: 16200 },
  { name: 'Nov', revenue: 22300, previousYearRevenue: 18100 },
  { name: 'Dec', revenue: 28400, previousYearRevenue: 22500 },
  { name: 'Jan', revenue: 24100, previousYearRevenue: 19800 },
  { name: 'Feb', revenue: 22800, previousYearRevenue: 19200 },
  { name: 'Mar', revenue: 25600, previousYearRevenue: 20300 },
  { name: 'Apr', revenue: 27500, previousYearRevenue: 21200 },
  { name: 'May', revenue: 26300, previousYearRevenue: 22100 },
  { name: 'Jun', revenue: 28200, previousYearRevenue: 23400 },
  { name: 'Jul', revenue: 29800, previousYearRevenue: 24500 }
];

// Source breakdown data
export interface SourceData {
  name: string;
  visitors: number;
  color: string;
}

export const sourceBreakdown: SourceData[] = [
  { name: 'Google', visitors: 24500, color: '#3b82f6' },
  { name: 'Facebook', visitors: 18300, color: '#1877F2' },
  { name: 'Instagram', visitors: 15800, color: '#E1306C' },
  { name: 'Twitter', visitors: 9600, color: '#1DA1F2' },
  { name: 'TikTok', visitors: 12200, color: '#000000' },
  { name: 'Organic', visitors: 8400, color: '#10b981' },
  { name: 'Referral', visitors: 5200, color: '#f59e0b' }
];

// Conversion breakdown data
export interface ConversionData {
  name: string;
  value: number;
  color: string;
}

export const conversionBreakdown: ConversionData[] = [
  { name: 'Direct Purchase', value: 12500, color: '#3b82f6' },
  { name: 'Email Signup', value: 8700, color: '#8b5cf6' },
  { name: 'Free Trial', value: 6200, color: '#10b981' },
  { name: 'Demo Request', value: 4300, color: '#f59e0b' },
  { name: 'Other', value: 2800, color: '#9ca3af' },
  { name: 'Registered', value: 3680, color: '#8b5cf6' }
];

export const metricData: MetricData[] = [
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: '$24,567',
    change: '+15.2%',
    changeType: 'positive',
    icon: DollarSign,
    color: '#3b82f6'
  },
  {
    id: 'active-users',
    title: 'Active Users',
    value: '12,938',
    change: '+8.4%',
    changeType: 'positive',
    icon: Users,
    color: '#8b5cf6'
  },
  {
    id: 'conversions',
    title: 'Conversions',
    value: '1,845',
    change: '-3.2%',
    changeType: 'negative',
    icon: ArrowUpCircle,
    color: '#10b981'
  },
  {
    id: 'avg-engagement',
    title: 'Avg. Engagement Rate',
    value: '4.6%',
    change: '+12.5%',
    changeType: 'positive',
    icon: BarChart,
    color: '#f59e0b'
  }
];

// Campaign performance data
export interface CampaignData {
  id: string;
  name: string;
  platform: string;
  status: 'active' | 'paused' | 'scheduled';
  budget: string;
  spent: string;
  performance: 'up' | 'down' | 'pending';
  performanceValue: string;
  color: string;
}

export const campaignData: CampaignData[] = [
  {
    id: '1',
    name: 'Summer Sale Promotion',
    platform: 'Facebook',
    status: 'active',
    budget: '$1,200',
    spent: '$843',
    performance: 'up',
    performanceValue: '+12.5%',
    color: '#3b82f6'
  },
  {
    id: '2',
    name: 'Brand Awareness',
    platform: 'Instagram',
    status: 'active',
    budget: '$2,500',
    spent: '$1,245',
    performance: 'up',
    performanceValue: '+8.3%',
    color: '#8b5cf6'
  },
  {
    id: '3',
    name: 'Product Launch',
    platform: 'TikTok',
    status: 'scheduled',
    budget: '$3,000',
    spent: '$0',
    performance: 'pending',
    performanceValue: 'Starts Aug 15',
    color: '#14b8a6'
  },
  {
    id: '4',
    name: 'Holiday Special',
    platform: 'Google Ads',
    status: 'paused',
    budget: '$4,500',
    spent: '$1,823',
    performance: 'down',
    performanceValue: '-3.7%',
    color: '#f59e0b'
  }
];

// Expanded Campaign data for data table
export interface CampaignTableData {
  id: string;
  name: string;
  status: 'Active' | 'Paused' | 'Completed';
  startDate: string;
  endDate: string;
  budget: string;
  platform: string;
  target: string;
  description: string;
}

// AI Insights data
export const aiInsights: AIInsight[] = [
  {
    id: "1",
    insight: "High engagement on 'Summer Sale' campaign suggests launching a similar 'Autumn Deals' campaign next month.",
    type: "Recommendation",
    icon: BrainCircuit
  },
  {
    id: "2",
    insight: "The 'Brand Awareness' campaign has a 32% higher CPC than industry average. Consider reviewing ad creatives.",
    type: "Warning",
    icon: ShieldAlert
  },
  {
    id: "3",
    insight: "Mobile users convert at 2.5x the rate of desktop users on your 'Product Launch' campaign. Allocate more budget to mobile ads.",
    type: "Opportunity",
    icon: Rocket
  },
  {
    id: "4",
    insight: "Email campaigns are showing 40% higher ROI than social media. Consider expanding your email marketing strategy.",
    type: "Recommendation",
    icon: Lightbulb
  },
  {
    id: "5",
    insight: "The 18-24 age demographic is showing unusually high engagement on Instagram. Consider creating targeted content.",
    type: "Opportunity",
    icon: Target
  },
  {
    id: "6",
    insight: "Your Facebook conversion rate dropped 15% this week. Check for recent platform algorithm changes.",
    type: "Warning",
    icon: TrendingUp
  }
];

export const campaigns: CampaignTableData[] = [
  {
    id: "1",
    name: "Q3 Summer Sale",
    status: "Active",
    startDate: "2025-07-15",
    endDate: "2025-08-15",
    budget: "$12,500",
    platform: "Facebook",
    target: "New Customers",
    description: "Summer promotion targeting beach and vacation products"
  },
  {
    id: "2",
    name: "Brand Awareness Push",
    status: "Active",
    startDate: "2025-06-01",
    endDate: "2025-09-30",
    budget: "$24,000",
    platform: "Instagram",
    target: "18-34 Age Group",
    description: "Increasing brand visibility among younger audiences"
  },
  {
    id: "3",
    name: "Back to School",
    status: "Active",
    startDate: "2025-07-20",
    endDate: "2025-09-10",
    budget: "$18,750",
    platform: "Google",
    target: "Parents",
    description: "Promotional campaign for school supplies and children's products"
  },
  {
    id: "4",
    name: "Spring Collection",
    status: "Completed",
    startDate: "2025-03-01",
    endDate: "2025-05-31",
    budget: "$32,000",
    platform: "Multiple",
    target: "Existing Customers",
    description: "Showcasing the new spring fashion line across all platforms"
  },
  {
    id: "5",
    name: "Holiday Shopping",
    status: "Paused",
    startDate: "2025-11-01",
    endDate: "2025-12-25",
    budget: "$45,000",
    platform: "Multiple",
    target: "All Segments",
    description: "Major holiday season promotional campaign"
  },
  {
    id: "6",
    name: "App Download Push",
    status: "Active",
    startDate: "2025-07-01",
    endDate: "2025-10-31",
    budget: "$15,000",
    platform: "Google",
    target: "Mobile Users",
    description: "Campaign to increase app downloads and engagement"
  },
  {
    id: "7",
    name: "New Product Launch",
    status: "Paused",
    startDate: "2025-08-15",
    endDate: "2025-09-30",
    budget: "$28,500",
    platform: "Multiple",
    target: "Early Adopters",
    description: "Launch campaign for our newest flagship product"
  },
  {
    id: "8",
    name: "Valentine's Day Special",
    status: "Completed",
    startDate: "2025-02-01",
    endDate: "2025-02-14",
    budget: "$9,500",
    platform: "Instagram",
    target: "Couples",
    description: "Romantic themed campaign for Valentine's Day merchandise"
  },
  {
    id: "9",
    name: "Summer Travel Guide",
    status: "Active",
    startDate: "2025-05-15",
    endDate: "2025-08-15",
    budget: "$22,000",
    platform: "Facebook",
    target: "Travel Enthusiasts",
    description: "Content marketing campaign featuring summer travel destinations"
  },
  {
    id: "10",
    name: "Customer Loyalty Program",
    status: "Active",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    budget: "$36,000",
    platform: "Email",
    target: "Existing Customers",
    description: "Year-long campaign to boost customer retention and loyalty"
  },
  {
    id: "11",
    name: "Flash Sale Weekend",
    status: "Completed",
    startDate: "2025-06-10",
    endDate: "2025-06-12",
    budget: "$7,500",
    platform: "All Digital",
    target: "All Segments",
    description: "Weekend-only flash sale with deep discounts"
  },
  {
    id: "12",
    name: "Influencer Partnership",
    status: "Active",
    startDate: "2025-07-01",
    endDate: "2025-09-30",
    budget: "$42,000",
    platform: "Instagram",
    target: "Fashion Enthusiasts",
    description: "Collaboration with top fashion influencers"
  },
  {
    id: "13",
    name: "Sports Event Sponsorship",
    status: "Active",
    startDate: "2025-06-15",
    endDate: "2025-08-15",
    budget: "$65,000",
    platform: "TV & Digital",
    target: "Sports Fans",
    description: "Sponsorship of major summer sporting events"
  },
  {
    id: "14",
    name: "Email Re-engagement",
    status: "Paused",
    startDate: "2025-07-10",
    endDate: "2025-08-10",
    budget: "$5,200",
    platform: "Email",
    target: "Inactive Customers",
    description: "Campaign to re-engage customers who haven't purchased recently"
  },
  {
    id: "15",
    name: "Winter Clearance",
    status: "Completed",
    startDate: "2025-01-15",
    endDate: "2025-02-28",
    budget: "$18,000",
    platform: "Multiple",
    target: "All Segments",
    description: "Clearance campaign for winter inventory"
  },
  {
    id: "16",
    name: "B2B Partnership",
    status: "Active",
    startDate: "2025-06-01",
    endDate: "2025-12-31",
    budget: "$55,000",
    platform: "LinkedIn",
    target: "Business Clients",
    description: "Business-focused campaign targeting corporate partnerships"
  },
  {
    id: "17",
    name: "Local Store Promotion",
    status: "Active",
    startDate: "2025-07-01",
    endDate: "2025-08-31",
    budget: "$12,800",
    platform: "Local SEO & Social",
    target: "Local Customers",
    description: "Geo-targeted campaign promoting in-store visits"
  },
  {
    id: "18",
    name: "Product Education Series",
    status: "Paused",
    startDate: "2025-08-01",
    endDate: "2025-10-31",
    budget: "$16,500",
    platform: "YouTube",
    target: "Product Researchers",
    description: "Educational content series about product features and benefits"
  },
  {
    id: "19",
    name: "Fall Fashion Preview",
    status: "Active",
    startDate: "2025-08-01",
    endDate: "2025-09-15",
    budget: "$21,000",
    platform: "Instagram",
    target: "Fashion Followers",
    description: "Preview campaign for the upcoming fall fashion collection"
  },
  {
    id: "20",
    name: "End of Summer Sale",
    status: "Active",
    startDate: "2025-08-15",
    endDate: "2025-09-15",
    budget: "$19,750",
    platform: "All Digital",
    target: "All Segments",
    description: "Final summer merchandise clearance campaign"
  },
  {
    id: "21",
    name: "Anniversary Celebration",
    status: "Paused",
    startDate: "2025-09-01",
    endDate: "2025-09-30",
    budget: "$32,500",
    platform: "Multiple",
    target: "All Customers",
    description: "Special campaign celebrating company anniversary"
  },
  {
    id: "22",
    name: "Student Discount Program",
    status: "Active",
    startDate: "2025-08-01",
    endDate: "2025-09-30",
    budget: "$14,200",
    platform: "TikTok & Instagram",
    target: "Students",
    description: "Special discounts and promotions for students returning to school"
  }
];
