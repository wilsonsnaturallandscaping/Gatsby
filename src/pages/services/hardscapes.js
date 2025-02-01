import React from 'react';
import HeroArea from "../../components/hero-hardscapes";
import styled from 'styled-components';
import Layout from "../../components/layout";
import FeatureBlock from "../../components/hardscapeOne";

const MainContentContainer = styled.div`
  h1 {
    margin-bottom: 0.25em;
  }
`


const HardscapesPage = () => (

      
  
  <Layout>

     
      <HeroArea />
      
     
   
    
<div className="container py-1 py-md-4">
<div className="row">
<div className="col-sm-12">    
<p className="teaserText">Artistry in Stone and Design</p>

<p><strong>Architectural Grace Meets Natural Durability.</strong> In the heart of our landscape installations lies the timeless elegance of natural stone. Our walls, patios, stepping stones, and boulders are not just functional elements; they are the architectural keystones that define the character of your outdoor space. We choose natural stone for its sustainable, enduring beauty, ensuring that each feature we create is both environmentally friendly and lasting.</p>

<p><strong>Sustainable, Organic, and Durable.</strong> Natural stone stands as a testament to our commitment to sustainability and longevity. Hard and organic, these materials are crafted by nature to withstand the elements, promising a lifetime of beauty and resilience. With natural stone, we bring the enduring essence of the earth into your landscape.</p>


 </div>
 </div>
 </div>
 <FeatureBlock className="pb-5" />


   
    
     
     
    
  </Layout>
)

export default HardscapesPage