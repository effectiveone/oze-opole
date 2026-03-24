import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', transition: 'box-shadow 0.2s, transform 0.2s' }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(5,150,105,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
      {tags && tags[0] && <span style={{ background: 'var(--emerald-pale)', color: 'var(--emerald-dark)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.6rem', borderRadius: 20, letterSpacing: '0.04em' }}>{tags[0]}</span>}
      <time style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{date}</time>
    </div>
    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.3, color: 'var(--text)' }}>
      <Link to={`/blog${slug}`} style={{ color: 'inherit', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.color = 'var(--emerald)'}
        onMouseLeave={e => e.target.style.color = 'inherit'}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '0.9rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ color: 'var(--emerald)', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>Czytaj dalej →</Link>
  </article>
);

export default PostCard;
