import React from 'react';
import { Link } from 'gatsby';
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</div>
    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: '#059669' }}>404</h1>
    <p style={{ marginTop: '1rem' }}><Link to="/" style={{ color: '#059669' }}>← Strona główna</Link></p>
  </div>
);
export default NotFound;
