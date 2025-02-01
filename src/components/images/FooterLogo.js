import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return (
    <GatsbyImage
      image={file.childImageSharp.gatsbyImageData}
      alt="CityWide Plumbing & Power Logo"
      loading="eager"
      durationFadeIn="5"
      className="footerlogo" />
  );
}
const FooterLogo = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "citywide-footer-logo.png"}) {
    childImageSharp {
      gatsbyImageData(height: 95, layout: FIXED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default FooterLogo;