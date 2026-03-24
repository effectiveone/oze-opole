import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header style={{ background: 'var(--bg-white)', borderBottom: '2px solid var(--border-main)', padding: '1rem 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: 42, height: 42, background: 'var(--emerald)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>🌿</div>
        <div>
          <span style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1.25rem', color: 'var(--emerald-dark)' }}>OZE Opole</span>
          <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Zielona Opolszczyzna</span>
        </div>
      </Link>
      <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Główna</Link>
        <Link to="/blog" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Artykuły</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ background: 'var(--emerald)', color: '#fff', padding: '0.45rem 1.1rem', borderRadius: 24, fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
          ecoaudyt.app →
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
