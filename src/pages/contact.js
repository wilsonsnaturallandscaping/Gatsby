import React from 'react';
import AboutUs from "../components/sidebar/contact";
import QuoteForm from "../components/ContactForm";
import styled from "styled-components"; 

import CustomCard from "../components/card"

import Layout from "../components/layout"

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
const Contact = (props) => {
  return (
    
    <Layout>
  

  
        

        <div className="container">
          <ContentContainer>
          <div className="row">
            <div className="col-md-8 col-xs-12">
           
            <CustomCard>
            <HeroText>
                 <h1>Contact Us</h1>
      <p>The knowledgeable team at Wilson&apos;s Natural Landscaping is here to answer all your questions and give you exceptional customer service.</p>
                 <p>If you have a problem that requires a quick response, leave the details and upload a couple of photos. We can give you an idea of what needs to be done to rectify the problem along with a price guideline. A site visit can be arranged if necessary. If your problem is urgent and requires immediate assistance, please do not hesitate to call us</p>
               </HeroText>
               <QuoteForm/></CustomCard>
              
            </div>
            <div className="col-xs-12 col-md-4">
              <AboutUs/>
           
            </div>
          </div>
          </ContentContainer>
        </div>
    </Layout>
  )
  
}   
export default Contact

export const Head = () => (
  <>
  <html lang="en" />
    <title>Contact Us - Wilson's Natural Landscaping</title>
    <meta name="description" content="Looking to transform your outdoor space? Our landscaping services in Charlotte, NC, provide individual creative solutions to beautify your property." />
  </>
)
