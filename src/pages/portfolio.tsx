import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
// import Image from '../components/image';
import SEO from '../components/SEO';

// import logo from '../images/code.svg';

const PortfolioPage = () => (
  <Layout>
    <SEO
      title="Portfolio"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        'programmer',
        'web developer',
        'developer',
        'full-stack',
        'javascript',
      ]}
    />
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
  </Layout>
);

export default PortfolioPage;
