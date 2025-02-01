import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return (
    <GatsbyImage
      image={file.childImageSharp.gatsbyImageData}
      id="bbbhero"
      alt="BBB Review Logo" />
  );
}
const BBBHero = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "bbb.png"}) {
    childImageSharp {
      gatsbyImageData(height: 65, layout: FULL_WIDTH)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default BBBHero;