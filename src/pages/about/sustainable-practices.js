import React from 'react';
import styled from "styled-components"; 

import CustomCard from "../../components/card"

import Layout from "../../components/layout"

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
const Sustainable = () => {
  return (
    
    <Layout>
  

  
        

        <div className="container">
          <ContentContainer>
          <div className="row">
            <div className="col-12">
           
            <CustomCard>
            <HeroText>
                 <h1>Embrace Nature's Best: The Power of Native Trees and Plants in North Carolina</h1>
    <p><strong>Enhanced Ecosystem Balance</strong></p>
<p>Native trees and plants are perfectly adapted to North Carolina's climate and soil conditions, promoting a balanced ecosystem. They support local wildlife, including pollinators like bees and butterflies, contributing to biodiversity and a healthier environment.</p>

<p><strong>Lower Maintenance and Sustainability</strong></p>
<p>Adapted to local weather patterns, native species require less water, fewer pesticides, and minimal care compared to non-native plants. This not only eases your gardening efforts but also reduces your environmental footprint, making your landscape a model of sustainability.</p>

<p><strong>Natural Beauty and Diversity Description</strong></p>
<p>North Carolina's native flora offers a stunning array of colors, textures, and shapes. By choosing native trees and plants, you're not just landscaping; you're creating a living tapestry that changes beautifully with the seasons, reflecting the unique charm of the region.</p>

<p><strong>Resilience to Local Challenges</strong></p>
<p>Native plants have evolved to thrive in North Carolina's specific conditions, making them more resilient to local pests, diseases, and weather extremes. This natural resilience ensures a robust and thriving garden, year after year, with less need for intervention.</p>
               </HeroText>
            </CustomCard>
              
            </div>
         
          </div>
          </ContentContainer>
        </div>
    </Layout>
  )
  
}   
export default Sustainable
