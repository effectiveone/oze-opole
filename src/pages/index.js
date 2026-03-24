import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="OZE Opole — Portal zielonej energii" description="Energia odnawialna w Opolu i Opolszczyźnie" siteName="OZE Opole" />
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-dark) 0%, var(--emerald) 100%)', padding: '5rem 0' }}>
        <div className="container">
          <p style={{ color: 'var(--emerald-light)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>🌿 Portal Zielonej Energii</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            OZE w Opolu<br/>i Opolszczyźnie
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '520px', marginBottom: '2rem', lineHeight: 1.7 }}>
            Ekologia, fotowoltaika i zielona transformacja w regionie opolskim. Aktualności i porady dla mieszkańców.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/blog" style={{ background: '#fff', color: 'var(--emerald-dark)', padding: '0.7rem 1.75rem', borderRadius: 30, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>Czytaj artykuły</Link>
            <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#fff', padding: '0.7rem 1.75rem', borderRadius: 30, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>Audyt energetyczny →</a>
          </div>
        </div>
      </section>
      <div className="container" style={{ padding: '3rem 1.5rem 4rem' }}>
        {posts.length > 0 ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--text)' }}>Najnowsze artykuły</h2>
              <Link to="/blog" style={{ color: 'var(--emerald)', fontWeight: 600, fontSize: '0.9rem' }}>Wszystkie →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {posts.slice(0, 6).map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <span style={{ fontSize: '3rem' }}>🌿</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginTop: '1rem', color: 'var(--emerald-dark)' }}>Artykuły wkrótce</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Przygotowujemy treści o OZE w Opolu.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes { fields { slug } excerpt(pruneLength: 180) frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags } }
    }
  }
`;

export default IndexPage;
