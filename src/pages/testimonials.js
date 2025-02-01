import React from 'react';
import Layout from "../components/layout";
import HeroArea from "../components/hero-testimonials";
import Reviews from "../components/CustomerReviews";
import styled from "styled-components"; 


const ContentContainer = styled.div`
          padding: 2em 0;
          @media(max-width:767px){
            padding: .5em 0;
          }
        `
        const HeroText = styled.div`
      
        padding-bottom:1em;
        margin-bottom:1em;
        border-bottom:1px solid #f1f1f1;
    `;

const TestimonialsPage = () => {
     return (  
  <Layout>
 
      <HeroArea />


<Reviews/>


  </Layout>
)
}

export default TestimonialsPage;

export const Head = () => (
  <>
  <html lang="en" />
    <title>Wilson's Natural Landscaping Reviews & Customer Testimonials</title>
    <meta name="description" content="Experience exceptional landscaping services for homes and businesses in Charlotte NC. From elegant gardens to beautiful patios, we cater to your unique vision." />
  </>
)
