import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Opole" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 5rem', maxWidth: '800px' }}>
        <Link to="/blog" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2rem' }}>← Powrót do artykułów</Link>
        {tags && <div style={{ marginBottom: '0.75rem' }}>{tags.map(t => <span key={t} style={{ display: 'inline-block', background: 'var(--emerald-pale)', color: 'var(--emerald-dark)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.6rem', borderRadius: 20, marginRight: '0.4rem', letterSpacing: '0.04em' }}>{t}</span>)}</div>}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text)', lineHeight: 1.15, marginBottom: '0.6rem' }}>{title}</h1>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{date} · {author}</p>
        {description && <p style={{ fontSize: '1.05rem', color: 'var(--emerald-dark)', borderLeft: '4px solid var(--emerald)', paddingLeft: '1rem', marginBottom: '2.5rem', lineHeight: 1.65, borderRadius: '0 4px 4px 0' }}>{description}</p>}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
