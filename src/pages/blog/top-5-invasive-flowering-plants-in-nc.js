import React from "react";
import AboutUs from "../../components/sidebar/contact";
import QuoteForm from "../../components/ContactForm";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../../components/video"
import CustomCard from "../../components/card";
import { Link } from "gatsby";
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
Top 5 Invasive Flowering Plants in NC
        </h1>
            <StaticImage
                                src="../../assets/blog/blogFive.jpg"
                              alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                            
            <h3 className="mt-3">Top 5 Invasive Flowering Plants in NC</h3>
<p>The unmatched natural splendor of the Piedmont region is under threat from certain invasive species. As an expert in native garden landscaping in Charlotte, NC, I'm here to highlight the top five invasive flowering plants. These invaders are detrimental to our native ecosystems. Detecting and removing these plants is essential for the preservation and health of our native landscapes.</p>
<div class="row">
    <div class="col-sm-6 order-1 ">
        <StaticImage
                                src="../../assets/blog/b6.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
        height={1080}
width={1080}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
    </div>
    <div class="col-sm-6 order-12 align-self-center">
      <h2>Invasive Species: Japanese Honeysuckle (Lonicera japonica)</h2> <h4>Plant This Instead: Trumpet Honeysuckle
</h4><p>The seemingly innocuous Japanese Honeysuckle is a formidable adversary in disguise. This invasive vine overwhelms and outcompetes native plants with its rapid and dense growth. While its flowers may emit a delightful fragrance, its aggressive nature endangers the local biodiversity.</p>
    </div> 
  </div>

<div class="row">
  
    <div class="col-sm-6 align-self-center">
      <h2>Invasive Species: Chinese Wisteria (Wisteria sinensis)</h2><h4>Plant This Instead: American Honeysuckle</h4><p>The Chinese Wisteria, with its beautiful blue-violet blooms, is a deceptive beauty. This invasive climber can severely damage trees and structures with its weighty growth. It's a visual treat that comes with high ecological costs, as it battles native species for light and nutrients.</p>
    </div> 
  <div class="col-sm-6 order-12">
        <StaticImage
                                src="../../assets/blog/b7.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
        height={1080}
width={1080}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
    </div>
  </div>
<div class="row">
    <div class="col-sm-6 order-1 ">
        <StaticImage
                                src="../../assets/blog/b8.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
        height={1080}
width={1080}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
    </div>
    <div class="col-sm-6 order-12 align-self-center">
        <h2>Invasive Species: Purple Loosestrife (Lythrum salicaria)</h2><h4>Plant This Instead: Carolina Lupine</h4><p>Purple Loosestrife, once valued for its decorative flowers, is now a significant ecological nuisance. This invasive plant dominates wetlands, displacing indigenous flora. Its attractive purple spikes are a false signal of health in these critical habitats.</p>
    </div> 
  </div>

<div class="row">
  
    <div class="col-sm-6 align-self-center">
      <h2>Invasive Species: Bradford Pear (Pyrus calleryana)</h2><h4>Plant This Instead: Carolina Silverbell</h4><p>The Bradford Pear, previously a common choice for landscape planting, has revealed itself as an invasive pest. It spreads rapidly and its brittle structure poses a hazard. The tree's pretty white blossoms belie the ecological and structural problems it causes.</p>
    </div> 
  <div class="col-sm-6 order-12">
        <StaticImage
                                src="../../assets/blog/b9.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
        height={1080}
width={1080}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
    </div>
  </div>
<div class="row">
    <div class="col-sm-6 order-1 ">
        <StaticImage
                                src="../../assets/blog/b11.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
        height={1080}
width={1080}
                                style={{ width: "100%", objectFit: "cover" }}
                            />
    </div>
    <div class="col-sm-6 order-12 align-self-center">
      <h2>Invasive Species: Kudzu (Pueraria montana var. lobata)</h2><h4>Plant This Instead: Crossvine</h4><p>Kudzu, the "vine that ate the South," is notorious for its quick spread and environmental domination. It blankets native species under a dense foliage, stifling their growth and survival. Despite its lush appearance, Kudzu is a clear danger to the natural landscape.</p>
    </div> 
  </div>
<h3 className="mt-3">Take Action with Wilson's Natural Landscaping</h3>
<p>Embrace the natural beauty and ecological benefits of native plants and trees in the Piedmont region by partnering with Wilson's Natural Landscaping. By incorporating native species into your garden, you align with the natural rhythms of our local ecosystem, fostering a landscape that is both sustainable and vibrant. These native selections are designed to thrive in our specific climate, reducing the need for extensive maintenance and irrigation.</p>

<p>At Wilson's Natural Landscaping, we specialize in curating a diverse range of native plants and trees that not only beautify your outdoor space but also contribute to the regional biodiversity, supporting native birds, insects, and wildlife. By choosing to plant native, you're not only enhancing your own garden but also contributing to the health and sustainability of our local environment.</p>

<p>Take a step towards a more natural and sustainable garden today. Contact Wilson's Natural Landscaping to explore our selection of Native Plants and Trees and start your journey to a more balanced and thriving garden ecosystem. Together, let's cultivate a landscape that celebrates and preserves the unique charm and ecological balance of the Piedmont area.</p>
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