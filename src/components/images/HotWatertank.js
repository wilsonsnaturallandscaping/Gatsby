import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return <GatsbyImage image={file.childImageSharp.gatsbyImageData} />;
}
const MyImg1 = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "hot-water-tank.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 740, layout: CONSTRAINED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MyImg1;