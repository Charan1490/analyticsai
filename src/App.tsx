import './App.css';
import './animations.css'; // Import animations
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { CampaignsPage } from './pages/CampaignsPage';
import { AudiencesPage } from './pages/AudiencesPage';
import { SettingsPage } from './pages/SettingsPage';
import { AnimatedSection } from './components/AnimatedSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComponentShowcase from './components/examples/ComponentShowcase';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <AnimatedSection>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/audiences" element={<AudiencesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/showcase" element={<ComponentShowcase />} />
            </Routes>
          </AnimatedSection>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
