import React from 'react';
import HeroArea from "../../components/hero-drainage";
import styled from 'styled-components';
import Layout from "../../components/layout";
import DrainageOne from "../../components/drainageOne";
import DrainageTwo from "../../components/drainageTwo";
import DrainageThree from "../../components/drainageThree";

const MainContentContainer = styled.div`
  h1 {
    margin-bottom: 0.25em;
  }
`


const DrainagePage = () => (

      
  
  <Layout>

     
      <HeroArea />
      
     
   
    
<div className="container pt-3 pb-2 pb-md-4 pt-md-5">
<div className="row">
<div className="col-sm-12">  
 <p>As Charlotte's leading choice for innovative drainage solutions, we're dedicated to enhancing the beauty and sustainability of your outdoor space. Explore our services below, delve into our impressive client portfolio, and enrich your knowledge with our insightful blog posts. Let us show you how we turn every drainage challenge into an opportunity for aesthetic and functional excellence.</p>

</div>
 </div>
 </div>
 <DrainageOne />
 <div className="container py-1 py-md-4">
<div className="row">
<div className="col-sm-12">    
<p><strong>At Wilson’s Natural Landscaping, LLC - we’ll get our hands dirty, so you don’t have to.</strong> Our team of skilled landscape professionals will deliver quick and aesthetically pleasing results. Every property is different, and every homeowner needs a customized resolution that’s right for them and their budget. We have the skills, knowledge, and equipment to tackle your problem head on - so trust our experts to get the job done right the first time!</p>
      
</div>
     </div>
 </div> 
 <DrainageTwo />
 
  <div className="container py-1 pt-md-3 pb-md-5">
<div className="row">
<div className="col-sm-12">  
 <p><strong>Secure Your Landscape's Future.</strong> Invest in a drainage solution that protects and enhances your property. With our expertise in pipe installations and trenching, you can turn water management into an aesthetic asset. Let us help you create a landscape that is as functional as it is beautiful, ensuring a lasting, positive impact on your property.</p>
   </div>
 </div>
 </div>
 <DrainageThree />
     
     
    
  </Layout>
)

export default DrainagePage

export const Head = () => (
  <>
  <html lang="en" />
    <title>Drainage Solutions & Systems for your yard in Charlotte, NC</title>
    <meta name="description" content="Protect your landscape and avoid property damage with our expert drainage solutions for your home's yard. Book a consultation today." />
  </>
)