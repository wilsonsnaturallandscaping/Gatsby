import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./button";

const ContentContainer = styled.div``;
const ContentRow = styled.div``;
const FeaturedItemsOuterWrapper = styled.section`
    padding: 40px 0;
`;

const OneColumn = styled.div`
    @media (max-width: 992px) {
        margin-bottom: 1em;
    }
    display: flex;
    padding: 0 8px !important;
`;
const ColumnInnerContainer = styled.div`
    background: #fff;
`;
const ColumnBody = styled.div`
    padding: 1.25em;
`;
const Excerpt = styled.p`
    color: #666;
    font-size: 16px;
`;

const ShortExcerpt = styled.p`
    color: #666;
    font-size: 16px;
`;
const Heading = styled.h2`
    margin-bottom: 0.25em;
    font-size: 1.45em;
    line-height: 1.3;
`;
const SubHeading = styled.span`
    margin-bottom: 0.25em;
    font-size: 0.8em;
    line-height: 1;
`;

const StaffCarousel = () => {
    return (
        <FeaturedItemsOuterWrapper>
            <ContentContainer className="container">
                <ContentRow className="row">
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogOne.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>June 28, 2024</SubHeading>
                                    <Heading className="color-dark">
                                        Lawn Challenges? Consider North Carolina Native Alternatives
                                    </Heading>
                                    <ShortExcerpt>
                                        Embrace a low-maintenance, sustainable approach to your lawn with native plant
                                        alternatives and promote a healthier ecosystem.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="learnmore" to="/blog/native-lawn-alternatives">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>

                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogTwo.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>June 19, 2024</SubHeading>
                                    <Heading className="color-dark">
                                        Transform Your Poolside: The Best of Poolside Landscaping in Charlotte, NC
                                    </Heading>
                                    <ShortExcerpt>
                                        Discover how using native plants can create stunning, sustainable poolside
                                        landscapes in the Charlotte Piedmont region.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="learn more" to="/blog/poolside-landscaping-charlotte">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogThree.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>May 22, 2024</SubHeading>
                                    <Heading className="color-dark">
                                        Embracing Natural Stone in Your North Carolina Landscape
                                    </Heading>
                                    <ShortExcerpt>
                                        Implementing natural stone enables slope management, steps, pathways, patios,
                                        water features, and accent elements, enhancing both functionality and timeless
                                        beauty.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="learn more" to="/blog/embracing-natural-stone">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
               
                 
                </ContentRow>
            </ContentContainer>
        </FeaturedItemsOuterWrapper>
    );
};
export default StaffCarousel;
