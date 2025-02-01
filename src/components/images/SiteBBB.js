import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return (
    <GatsbyImage
      image={file.childImageSharp.gatsbyImageData}
      durationFadeIn="5"
      alt="BBB A+ Rating Logo" />
  );
}
const SiteBBB = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "bbb.png"}) {
    childImageSharp {
      gatsbyImageData(height: 60, width: 91, layout: FIXED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default SiteBBB;