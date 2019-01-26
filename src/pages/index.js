import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import logo from '../images/code.svg';

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
    <Link to="/blog">Blog</Link>
    <Link to="/portfolio">Portfolio</Link>
  </Layout>
);

export default IndexPage;
