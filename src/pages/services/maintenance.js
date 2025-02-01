import React from 'react';
import HeroArea from "../../components/hero-maintenance";
import styled from 'styled-components';
import Layout from "../../components/layout";

const MainContentContainer = styled.div`
  h1 {
    margin-bottom: 0.25em;
  }
`


const MaintenancePage = () => (

      
  
  <Layout>

     
      <HeroArea />
      
     
   
    
<div className="container py-1 py-md-4">
<div className="row">
<MainContentContainer className="col-sm-12">  

<p className="teaserText">A Quarter Century of Horticultural Excellence</p>
<p><strong>Transplanting with Precision and Care.</strong> Understanding the delicate nature of root systems is key to successful transplantation. Our skilled team is adept at moving your trees and shrubs to their new locations without compromising their health. We ensure that each plant receives the attention and expertise it needs to thrive in its new environment.</p>

<p><strong>Safeguarding the Heart of Your Landscape.</strong> The root system is the heart of a plant's health. Our approach to horticulture management prioritizes the preservation of this vital component, ensuring that your trees and shrubs continue to flourish after transplantation. We combine our deep understanding of plant biology with state-of-the-art techniques to guarantee the best outcomes.</p>

<p><strong>Tailored Horticulture Solutions.</strong> Every landscape is unique, and so are its needs. Whether you're looking to redesign your space or enhance its current features, our team provides tailored solutions that align with your vision and the specific requirements of your plants.</p>

<p><strong>Commitment to Excellence.</strong> Our commitment to excellence in horticulture management is evident in every project we undertake. With Wilson's Natural Landscaping, LLC, you're choosing a partner dedicated to the health and beauty of your landscape. Trust us to bring our extensive experience and meticulous care to your garden, ensuring a vibrant and thriving environment for years to come.</p>
      
</MainContentContainer>
     </div>
 </div>   
    
     
     
    
  </Layout>
)

export default MaintenancePage

export const Head = () => (
  <>
  <html lang="en" />
    <title>Professional Horticulture Services & Maintenance in Charlotte NC</title>
    <meta name="description" content="Our horticulture services help cultivate and manage your lawn & garden. Our professionals take both the beauty and functionality of your outdoor spaces into consideration." />
  </>
)
