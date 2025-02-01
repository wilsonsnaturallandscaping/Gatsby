import React from 'react';
import AboutUs from "../components/sidebar/contact";
import QuoteForm from "../components/ContactForm";
import styled from "styled-components"; 

import CustomCard from "../components/card"
import Video from "../components/video"
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
const ContactReceive = (props) => {
  return (
    
    <Layout>
  

  
        

        <div className="container">
          <ContentContainer>
          <div className="row">
            <div className="col-md-8 col-xs-12">
           
            <CustomCard>
            <HeroText>
                 <h1>Thank You</h1>
      <p>We have sucessfully received your contact request and will return your enquiry promptly. </p>
               </HeroText>
          <div class="youtube-container">
   <Video
        videoSrcURL="https://www.youtube.com/embed/awcydy37PJw"
        videoTitle="Wilson's Natural Landscaping"
      />
  </div>
    
    </CustomCard>
              
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
export default ContactReceive

export const Head = () => (
  <>
  <html lang="en" />
    <title>Thank You - Wilson's Natural Landscaping</title>
    <meta name="description" content="Looking to transform your outdoor space? Our landscaping services in Charlotte, NC, provide individual creative solutions to beautify your property." />
  </>
)