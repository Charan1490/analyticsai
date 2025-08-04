import { useState } from 'react';
import DropdownMenuShowcase from './DropdownMenuShowcase';
import './showcase.css';

function ComponentShowcase() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <div className="header-content">
          <h1>Modern React Components</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Beautiful UI Components for Modern Applications</h2>
            <p>
              Professionally designed, accessible, and highly performant React components
              built with modern best practices.
            </p>
          </div>
        </section>

        <section className="component-showcase">
          <DropdownMenuShowcase />
        </section>

        <section className="features">
          <div className="feature">
            <div className="feature-icon">♿</div>
            <h3>Accessible</h3>
            <p>All components follow WAI-ARIA guidelines for maximum accessibility</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Performant</h3>
            <p>Optimized React components with minimal bundle size impact</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Easy to theme and style with CSS variables and design tokens</p>
          </div>
        </section>
      </main>

      <footer>
        <p>Designed & developed by a passionate frontend engineer</p>
      </footer>
    </div>
  );
}

export default ComponentShowcase;
