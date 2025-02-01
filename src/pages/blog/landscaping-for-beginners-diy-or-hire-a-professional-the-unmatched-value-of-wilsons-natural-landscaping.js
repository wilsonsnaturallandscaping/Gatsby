import React from "react";
import AboutUs from "../../components/sidebar/contact";
import QuoteForm from "../../components/ContactForm";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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
                            <h1>
                                Landscaping for Beginners: DIY or Hire a Professional – The Unmatched Value of Wilson’s
                                Natural Landscaping
                            </h1>
                            <p>
                                In a world where DIY culture is gaining popularity, landscaping is often an area where
                                many homeowners think they can roll up their sleeves and get their hands dirty. The joy
                                of crafting your outdoor space can indeed be thrilling, but landscaping is more complex
                                than it may initially appear.
                            </p>
                            <StaticImage
                                src="../../assets/blog/blogExperts.jpg"
                                alt="Wilsons Landscaping"
                                placeholder="blurred"
                                layout="constrained"
                                style={{ width: "100%", objectFit: "cover" }}
                            />

                            <h2 className="mt-3">The Complexity of Landscaping</h2>
                            <p>
                                Landscaping isn’t just about planting trees and flowers. It encompasses site analysis,
                                design, horticulture, installation, and maintenance. For many beginners, this can be
                                overwhelming and time-consuming. When you try to take on these tasks without
                                professional experience, the outcome might not align with your vision, leaving you
                                dissatisfied and potentially requiring even more work and investment to rectify.
                            </p>

                            <p>
                                Enter Wilson’s Natural Landscaping. Our team of experienced professionals have years –
                                over 100 years combined- of expertise in landscape design and maintenance, creating
                                outdoor spaces that are not just aesthetically pleasing but also highly functional and
                                sustainable.
                            </p>

                            <h2>Time and Money: The Professional Advantage</h2>
                            <p>
                                The old adage, “time is money,” rings true in the world of landscaping. A DIY
                                landscaping project can take weeks, if not months, of hard work and significant
                                investment in tools and materials. Plus, mistakes along the way can add unexpected
                                costs.
                            </p>

                            <p>
                                At Wilson’s Natural Landscaping, our professionals are trained to work efficiently and
                                accurately. With access to industry-grade tools and techniques, we avoid rookie
                                mistakes, saving you valuable time and money. Plus, with our team’s knowledge of local
                                plant species and their optimal growth conditions, we minimize maintenance and
                                replacement costs down the line.
                            </p>

                            <h2>Environmentally Friendly Landscaping</h2>
                            <p>
                                At Wilson’s Natural Landscaping, we understand that the choices we make in our yards
                                have a direct impact on our planet. DIY enthusiasts, although well-intentioned, may
                                inadvertently cause environmental harm, such as overwatering, misuse of chemicals, or
                                planting non-native species that may disrupt local ecosystems.
                            </p>

                            <p>
                                Our team is committed to using eco-friendly practices to minimize environmental impact.
                                We not only select native and drought-resistant plants to conserve water, use organic
                                fertilizers, and implement smart irrigation systems to reduce water usage, but we also
                                source our plants and materials from local suppliers as often as we can. This strategy
                                helps reduce our carbon footprint, support local businesses, and ensure your garden is
                                populated with plants perfectly suited to thrive in your local climate.
                            </p>

                            <p>
                                Choosing to hire a professional from Wilson’s Natural Landscaping is choosing a partner
                                that values your time, budget, and the environment. With us, you can rest assured that
                                your outdoor space is in capable and caring hands.
                            </p>

                            <p>
                                Landscaping is more than a job for us; it’s a passion, and that passion translates into
                                gardens that radiate beauty and sustainability. So why not save yourself the stress and
                                uncertainty of a DIY project? Let us transform your vision into reality. You won’t just
                                get a beautiful, easy-to-maintain outdoor space – you’ll get peace of mind and the
                                satisfaction of knowing you’ve made a choice that benefits the planet. Contact us today
                                and start your journey towards a naturally beautiful and environmentally friendly
                                landscape.
                            </p>
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
