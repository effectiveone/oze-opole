import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--emerald-dark)', padding: '3rem 0 1.5rem', marginTop: '5rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🌿</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#fff', fontWeight: 600 }}>OZE Opole</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Portal o zielonej energii w Opolu i Opolszczyźnie.</p>
        </div>
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--emerald-light)', marginBottom: '0.75rem' }}>Serwis</h4>
          <Link to="/" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginBottom: '0.4rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--emerald-light)', marginBottom: '0.75rem' }}>Partner</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--emerald-light)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app →</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© {year} OZE Opole</p>
      </div>
    </footer>
  );
};

export default Footer;
