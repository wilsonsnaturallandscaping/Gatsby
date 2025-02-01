import React from 'react';
import HeroArea from "../../components/hero-gardens";
import styled from 'styled-components';
import Layout from "../../components/layout";
import GardenOne from "../../components/gardenOne";
import GardenTwo from "../../components/gardenTwo";
import GardenThree from "../../components/gardenThree";

const MainContentContainer = styled.div`
  h1 {
    margin-bottom: 0.25em;
  }
`


const GardensPage = () => (

      
  
   <Layout>

     
      <HeroArea />
      
     
   
    
<div className="container pt-3 pb-2 pb-md-4 pt-md-5">
<div className="row">
<div className="col-sm-12">  
 <p><strong>We pride ourselves on maximizing Mother Nature's influence in design.  Although native plants are underutilized, they are often an ideal plant choice for many sites- especially since they offer so many ecological benefits.  Whether integrating a few into your project or targeting a strictly native planting, we can bring the knowledge and the plants!</strong></p>

</div>
 </div>
 </div>
 <GardenOne />
 <div className="container py-1 py-md-4">
<div className="row">
<div className="col-sm-12">    
<p><strong>One of our many passions is the Woodland Garden. Your forest can be a usable and sustainable space for your entire family, and the areas wildlife. A site analysis will allow our team to identify how best to utilize your woodland as a living space, walkable garden, or simply a lovely planted space.</strong></p>
      
</div>
     </div>
 </div> 
 <GardenTwo />
 
  <div className="container py-1 pt-md-3 pb-md-5">
<div className="row">
<div className="col-sm-12">  
 <p><strong>At Wilson's Natural Landscaping, LLC we love the tradition of the old Southern Courtyard and Southern plants.  Our design process coupled with your vision and goals are key components in building the courtyard of your dreams.  Southern gardens and landscapes elicit images of carefully manicured Boxwoods, Cherry Blossoms, Cardinal Flowers, Lavender, Lilac, and more!  If desired, we can incorporate those hard to locate heirloom plants, that bring your ideal southern visual to life.</strong></p>
   </div>
 </div>
 </div>
 <GardenThree />
     
     
    
  </Layout>
)

export default GardensPage