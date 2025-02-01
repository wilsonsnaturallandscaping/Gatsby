import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return <GatsbyImage image={file.childImageSharp.gatsbyImageData} className="ItemImg" />;
}
const MySer1 = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "home/service1.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 500, placeholder: TRACED_SVG, layout: FIXED)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MySer1;