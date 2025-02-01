import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from 'gatsby';

function renderImage({ file }) {
  return (
    <GatsbyImage
      image={file.childImageSharp.gatsbyImageData}
      loading="eager"
      durationFadeIn="5"
      className="heroAreaImg" />
  );
}
const MyImgAbout = function (props) {
  return (
    <StaticQuery
      query={graphql`{
  file(relativePath: {eq: "home-toilet.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
}`}
      render={renderImage}
    />
  );
}
export default MyImgAbout;