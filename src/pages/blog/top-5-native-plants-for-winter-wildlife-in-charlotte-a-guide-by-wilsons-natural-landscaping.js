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
Top 5 Native Plants for Winter Wildlife in Charlotte: A Guide by Wilson’s Natural Landscaping
        </h1>
            <StaticImage
                                src="../../assets/blog/blogTen.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                 <p className="mt-3">As the winter breeze starts to swirl around the Charlotte Piedmont area, a question often arises among our community: ‘Which plants should we cut back in winter?’ At Wilson’s Natural Landscaping, we approach this with a philosophy deeply rooted in eco-friendly and native plant landscaping. Our answer might come as a surprise – we rarely fully cut back native plants. These native species are invaluable, offering crucial benefits throughout the year to our bees, insects, and local wildlife.</p>
<p>In this first part of our winter plant care series, let&#8217;s explore the top 5 native plants that are essential for supporting birds and animals during the Charlotte area&#8217;s winter months.</p>



<p><strong>1. American Beautyberry (Callicarpa americana)</strong> A winter spectacle, the American Beautyberry is celebrated for its vivid purple berries. These berries persist through winter, offering a crucial sustenance source for birds. Their vibrant color not only enhances the winter landscape but also provides essential nourishment to our feathered friends in the colder months.</p>



<p><strong>2. Winterberry Holly (Ilex verticillata)</strong> Renowned for its striking red berries, the Winterberry Holly stands out in the winter landscape. These berries are crucial for birds during the winter when other food sources are scarce. Its resilience in the Piedmont area&#8217;s winter conditions makes it an excellent choice for gardens focused on supporting local wildlife.</p>



<p><strong>3. Eastern Red Cedar (Juniperus virginiana)</strong> An evergreen that does more than add greenery to your winter garden, the Eastern Red Cedar provides shelter and sustenance for wildlife. Its dense foliage offers birds refuge from the cold, while its berries serve as a nutritious food source.</p>



<p><strong>4. Purple Coneflower (Echinacea purpurea)</strong> Best known for its summer blooms, the Purple Coneflower is equally vital in winter. Its seed heads become an important food source for finches and other birds post-bloom. These seed heads also contribute an architectural element to the winter garden, marrying beauty with function.</p>



<p><strong>5. Switchgrass (Panicum virgatum)</strong> More than just an ornamental grass, Switchgrass is vital for winter wildlife. Its robust stature offers shelter to small creatures, and its seeds feed birds. Its versatility makes it an essential part of a wildlife-supportive garden.</p>



<p>In the Charlotte Piedmont area, our unique ecosystem benefits significantly from the mindful selection and maintenance of native plants. By incorporating these top 5 native plants, you contribute to the beauty of your winter garden and support local wildlife.</p>



<p>Stay tuned for our upcoming posts in this series, where we will share more insights into effective winter plant care and provide essential tips for maintaining a vibrant Piedmont landscape. Join us at Wilson&#8217;s Natural Landscaping in this journey to transform your garden into a thriving haven for wildlife.</p>
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