import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return <GatsbyImage image={file.childImageSharp.gatsbyImageData} className="aboutimage" />;
}
const MyImgAd = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "cbsad.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MyImgAd;