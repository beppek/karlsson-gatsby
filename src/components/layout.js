import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import SiteWrapper from './SiteWrapper';
import BackgroundImageBlur from './BackgroundImageBlur';
import InnerWrapper from './InnerWrapper';
import Header from './header';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => {
  const homePage = window.location.pathname === '/';
  const blog = window.location.pathname.includes('/blog');
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
          landscapeImages: allFile(
            filter: {
              absolutePath: { regex: "/images/backgrounds/landscape/" }
            }
          ) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
          portraitImages: allFile(
            filter: { absolutePath: { regex: "/images/backgrounds/portrait/" } }
          ) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { portraitImages, landscapeImages } = data;
        console.log(portraitImages);
        console.log(landscapeImages);
        const portraitNode =
          portraitImages.edges[
            Math.floor(Math.random() * portraitImages.edges.length)
          ];
        const landscapeNode =
          landscapeImages.edges[
            Math.floor(Math.random() * landscapeImages.edges.length)
          ];

        const portrait = portraitNode.node.childImageSharp.fluid.src;
        const landscape = landscapeNode.node.childImageSharp.fluid.src;
        return (
          <SiteWrapper
            landscape={landscape}
            portrait={portrait}
            homePage={homePage}
          >
            {blog && <Header siteTitle={data.site.siteMetadata.title} />}
            <BackgroundImageBlur
              landscape={landscape}
              portrait={portrait}
              homePage={homePage}
              blog={blog}
            />
            <InnerWrapper blog={blog} homePage={homePage}>
              {/* {!homePage && !blog && (
                <Header siteTitle={data.site.siteMetadata.title} />
              )} */}
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                }}
              >
                {children}
              </div>
            </InnerWrapper>
            <Footer>©{new Date().getFullYear()} Max Karlsson</Footer>
          </SiteWrapper>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
