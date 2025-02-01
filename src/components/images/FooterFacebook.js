import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return <GatsbyImage image={file.childImageSharp.gatsbyImageData} alt="Facebook Reviews Logo" />;
}
const SiteFacebook = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "facebook.png"}) {
    childImageSharp {
      gatsbyImageData(height: 60, width: 124, placeholder: TRACED_SVG, layout: FIXED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default SiteFacebook;