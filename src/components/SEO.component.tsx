/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Seo from 'react-seo-component';
import { MdxFrontmatter } from 'src/graphql';
//@ts-ignore
import defaultLogo from '../images/hongyi.jpg';

interface Props {
  title?: string;
  description?: string;
}

const SEO: React.FC<Props> = ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SITE_METADATA {
        site {
          siteMetadata {
            title
            description
            lastBuildDate
            author
            twitterName
            siteLanguage
            siteLocale
          }
        }
      }
    `
  );

  return (
    <Seo
      title={title || 'empty'}
      titleTemplate={siteMetadata.title}
      description={description || 'nothing'}
      image={`${defaultLogo}`}
      pathname={``}
      twitterUsername={siteMetadata.twitterName}
      article={true}
      siteLanguage={siteMetadata.siteLanguage}
      siteLocale={siteMetadata.siteLocale}
      author={siteMetadata.author}
      dateModified={new Date(Date.now()).toISOString()}
    />
  );
};

export default SEO;
