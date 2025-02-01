import React from "react";
import Layout from "../../components/layout";
import Blog from "../../components/blogCarousel";
import styled from "styled-components";

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

const BlogPage = () => {
    return (
        <Layout>
            <div className="container main-content">
                <div className="row">
                    <div className="col-sm-12 homeCallout">
                        <h1>Wilson&apos;s Natural Landscaping Blog</h1>
                        <p>Home Landscaping News, Tips, Ideas & Insights</p>
                    </div>
                </div>
            </div>
            <Blog />
        </Layout>
    );
};

export default BlogPage;
