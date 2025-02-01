import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({ src, alt }) {
    const { allImageSharp } = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 1600) {
                     aspectRatio 
                            ...GatsbyImageSharpFluid_withWebp
                            originalName
                        }
                    }
                }
            }
        }
    `);
    const image = allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === src
    );
    if (!image) {
        return null;
    }
    return <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={alt} />;
}