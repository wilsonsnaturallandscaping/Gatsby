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
            <ContentContainer className="container pt-5">
                <ContentRow className="row">
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogTwenty.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>May 9, 2024</SubHeading>
                                    <Heading className="color-dark">
                                        Landscaping for Beginners: DIY or Hire a Professional – The Unmatched Value of
                                        Wilson’s Natural Landscaping{" "}
                                    </Heading>
                                    <ShortExcerpt>
                                        In a world where DIY culture is gaining popularity, landscaping is often an area
                                        where many homeowners think they can roll up their sleeves and get their hands
                                        dirty. The joy of crafting your outdoor space can indeed be thrilling, but
                                        landscaping is more complex than it may initially appear.
                                    </ShortExcerpt>
                                </span>
                                <Button
                                    className="homebutton"
                                    title="read more"
                                    to="/blog/landscaping-for-beginners-diy-or-hire-a-professional-the-unmatched-value-of-wilsons-natural-landscaping">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>

                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogFive.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>February 27, 2024</SubHeading>
                                    <Heading className="color-dark">Top 5 Invasive Flowering Plants in NC</Heading>
                                    <ShortExcerpt>
                                        Embrace the natural beauty of Charlotte, NC, and its surrounding areas by
                                        choosing plants that are not only adapted to our climate but also support local
                                        biodiversity.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/top-5-invasive-flowering-plants-in-nc">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogSix.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>April 11, 2024</SubHeading>
                                    <Heading className="color-dark">
                                        Ten Native Grasses to Use in Your Charlotte Landscape
                                    </Heading>
                                    <ShortExcerpt>
                                        Embrace the natural beauty of Charlotte, NC, and its surrounding areas by
                                        choosing plants that are not only adapted to our climate but also support local
                                        biodiversity.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/ten-native-grasses">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                </ContentRow>
            </ContentContainer>

            <ContentContainer className="container pt-5">
                <ContentRow className="row">
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogSeven.jpg"
                                alt="Wilsons Landscaping"
                                our
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>February 2, 2024</SubHeading>
                                    <Heading className="color-dark">The Consequences of Neglected Drainage</Heading>
                                    <ShortExcerpt>
                                        Have you ever noticed water pooling in your yard after a rainstorm, or felt the
                                        unsettling squish of soggy soil underfoot? Perhaps you've seen the unsightly
                                        erosion scars that water can carve into the landscape, turning a once-pristine
                                        garden into a scene of devastation.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/the-consequences-of-neglected-drainage">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>

                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogEight.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>January 26, 2024</SubHeading>
                                    <Heading className="color-dark">The Hidden Hazard of Water Erosion</Heading>
                                    <ShortExcerpt>
                                        Is your yard feeling spongy and waterlogged? At first glance, it might seem
                                        harmless, but neglecting drainage issues can lead to a host of serious problems,
                                        including the unexpected uprooting of your cherished trees.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/protect-your-property-uncover-the-hidden-hazard-of-water-erosion">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogNine.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>April 11, 2024</SubHeading>
                                    <Heading className="color-dark">
                                        Navigating Drainage Challenges in Charlotte: Essential Tips for Homeowners
                                    </Heading>
                                    <ShortExcerpt>
                                        Charlotte, NC, nestled in the picturesque Piedmont region, is a haven for
                                        homeowners who cherish its rolling hills and vibrant greenery. However, this
                                        beauty comes with its own set of challenges, particularly when it comes to
                                        landscape drainage.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/navigating-drainage-challenges-in-charlotte-essential-tips-for-homeowners">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                </ContentRow>
            </ContentContainer>

            <ContentContainer className="container pt-5">
                <ContentRow className="row">
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogTen.jpg"
                                alt="Wilsons Landscaping"
                                our
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>December 6, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        Top 5 Native Plants for Winter Wildlife in Charlotte
                                    </Heading>
                                    <ShortExcerpt>
                                        In this first part of our winter plant care series, let’s explore the top 5
                                        native plants that are essential for supporting birds and animals during the
                                        Charlotte area’s winter months.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/top-5-native-plants-for-winter-wildlife-in-charlotte-a-guide-by-wilsons-natural-landscaping">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>

                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogEleven.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>November 29, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        Winter Mulching: Embracing the Cold with Wilson’s Natural Landscaping
                                    </Heading>
                                    <ShortExcerpt>
                                        While mulch is often associated with the vibrant growth of spring and the heat
                                        of summer, its role in winter is equally vital for maintaining a healthy and
                                        beautiful landscape.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/winter-mulching-embracing-the-cold-with-wilsons-natural-landscaping">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogTwelve.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>November 15, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        The Backbone of Effective Drainage: Choosing the Right Pipe for Your Landscape
                                    </Heading>
                                    <ShortExcerpt>
                                        Proper drainage is essential for preventing waterlogging, protecting plant roots
                                        from rot, and ensuring that your landscape remains healthy and vibrant,
                                        regardless of the weather.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/the-backbone-of-effective-drainage-choosing-the-right-pipe-for-your-landscape">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                </ContentRow>
            </ContentContainer>

            <ContentContainer className="container pt-5">
                <ContentRow className="row">
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogThirteen.jpg"
                                alt="Wilsons Landscaping"
                                our
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>October 25, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        The Best Fast-Growing Trees for a Vibrant Charlotte Landscape{" "}
                                    </Heading>
                                    <ShortExcerpt>
                                        Imagine a garden that bursts into a riot of colors, offers shade on sunny days,
                                        and contributes to the local ecosystem. It’s not just a dream—it’s a possibility
                                        with the right selection of fast-growing trees native to the Charlotte, NC
                                        region.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/the-best-fast-growing-trees-for-a-vibrant-charlotte-landscape">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>

                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogFourteen.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>October 11, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        When to Cut Native Plants Back in the Fall and When to Let Be{" "}
                                    </Heading>
                                    <ShortExcerpt>
                                        As the temperatures drop and the days grow shorter, garden enthusiasts face a
                                        perennial question: Which native plants should be cut back, and which ones
                                        should be left to the whims of nature?
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/fall-in-north-carolina-knowing-when-to-cut-back-and-when-to-let-be">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogFifteen.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>October 4, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        The Vibrant Hues of North Carolina: Native Plants that Dazzle in the Fall
                                    </Heading>
                                    <ShortExcerpt>
                                        As the air turns crisp and the days grow shorter, our landscapes transform into
                                        a canvas of rich reds, deep oranges, and brilliant yellows. But did you know
                                        that many of these vibrant hues come from native plants?
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/the-vibrant-hues-of-north-carolina-native-plants-that-dazzle-in-the-fall">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                </ContentRow>
            </ContentContainer>
            <ContentContainer className="container pt-5">
                <ContentRow className="row">
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogSixteen.jpg"
                                alt="Wilsons Landscaping"
                                our
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>September 21, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        Tree Hugging with a Purpose: The Right Way to Plant and Nurture{" "}
                                    </Heading>
                                    <ShortExcerpt>
                                        See that guy in the photo? That’s me. I may not fit the mold of a quintessential
                                        tree hugger, with tie-dyed shirts and bare feet grounded in the earth. But my
                                        connection to these towering beings runs deep.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/tree-hugging-with-a-purpose-the-right-way-to-plant-and-nurture">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>

                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogSeventeen.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>September 5, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        Beyond Planting: The Wilson’s Difference in Large Tree and Evergreen
                                        Installation{" "}
                                    </Heading>
                                    <ShortExcerpt>
                                        In the heart of North Carolina, the city of Charlotte stands as a testament to
                                        growth, both in its bustling urban centers and its lush green landscapes. For
                                        homeowners and property managers, the allure of large native trees and
                                        evergreens is undeniable.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/beyond-planting-the-wilsons-difference-in-large-tree-and-evergreen-installation">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogEighteen.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>August 22, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        Mulch 101: The Wilson’s Way to Perfect Landscaping
                                    </Heading>
                                    <ShortExcerpt>
                                        In the picturesque landscapes of the Charlotte Piedmont area, the beauty of
                                        nature is evident in every corner. From the rolling hills to the lush green
                                        meadows, this region is a haven for nature enthusiasts and homeowners who take
                                        pride in their outdoor spaces.
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/mulch-101-the-wilsons-way-to-perfect-landscaping">
                                    Read More →
                                </Button>
                            </ColumnBody>
                        </ColumnInnerContainer>
                    </OneColumn>
                </ContentRow>
            </ContentContainer>

            <ContentContainer className="container pt-5">
                <ContentRow className="row">
                    <OneColumn className={"feature-extended-image has-animation col-12 col-md-6 col-lg-4"}>
                        <ColumnInnerContainer className={"shadow-md border-radius"}>
                            <StaticImage
                                src="../assets/blog/blogNineteen.jpg"
                                alt="Wilsons Landscaping"
                                our
                                placeholder="blurred"
                                layout="fixed"
                                style={{ width: "100%", objectFit: "cover" }}
                                height={300}
                            />
                            <ColumnBody className="brd-clr">
                                <span>
                                    <SubHeading>July 20, 2023</SubHeading>
                                    <Heading className="color-dark">
                                        Chindo Viburnum and Sweetbay Magnolia: The Twin Pillars of Privacy in the
                                        Charlotte Metro Area{" "}
                                    </Heading>
                                    <ShortExcerpt>
                                        In the heart of the bustling Charlotte metro area, carving out a private oasis
                                        in your backyard can seem like a tall order. But what if there were a natural,
                                        sustainable, and aesthetically pleasing solution to this challenge?
                                    </ShortExcerpt>
                                </span>
                                <Button className="homebutton" title="read more" to="/blog/chindo-viburnum-and-sweetbay-magnolia-the-twin-pillars-of-privacy-in-the-charlotte-metro-area/">
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
