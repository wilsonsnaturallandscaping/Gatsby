import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return <GatsbyImage image={file.childImageSharp.gatsbyImageData} className="heroAreaImg" />;
}
const MyImgAbout = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "home-heat-pump.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MyImgAbout;