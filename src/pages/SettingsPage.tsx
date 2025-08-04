import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../components/ui/DropdownMenu';
import './SettingsPage.css';

// Icons for settings page
const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const AppearanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
  </svg>
);

const NotificationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const SecurityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const BillingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const IntegrationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
    <line x1="2" y1="12" x2="22" y2="12"></line>
  </svg>
);

// Interfaces for form state
interface ProfileFormState {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  bio: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  marketingEmails: boolean;
  newFeatures: boolean;
}

interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  compact: boolean;
  animationsEnabled: boolean;
  fontScale: number;
}

interface SecuritySettings {
  twoFactorEnabled: boolean;
  passwordLastChanged: string;
  sessionTimeout: number;
  loginNotifications: boolean;
}

export const SettingsPage: React.FC = () => {
  // Active tab state
  const [activeTab, setActiveTab] = useState<string>('profile');

  // Form states
  const [profileForm, setProfileForm] = useState<ProfileFormState>({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    jobTitle: 'Product Designer',
    bio: "I'm a product designer based in San Francisco. I enjoy creating user-centric, delightful, and human experiences."
  });

  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    weeklyDigest: true,
    marketingEmails: false,
    newFeatures: true
  });

  const [appearanceSettings, setAppearanceSettings] = useState<AppearanceSettings>({
    theme: 'system',
    compact: false,
    animationsEnabled: true,
    fontScale: 1
  });

  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    twoFactorEnabled: false,
    passwordLastChanged: '2025-07-15',
    sessionTimeout: 30,
    loginNotifications: true
  });

  // Form handlers
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileForm({
      ...profileForm,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationSettings({
      ...notificationSettings,
      [e.target.name]: e.target.checked
    });
  };

  const handleAppearanceChange = (key: string, value: any) => {
    setAppearanceSettings({
      ...appearanceSettings,
      [key]: value
    });
  };

  const handleToggleSwitch = (key: string, currentState: boolean, stateSetter: Function, stateObject: any) => {
    stateSetter({
      ...stateObject,
      [key]: !currentState
    });
  };

  // Save handlers
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to an API
    showNotification('Profile updated successfully!');
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Notification preferences updated!');
  };

  const handleSaveAppearance = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Appearance settings updated!');
  };

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Security settings updated!');
  };

  // Simple notification system
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="settings-page">
      <PageHeader
        title="Settings"
        description="Configure your dashboard preferences and account settings."
      />
      
      {notification && (
        <div className="notification-toast">
          <span>{notification}</span>
        </div>
      )}
      
      <div className="settings-container">
        <div className="settings-layout">
          {/* Settings sidebar */}
          <div className="settings-sidebar">
            <nav className="settings-nav">
              <button 
                onClick={() => setActiveTab('profile')} 
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              >
                <ProfileIcon />
                <span>Profile</span>
              </button>
              <button 
                onClick={() => setActiveTab('appearance')} 
                className={`nav-item ${activeTab === 'appearance' ? 'active' : ''}`}
              >
                <AppearanceIcon />
                <span>Appearance</span>
              </button>
              <button 
                onClick={() => setActiveTab('notifications')} 
                className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
              >
                <NotificationIcon />
                <span>Notifications</span>
              </button>
              <button 
                onClick={() => setActiveTab('security')} 
                className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
              >
                <SecurityIcon />
                <span>Security</span>
              </button>
              <button 
                onClick={() => setActiveTab('billing')} 
                className={`nav-item ${activeTab === 'billing' ? 'active' : ''}`}
              >
                <BillingIcon />
                <span>Billing</span>
              </button>
              <button 
                onClick={() => setActiveTab('integrations')} 
                className={`nav-item ${activeTab === 'integrations' ? 'active' : ''}`}
              >
                <IntegrationIcon />
                <span>Integrations</span>
              </button>
            </nav>
          </div>

          {/* Settings content */}
          <div className="settings-content">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="settings-panel">
                <div className="settings-header">
                  <h2>Profile Settings</h2>
                  <p>Manage your profile information and account preferences.</p>
                </div>

                <form onSubmit={handleSaveProfile} className="settings-form">
                  <div className="form-section">
                    <div className="avatar-upload">
                      <div className="avatar">
                        <img src="https://via.placeholder.com/100x100" alt="Profile avatar" />
                        <div className="avatar-overlay">
                          <span>Change</span>
                        </div>
                      </div>
                      <div className="avatar-info">
                        <h3>{profileForm.firstName} {profileForm.lastName}</h3>
                        <p>{profileForm.jobTitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Personal Information</h3>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName"
                          value={profileForm.firstName}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName"
                          value={profileForm.lastName}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={profileForm.email}
                        onChange={handleProfileChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="jobTitle">Job Title</label>
                      <input 
                        type="text" 
                        id="jobTitle" 
                        name="jobTitle"
                        value={profileForm.jobTitle}
                        onChange={handleProfileChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea 
                        id="bio" 
                        name="bio"
                        rows={4}
                        value={profileForm.bio}
                        onChange={handleProfileChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" className="btn-secondary">Cancel</button>
                    <button type="submit" className="btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="settings-panel">
                <div className="settings-header">
                  <h2>Appearance Settings</h2>
                  <p>Customize how the dashboard looks and feels.</p>
                </div>

                <form onSubmit={handleSaveAppearance} className="settings-form">
                  <div className="form-section">
                    <h3>Theme Preferences</h3>
                    
                    <div className="theme-selector">
                      <div 
                        className={`theme-option ${appearanceSettings.theme === 'light' ? 'selected' : ''}`}
                        onClick={() => handleAppearanceChange('theme', 'light')}
                      >
                        <div className="theme-preview light-preview"></div>
                        <span>Light</span>
                      </div>
                      
                      <div 
                        className={`theme-option ${appearanceSettings.theme === 'dark' ? 'selected' : ''}`}
                        onClick={() => handleAppearanceChange('theme', 'dark')}
                      >
                        <div className="theme-preview dark-preview"></div>
                        <span>Dark</span>
                      </div>
                      
                      <div 
                        className={`theme-option ${appearanceSettings.theme === 'system' ? 'selected' : ''}`}
                        onClick={() => handleAppearanceChange('theme', 'system')}
                      >
                        <div className="theme-preview system-preview"></div>
                        <span>System</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Interface Density</h3>
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>Compact Mode</h4>
                        <p>Make the interface more compact to show more content at once</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          checked={appearanceSettings.compact}
                          onChange={() => handleToggleSwitch('compact', appearanceSettings.compact, setAppearanceSettings, appearanceSettings)}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Animation & Effects</h3>
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>Enable animations</h4>
                        <p>Show animations and transitions throughout the interface</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          checked={appearanceSettings.animationsEnabled}
                          onChange={() => handleToggleSwitch('animationsEnabled', appearanceSettings.animationsEnabled, setAppearanceSettings, appearanceSettings)}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Text Size</h3>
                    <div className="range-slider">
                      <span className="range-label">A</span>
                      <input 
                        type="range" 
                        min="0.8" 
                        max="1.4" 
                        step="0.1" 
                        value={appearanceSettings.fontScale}
                        onChange={(e) => handleAppearanceChange('fontScale', parseFloat(e.target.value))}
                      />
                      <span className="range-label range-label-large">A</span>
                    </div>
                    <div className="text-preview" style={{ fontSize: `${appearanceSettings.fontScale}rem` }}>
                      The quick brown fox jumps over the lazy dog.
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" className="btn-secondary">Reset to Default</button>
                    <button type="submit" className="btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="settings-panel">
                <div className="settings-header">
                  <h2>Notification Settings</h2>
                  <p>Manage how and when you receive notifications.</p>
                </div>

                <form onSubmit={handleSaveNotifications} className="settings-form">
                  <div className="form-section">
                    <h3>Notification Channels</h3>
                    
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>Email Notifications</h4>
                        <p>Receive notifications via email</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          name="emailNotifications"
                          checked={notificationSettings.emailNotifications}
                          onChange={handleNotificationChange}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>Push Notifications</h4>
                        <p>Receive notifications in your browser</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          name="pushNotifications"
                          checked={notificationSettings.pushNotifications}
                          onChange={handleNotificationChange}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Email Preferences</h3>
                    
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>Weekly Digest</h4>
                        <p>Get a summary of your activity each week</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          name="weeklyDigest"
                          checked={notificationSettings.weeklyDigest}
                          onChange={handleNotificationChange}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>Marketing Emails</h4>
                        <p>Receive offers, tips, and product updates</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          name="marketingEmails"
                          checked={notificationSettings.marketingEmails}
                          onChange={handleNotificationChange}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>New Features</h4>
                        <p>Be the first to know about new features</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          name="newFeatures"
                          checked={notificationSettings.newFeatures}
                          onChange={handleNotificationChange}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" className="btn-secondary">Turn Off All</button>
                    <button type="submit" className="btn-primary">Save Preferences</button>
                  </div>
                </form>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="settings-panel">
                <div className="settings-header">
                  <h2>Security Settings</h2>
                  <p>Manage your account security and authentication methods.</p>
                </div>

                <form onSubmit={handleSaveSecurity} className="settings-form">
                  <div className="form-section">
                    <h3>Authentication</h3>
                    
                    <div className="security-option">
                      <div className="security-option-info">
                        <h4>Two-Factor Authentication</h4>
                        <p>Add an extra layer of security to your account</p>
                        <div className={`status-badge ${securitySettings.twoFactorEnabled ? 'enabled' : 'disabled'}`}>
                          {securitySettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                        </div>
                      </div>
                      <button 
                        type="button" 
                        className={`btn-${securitySettings.twoFactorEnabled ? 'secondary' : 'primary'}`}
                        onClick={() => handleToggleSwitch('twoFactorEnabled', securitySettings.twoFactorEnabled, setSecuritySettings, securitySettings)}
                      >
                        {securitySettings.twoFactorEnabled ? 'Disable' : 'Enable'}
                      </button>
                    </div>
                    
                    <div className="security-option">
                      <div className="security-option-info">
                        <h4>Change Password</h4>
                        <p>Last changed: {new Date(securitySettings.passwordLastChanged).toLocaleDateString()}</p>
                      </div>
                      <button type="button" className="btn-secondary">Change</button>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Session Management</h3>
                    
                    <div className="form-group">
                      <label htmlFor="sessionTimeout">Session Timeout (minutes)</label>
                      <div className="select-wrapper">
                        <select 
                          id="sessionTimeout"
                          value={securitySettings.sessionTimeout}
                          onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: parseInt(e.target.value)})}
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="120">2 hours</option>
                          <option value="0">Never</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="switch-setting">
                      <div className="switch-info">
                        <h4>Login Notifications</h4>
                        <p>Receive alerts about new logins to your account</p>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          checked={securitySettings.loginNotifications}
                          onChange={() => handleToggleSwitch('loginNotifications', securitySettings.loginNotifications, setSecuritySettings, securitySettings)}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    
                    <button type="button" className="btn-danger">Sign Out All Devices</button>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            )}

            {/* Billing Settings */}
            {activeTab === 'billing' && (
              <div className="settings-panel">
                <div className="settings-header">
                  <h2>Billing Settings</h2>
                  <p>Manage your subscription, payment methods, and billing history.</p>
                </div>

                <div className="current-plan">
                  <div className="plan-info">
                    <h3>Current Plan</h3>
                    <div className="plan-badge premium">Premium</div>
                    <p>Your plan renews on August 30, 2025</p>
                  </div>
                  <button className="btn-outline">Change Plan</button>
                </div>

                <div className="form-section">
                  <h3>Payment Method</h3>
                  <div className="payment-method">
                    <div className="card-info">
                      <div className="card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="card-details">
                        <h4>Visa ending in 4242</h4>
                        <p>Expires 09/2026</p>
                      </div>
                    </div>
                    <div className="payment-actions">
                      <button className="btn-text">Edit</button>
                      <button className="btn-text">Remove</button>
                    </div>
                  </div>
                  <button className="btn-secondary mt-4">Add Payment Method</button>
                </div>

                <div className="form-section">
                  <h3>Billing History</h3>
                  <div className="billing-history">
                    <table className="billing-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jul 30, 2025</td>
                          <td>Premium Plan - Monthly</td>
                          <td>$49.00</td>
                          <td><span className="status-badge success">Paid</span></td>
                          <td><button className="btn-icon"><span>↓</span></button></td>
                        </tr>
                        <tr>
                          <td>Jun 30, 2025</td>
                          <td>Premium Plan - Monthly</td>
                          <td>$49.00</td>
                          <td><span className="status-badge success">Paid</span></td>
                          <td><button className="btn-icon"><span>↓</span></button></td>
                        </tr>
                        <tr>
                          <td>May 30, 2025</td>
                          <td>Premium Plan - Monthly</td>
                          <td>$49.00</td>
                          <td><span className="status-badge success">Paid</span></td>
                          <td><button className="btn-icon"><span>↓</span></button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="form-actions">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <button className="btn-danger">Cancel Subscription</button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Pause Subscription</DropdownMenuItem>
                      <DropdownMenuItem>Downgrade to Basic</DropdownMenuItem>
                      <DropdownMenuItem>Cancel Permanently</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )}

            {/* Integrations Settings */}
            {activeTab === 'integrations' && (
              <div className="settings-panel">
                <div className="settings-header">
                  <h2>Integrations</h2>
                  <p>Connect your account with third-party services.</p>
                </div>

                <div className="integrations-search">
                  <input type="text" placeholder="Search integrations..." />
                </div>

                <div className="integrations-list">
                  <div className="integration-item">
                    <div className="integration-logo">
                      <div className="integration-logo-placeholder">G</div>
                    </div>
                    <div className="integration-info">
                      <h4>Google Drive</h4>
                      <p>Connect your Google Drive to import and export files</p>
                    </div>
                    <button className="btn-primary">Connect</button>
                  </div>
                  
                  <div className="integration-item">
                    <div className="integration-logo">
                      <div className="integration-logo-placeholder">S</div>
                    </div>
                    <div className="integration-info">
                      <h4>Slack</h4>
                      <p>Get notifications and updates in your Slack workspace</p>
                    </div>
                    <button className="btn-secondary">Disconnect</button>
                  </div>
                  
                  <div className="integration-item">
                    <div className="integration-logo">
                      <div className="integration-logo-placeholder">G</div>
                    </div>
                    <div className="integration-info">
                      <h4>GitHub</h4>
                      <p>Link to your GitHub repositories and track issues</p>
                    </div>
                    <button className="btn-primary">Connect</button>
                  </div>
                  
                  <div className="integration-item">
                    <div className="integration-logo">
                      <div className="integration-logo-placeholder">D</div>
                    </div>
                    <div className="integration-info">
                      <h4>Dropbox</h4>
                      <p>Access and share your Dropbox files</p>
                    </div>
                    <button className="btn-primary">Connect</button>
                  </div>
                  
                  <div className="integration-item">
                    <div className="integration-logo">
                      <div className="integration-logo-placeholder">Z</div>
                    </div>
                    <div className="integration-info">
                      <h4>Zapier</h4>
                      <p>Automate workflows with 3000+ apps</p>
                    </div>
                    <button className="btn-primary">Connect</button>
                  </div>
                </div>

                <div className="api-section">
                  <div className="api-header">
                    <h3>API Access</h3>
                    <button className="btn-secondary">Generate New Key</button>
                  </div>
                  
                  <div className="api-key-display">
                    <div className="api-key-label">API Key</div>
                    <div className="api-key-value">
                      <span>••••••••••••••••••••••••••••</span>
                      <button className="btn-icon" title="Copy API key">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
