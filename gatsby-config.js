module.exports = {
  siteMetadata: {
    title: 'OZE Opole',
    description: 'Portal o odnawialnych źródłach energii w Opolu i Opolszczyźnie',
    siteUrl: 'https://oze-opole.pages.dev',
    author: 'Redakcja OZE Opole',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
