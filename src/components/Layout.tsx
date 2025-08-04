import React, { useState } from 'react';
import { LayoutGrid, Users, BarChart3, Settings, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { CommandMenu } from './CommandMenu';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const navItems = [
    { icon: <LayoutGrid size={20} />, label: 'Dashboard', path: '/' },
    { icon: <BarChart3 size={20} />, label: 'Campaigns', path: '/campaigns' },
    { icon: <Users size={20} />, label: 'Audiences', path: '/audiences' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];
  
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="layout">
      {/* Mobile navigation toggle */}
      <div className="mobile-nav-toggle" onClick={toggleMobileNav}>
        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      
      {/* Sidebar */}
      <aside className={`sidebar ${isMobileNavOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">ADmyBRAND Insights</h2>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className={`sidebar-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <span className="sidebar-nav-icon">{item.icon}</span>
                  <span className="sidebar-nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      {/* Backdrop overlay for mobile */}
      {isMobileNavOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}
      
      {/* Main content */}
      <main className="main-content">
        <div className="main-header">
          <CommandMenu />
          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </div>
        </div>
        <div className="content-container">
          {children}
        </div>
      </main>
    </div>
  );
};
