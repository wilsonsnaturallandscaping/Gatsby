import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return <GatsbyImage image={file.childImageSharp.gatsbyImageData} />;
}
const MyImg2 = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "plumbing-repairs.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 740, layout: CONSTRAINED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MyImg2;