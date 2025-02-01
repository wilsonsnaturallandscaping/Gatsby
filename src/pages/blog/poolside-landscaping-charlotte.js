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
Transform Your Poolside: The Best of Poolside Landscaping in Charlotte, NC        </h1>
            <StaticImage
                                src="../../assets/blog/blogTwo.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                 <p>At Wilson's Natural Landscaping, LLC, we have over two decades of experience transforming ordinary <Link to="/services/hardscapes/">poolside areas</Link> into extraordinary outdoor retreats. Specializing in eco-friendly, low-maintenance landscaping solutions, our team brings both expertise and passion to every project. In this blog post, we’ll explore how to create stunning poolside landscapes using native plants in the Charlotte, NC area, and share insights from some of our recent projects.</p>
<h2>The Appeal of <Link to="/blog/the-vibrant-hues-of-north-carolina-native-plants-that-dazzle-in-the-fall">Native Plants</Link> for Poolside Landscaping</h2>
<p>Native plants are the backbone of sustainable and low-maintenance landscapes. They are well-adapted to local climate conditions, which means they require less water, fewer chemicals, and minimal care compared to exotic species. Here are some popular <a href="https://ncwildflower.org/recommended-native-species/" target="_blank" rel="noopener">native plants</a> that thrive in poolside environments in the Charlotte Piedmont region:</p>
<ol>
<li><strong>Eastern Red Columbine (Aquilegia canadensis)</strong>
<ul>
<li><strong>Description:</strong> This beautiful plant features delicate, drooping red and yellow flowers that attract hummingbirds.</li>
<li><strong>Benefits:</strong> It is drought-tolerant, deer-resistant, and thrives in partial shade to full sun, making it ideal for poolside areas.</li>
</ul>
</li>
<li><strong>Switchgrass (Panicum virgatum)</strong>
<ul>
<li><strong>Description:</strong> This ornamental grass provides lovely movement and texture with its tall, feathery plumes.</li>
<li><strong>Benefits:</strong> Switchgrass is extremely low-maintenance, tolerant of a variety of soil types, and adds a natural, flowing aesthetic to your poolside.</li>
</ul>
</li>
<li><strong>Coreopsis (Coreopsis lanceolata)</strong>
<ul>
<li><strong>Description:</strong> Known for its bright yellow flowers, Coreopsis adds a pop of color that can last throughout the summer.</li>
<li><strong>Benefits:</strong> This plant is drought-resistant, attracts pollinators, and is easy to grow, making it perfect for sunny poolside spots.</li>
</ul>
</li>
<li><strong>Foamflower (Tiarella cordifolia)</strong>
<ul>
<li><strong>Description:</strong> Foamflower features attractive foliage and delicate white flowers, adding a soft touch to the landscape.</li>
<li><strong>Benefits:</strong> It thrives in shaded areas, providing ground cover that helps prevent soil erosion around your pool.</li>
</ul>
</li>
<li><strong>Butterfly Weed (Asclepias tuberosa)</strong>
<ul>
<li><strong>Description:</strong> This vibrant orange-flowered plant is a magnet for butterflies and other pollinators.</li>
<li><strong>Benefits:</strong> It is drought-tolerant and easy to maintain, perfect for adding a splash of color to your poolside garden.</li>
</ul>
</li>
</ol>
<h3>Project Highlights: Bringing Dreams to Life</h3>
<p>Our recent projects showcase how Wilson's Natural Landscaping uses native plants and innovative design to create stunning poolside landscapes. Here are two transformative examples:</p>
<h2>Project #1: The Prelude - A Tropical Transformation</h2>
<p>Before the transformation, the pool area was functional but lacked character. The client's vision was to create a tropical oasis right in their backyard.</p>
<ul>
<li><strong>Importing Tropical Wonders:</strong> We imported four magnificent 16-foot palms from Florida, which became the focal point of the transformation. These palms not only provided a lush, tropical feel but also created a natural canopy, adding shade and ambiance.</li>
<li><strong>Designing the Specialty Garden:</strong> Surrounding these palms, we crafted a specialty garden featuring complementary plants that thrive in Charlotte's climate while enhancing the tropical theme.</li>
<li><strong>Transforming the Poolside Experience:</strong> The result was a luxurious retreat that exudes exotic charm, perfect for relaxation and leisure.</li>
</ul>
  <StaticImage
                                src="../../assets/blog/b15.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />

<h2 className="mt-3">Project #2: A Dreamy Pool with Enhanced Privacy</h2>
<p>Robert's poolside offered picturesque views of Lake Norman but lacked privacy due to a neighboring house. Our goal was to create a private, serene retreat.</p>
<ul>
<li><strong>Creating Privacy with Green Giant Arborvitae:</strong> We planted several Green Giant Arborvitae, known for their rapid growth and dense foliage. These trees provided an immediate screen, transforming the pool area into a secluded haven.</li>
<li><strong>Enhancing the Poolside Ambiance:</strong> We added native plants that complemented the lakeside setting, enriching the poolside experience with color and texture.</li>
<li><strong>Addressing Drainage Issues:</strong> Our team tackled a significant drainage challenge, ensuring both beauty and functionality. The result was a transformed landscape that harmonized with the natural surroundings.</li>
</ul>
  <StaticImage
                                src="../../assets/blog/b16.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />

<h2 className="mt-3">Why Choose Wilson's Natural Landscaping?</h2>
<p>At Wilson's Natural Landscaping, we specialize in turning poolside dreams into reality. Our extensive experience, combined with a deep understanding of native plants and sustainable practices, ensures that every project we undertake is both beautiful and eco-friendly. Whether you're looking to create a tropical paradise or a private oasis, our team is here to help you achieve your vision.</p>

<p>Ready to transform your poolside? Contact us today and let's start your journey to a stunning, sustainable outdoor retreat.</p>


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