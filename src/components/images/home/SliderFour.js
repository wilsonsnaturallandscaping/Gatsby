import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return (
    <GatsbyImage
      image={file.childImageSharp.gatsbyImageData}
      alt="Wilsons Landscaping Logo"
      loading="eager"
layout="fluid"
  width={1600}
      height={694}
      className="heroAreaImg" />
  );
}
const MyImg4 = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "home-hero4.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MyImg4;