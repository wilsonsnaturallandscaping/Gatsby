import React from "react";
import AboutUs from "../../components/sidebar/contact";
import QuoteForm from "../../components/ContactForm";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../../components/video"
import CustomCard from "../../components/card";
import { Link } from "gatsby"
import Layout from "../../components/layout";

const ContentContainer = styled.div`
    padding: 2em 0;
    @media (max-width: 767px) {
        padding: 0.5em 0;
    }
`;
const HeroText = styled.div`
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid #f1f1f1;
`;
const Blog = () => {
    return (
        <Layout>
            <div className="container">
                <ContentContainer>
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
          <h1 className="pb-3">Lawn Challenges? Consider North Carolina Native Alternatives</h1>
            <StaticImage
                                src="../../assets/blog/blogOne.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                <p className="mt-3">Tired of the constant upkeep your lawn demands, especially with the Piedmont area's average of over 40 inches of rain each year? Not to mention the scorching sun that stresses your grass on those hot days. Wilson's Natural Landscaping offers a smarter, <Link to="/about/sustainable-practices/">eco-friendly</Link> solution with native plant lawn alternatives that require minimal maintenance.</p>
<h4>Why Switch to Native Plant Alternatives?</h4>

<p><strong>Less Maintenance:</strong> Forget about regular fertilizing, seasonal weed and feeds, or frequent irrigation. Native plants are well-adapted to our local climate, significantly reducing the need for these tasks.</p>
<p><strong>Say Goodbye to Weekly Mowing:</strong> Most native lawns only need a yearly cutback. Imagine the time you'll save when you kiss weekly mowing goodbye!</p>
<p><strong>Deeper Roots Enhance Soil Hydrology:</strong> Native plants often have deeper root systems that connect more efficiently with the soil's hydrology, enhancing water absorption and reducing runoff.</p>
<p><strong>Support Local Wildlife:</strong> By choosing <a href="https://wilsonsnaturallandscaping.com/top-5-native-plants-for-winter-wildlife-in-charlotte-a-guide-by-wilsons-natural-landscaping/">native plants,</a> you're providing essential food and habitat for native insects and animals, contributing to biodiversity.</p>
<p><strong>Drought Tolerance:</strong> Thanks to their deep roots and natural adaptation to local conditions, native plants offer superior drought resistance.</p>
    <p><strong>Less Maintenance:</strong> Forget about regular fertilizing, seasonal weed and feeds, or frequent irrigation. Native plants are well-adapted to our local climate, significantly reducing the need for these tasks.</p>
<p><strong>Say Goodbye to Weekly Mowing:</strong> Most native lawns only need a yearly cutback. Imagine the time you'll save when you kiss weekly mowing goodbye!</p>
<p><strong>Deeper Roots Enhance Soil Hydrology:</strong> Native plants often have deeper root systems that connect more efficiently with the soil's hydrology, enhancing water absorption and reducing runoff.</p>
<p><strong>Support Local Wildlife:</strong> By choosing <a href="https://wilsonsnaturallandscaping.com/top-5-native-plants-for-winter-wildlife-in-charlotte-a-guide-by-wilsons-natural-landscaping/">native plants,</a> you're providing essential food and habitat for native insects and animals, contributing to biodiversity.</p>
<p><strong>Drought Tolerance:</strong> Thanks to their deep roots and natural adaptation to local conditions, native plants offer superior drought resistance.</p>
    <div className="row">
    <div className="col-3">
          <StaticImage
                                src="../../assets/blog/b17.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
</div>
 <div className="col-3">
          <StaticImage
                                src="../../assets/blog/b18.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
</div>
 <div className="col-3">
          <StaticImage
                                src="../../assets/blog/b19.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
</div>
 <div className="col-3">
          <StaticImage
                                src="../../assets/blog/b20.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
</div>
</div>
  <h4 className="mt-4">Installing Your Native Plant Lawn Alternative</h4>
<p>Switching to a native plant lawn is straightforward:</p>
<ol>
<li><strong>Prepare the Soil:</strong> Clear existing vegetation using methods like smothering, spraying, or mechanical removal.</li>
<li><strong>Suppress Weeds:</strong> Lay down mulch to prevent weeds while your new plants establish.</li>
<li><strong>Plant Densely:</strong> Use landscape plugs planted closely (8-12 inches apart) to encourage dense growth.</li>
<li><strong>Water and Weed:</strong> Ensure the plants are well-watered and weed as necessary during the establishment phase.</li>
</ol>
<p>With these tips and choices, transitioning to a native plant lawn can be a rewarding project that saves time, supports the environment, and transforms your landscape into a sustainable, beautiful space.</p>
<p>Explore more about these alternatives and how you can integrate them into your landscape by calling our office and <Link to="/contact">scheduling a consultation</Link>. Dive into a world where gardening meets sustainability and practicality, perfect for the modern homeowner in the Carolinas.</p>

                        </div>
                        <div className="col-xs-12 col-md-4">
                            <CustomCard>
                                <h2>Work With Us</h2>
                                <p>
                                    Wilson's Natural Landscaping will be happy to provide a professional consultation
                                    for your next project. A site visit can be arranged if needed.
                                </p>
                                <QuoteForm />
                            </CustomCard>
                        </div>
                    </div>
                </ContentContainer>
            </div>
        </Layout>
    );
};
export default Blog;