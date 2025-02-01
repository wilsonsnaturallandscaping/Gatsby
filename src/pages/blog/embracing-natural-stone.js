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
          <h1 className="pb-3">
Embracing Natural Stone in Your North Carolina Landscape
        </h1>
            <StaticImage
                                src="../../assets/blog/blogThree.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                 <p className="mt-3">Natural stone is not just a material choice; it's a statement of style and sustainability. At Wilson's Natural Landscaping, we've long celebrated the virtues of using natural stone in our projects throughout North Carolina. Stone’s intrinsic beauty, durability, and minimal environmental impact make it an ideal choice for those who seek a harmonious blend between their living spaces and the natural world.</p>
<StaticImage
                                src="../../assets/blog/b12.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />

<h4 className="mt-4">Why Choose Natural Stone?</h4>
<p><strong>Sustainability and Durability:</strong> Natural stone stands the test of time, not only in terms of style but also through its enduring nature. Quarried from the earth and crafted without the need for chemicals or other harmful processes, it represents an eco-friendly option that minimizes carbon footprint while offering unmatched longevity.</p>
<p><strong>Aesthetic Versatility:</strong> The variety of colors, textures, and sizes available in natural stone allows for a multitude of design possibilities. Whether you're crafting a rustic pathway, an elegant patio, or a serene water feature, stone provides a unique character that is as distinct as it is beautiful. In North Carolina, where the landscape varies from the mountains to the coast, natural stone can complement any setting, enhancing the indigenous qualities of the local environment.</p>
<p><strong>Thermal Efficiency:</strong> Stone naturally helps regulate the temperature in its immediate environment by absorbing heat during the day and releasing it slowly in the evening, making it a perfect choice for North Carolina’s varied climates.</p>
<h2>Popular Types of Natural Stone for Landscaping</h2>
<p><strong>Flagstone:</strong> With its flat, smooth surface, flagstone is ideal for patios and walkways. Its irregular shapes fit together like a jigsaw puzzle, creating a stable yet visually interesting surface.</p>
<p><strong>Fieldstone:</strong> Often used in retaining walls and for decorative features, fieldstone offers a more natural, rugged look that blends well with garden landscapes.</p>
<p><strong>Slate:</strong> Known for its rich color palette and durability, slate is commonly used in outdoor areas for its slip-resistant properties.</p>
<p><strong>River Rock:</strong> Smoothed by natural water currents, river rock is perfect for creating dry river beds, inlays around pavers, or as a mulch substitute to help with soil moisture retention.</p>

<h2>Implementing Natural Stone in Your Landscaping</h2>
<div class="row">
    <div class="col-sm-6 order-1 ">
        <StaticImage
                                src="../../assets/blog/b13.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
        height={1080}
width={1080}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
    </div>
    <div class="col-sm-6 order-12 align-self-center">
   <p>Natural stone is incredibly effective in managing slope changes within your garden. Stone retaining walls and terraces can transform a sloped yard into a series of usable levels, each offering a new perspective of your landscape.</p>
<p><strong>Natural Stone Steps:</strong> Integrating stone steps into your landscape is not only practical for navigating elevation changes but also enhances the natural aesthetic. Whether connecting different garden levels or leading down to a lakeside retreat, natural stone steps provide durability and a timeless elegance that complements any outdoor setting.</p>

<p><strong>Pathways and Patios:</strong> A pathway lined with natural stone not only enhances the garden’s flow but also invites a journey through your outdoor space. Patios built from natural stone serve as sturdy, beautiful gathering spaces that blend seamlessly with the outdoors.</p>
    </div> 
  </div>

<div class="row">
  
    <div class="col-sm-6 align-self-center">
   <p><strong>Water Features:</strong> Using stone to create waterfalls, streams, or ponds adds a layer of tranquility and a natural aesthetic that is both calming and captivating.</p>

<p><strong>Accent Features:</strong> From a simple boulder feature to elaborate outdoor fireplaces, stone elements serve as focal points in your landscape, drawing the eye and adding structural elegance.</p>

<p>By adding natural stone to your landscaping, you not only improve functionality but also incorporate an element of refined beauty that naturally ages and weathers, harmonizing with the surrounding environment. This makes stone elements a perfect addition to any sustainable landscape design.</p>
    </div> 
  <div class="col-sm-6 order-12">
        <StaticImage
                                src="../../assets/blog/b14.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
        height={1080}
width={1080}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
    </div>
  </div>

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