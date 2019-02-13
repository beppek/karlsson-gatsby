import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
// import Image from '../components/image';
import SEO from '../components/SEO';

import Menu from './home/Menu';

// import logo from '../images/code.svg';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
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
    <Menu>
      <Link to="/blog">Blog</Link>
      <Link to="/portfolio">Portfolio</Link>
    </Menu>
  </Layout>
);

export default IndexPage;
