import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return (
    <GatsbyImage
      image={file.childImageSharp.gatsbyImageData}
      alt="Wilsons Natural Landscaping"
      loading="eager"
      durationFadeIn="5"
      className="pnglogo1" />
  );
}
const SiteLogo = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "logo.png"}) {
    childImageSharp {
      gatsbyImageData(height: 95, layout: FIXED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default SiteLogo;