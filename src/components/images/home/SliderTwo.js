import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return (
    <GatsbyImage
      image={file.childImageSharp.gatsbyImageData}
      loading="eager"
      className="heroAreaImg" />
  );
}
const MyImg2 = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "home-hero2.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 30, placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MyImg2;