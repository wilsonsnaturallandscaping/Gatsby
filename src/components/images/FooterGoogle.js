import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return <GatsbyImage image={file.childImageSharp.gatsbyImageData} alt="Google Reviews Logo" />;
}
const SiteGoogle = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "google.png"}) {
    childImageSharp {
      gatsbyImageData(height: 60, width: 136, placeholder: TRACED_SVG, layout: FIXED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default SiteGoogle;