import React from "react";
import AboutUs from "../../components/sidebar/contact";
import QuoteForm from "../../components/ContactForm";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../../components/video"
import CustomCard from "../../components/card";

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
The Vibrant Hues of North Carolina: Native Plants that Dazzle in the Fall
        </h1>
            <StaticImage
                                src="../../assets/blog/blogFifteen.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                  
<p className="mt-3">North Carolina is a state that wears every season with grace, but there&#8217;s something undeniably magical about its fall. As the air turns crisp and the days grow shorter, our landscapes transform into a canvas of rich reds, deep oranges, and brilliant yellows. But did you know that many of these vibrant hues come from native plants? Plants that not only paint our surroundings with color but also thrive in our local environment, supporting our ecosystems.</p>



<p>At Wilson&#8217;s Natural Landscaping, we&#8217;re not just landscapers; we&#8217;re stewards of nature. We understand the delicate balance between aesthetics and ecology. Today we are sharing native plants of North Carolina that offer breathtaking fall colors and why our approach is the perfect fit for those who appreciate both beauty and sustainability.</p>



<p><strong>1. Black Tupelo (Nyssa sylvatica)</strong> Known for its fiery red foliage in the fall, the Black Tupelo is a sight to behold. This tree is not only a visual treat but also serves as a crucial food source for birds with its small, blue-black fruits.</p>



<p><strong>2. Flowering Dogwood (Cornus florida)</strong> A beloved symbol of the South, the Flowering Dogwood transitions from white or pink blossoms in the spring to a medley of red and purple leaves in the fall. It&#8217;s a testament to nature&#8217;s artistry.</p>



<p><strong>3. Red Maple (Acer rubrum)</strong> The Red Maple is aptly named for its brilliant red leaves that light up our landscapes in the fall. This tree is versatile, growing in various soils and conditions, making it a favorite among North Carolinians.</p>



<p><strong>4. Sweetgum (Liquidambar styraciflua)</strong> With star-shaped leaves that turn a mix of red, orange, and purple, the Sweetgum is a fall favorite. Its spiky fruits are a unique feature, adding texture to the landscape.</p>



<p><strong>5. October Skies Aster</strong> This perennial bursts into a sea of lavender-blue flowers in the fall, attracting butterflies and adding a touch of serenity to the landscape. Its resilience and beauty make it a favorite among gardeners.</p>



<p><strong>6. Goldenrod</strong> Often mistaken for an allergen, the Goldenrod is a beacon of bright yellow in the fall. It&#8217;s a magnet for pollinators and a testament to the beauty that thrives in North Carolina&#8217;s diverse habitats.</p>



<p><strong>7. Fireworks Goldenrod</strong> Living up to its name, the Fireworks Goldenrod explodes in radiant yellow plumes that resemble fireworks in the sky. This perennial adds a touch of drama and flair to any garden.</p>



<p><strong>Why Wilson&#8217;s Natural Landscaping&#8217;s Approach Resonates with Nature Lovers</strong></p>



<p>At Wilson&#8217;s, we believe in harmony. Our philosophy is rooted in the idea that landscaping should not only be about aesthetics but also about creating sustainable, eco-friendly spaces. Here&#8217;s why our approach is a perfect match for those who cherish both the environment and beauty:</p>



<ul class="wp-block-list">
<li><strong>Sustainability First:</strong> With over 25 years in the industry, we&#8217;ve honed our skills in creating landscapes that limit the use of valuable natural resources, reduce waste, and prevent pollution. Our gardens aren&#8217;t just beautiful; they&#8217;re a step towards a greener future.</li>



<li><strong>Native Plants are Our Specialty:</strong> We understand the value of native plants. They&#8217;re perfectly suited to the local conditions, require less maintenance, and support the local ecosystem. By choosing native plants like the ones mentioned above, we ensure that your garden is both stunning and beneficial to the environment.</li>



<li><strong>Personalized Service:</strong> Every garden we craft is a reflection of the homeowner&#8217;s personality and the natural beauty of North Carolina. We listen, understand, and then create. Your garden isn&#8217;t just a project for us; it&#8217;s a canvas where we paint your vision with nature&#8217;s colors.</li>
</ul>



<p>As you find yourself mesmerized by the colors of North Carolina&#8217;s fall landscapes, remember that these hues are nature&#8217;s gift to us. And at Wilson&#8217;s Natural Landscaping, we&#8217;re committed to preserving and enhancing this gift, one garden at a time.</p>
                            
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