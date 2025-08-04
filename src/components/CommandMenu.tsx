import { useRef, useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './CommandMenu.css';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Register keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Focus the input when the menu is opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Command handlers
  const handleToggleTheme = () => {
    toggleTheme();
    setOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleExportCsv = () => {
    // This is just a placeholder - actual export will be handled elsewhere
    document.dispatchEvent(new CustomEvent('export-campaign-data'));
    setOpen(false);
  };

  return (
    <>
      {/* Command button */}
      <button className="command-button" onClick={() => setOpen(true)}>
        <Search size={16} />
        <span className="command-button-text">Search</span>
        <span className="command-button-kbd">
          <kbd>⌘</kbd><kbd>K</kbd>
        </span>
      </button>

      {/* Command overlay */}
      {open && (
        <div className="command-overlay" onClick={() => setOpen(false)}>
          <div 
            className="command-dialog" 
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="command-root">
              <div className="command-header">
                <Search className="command-search-icon" size={16} />
                <Command.Input
                  ref={inputRef}
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Type a command or search..."
                  className="command-input"
                />
                <button className="command-close" onClick={() => setOpen(false)}>
                  <X size={16} />
                </button>
              </div>
              
              <Command.List className="command-list">
                <Command.Empty className="command-empty">
                  No results found
                </Command.Empty>
              
              <Command.Group heading="Navigation" className="command-group">
                <Command.Item 
                  className="command-item"
                  onSelect={() => handleNavigation('/')}
                >
                  Go to Dashboard
                </Command.Item>
                <Command.Item 
                  className="command-item"
                  onSelect={() => handleNavigation('/campaigns')}
                >
                  Go to Campaigns
                </Command.Item>
                <Command.Item 
                  className="command-item"
                  onSelect={() => handleNavigation('/audiences')}
                >
                  Go to Audiences
                </Command.Item>
                <Command.Item 
                  className="command-item"
                  onSelect={() => handleNavigation('/settings')}
                >
                  Go to Settings
                </Command.Item>
              </Command.Group>
              
              <Command.Group heading="Actions" className="command-group">
                <Command.Item 
                  className="command-item"
                  onSelect={handleToggleTheme}
                >
                  Toggle Theme
                </Command.Item>
                <Command.Item 
                  className="command-item"
                  onSelect={handleExportCsv}
                >
                  Export Campaign Data
                </Command.Item>
              </Command.Group>
              
              <Command.Group heading="Support" className="command-group">
                <Command.Item 
                  className="command-item"
                  onSelect={() => window.open('mailto:support@admybrand.com', '_blank')}
                >
                  Contact Support
                </Command.Item>
                <Command.Item 
                  className="command-item"
                  onSelect={() => window.open('/docs', '_blank')}
                >
                  View Documentation
                </Command.Item>
              </Command.Group>
            </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
