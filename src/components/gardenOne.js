import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"


export default class HomeAbout extends React.Component {
  

 
  render() {
       return (
     <div className="container mb-4">
    <div
      className="row rounded-lg m-0 overflow-hidden shadow-lg"
      style={{ background: '#fff' }}
    >
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 flex-row items-center p-8 mb-4 sidebarform cardborder`}
      >
        <div className="p-2 p-sm-2 p-md=3 p-lg-3 mt-3 mt-lg-5">
      <p><strong>Transform Your Yard into a Sustainable Paradise with Wilson's Natural Landscaping</strong></p>

<p>At Wilson's Natural Landscaping, we blend our passion for nature with over 25 years of expertise as certified plant professionals. Specializing in energy-saving landscaping methods, we are dedicated to crafting sustainable gardens that are anything but ordinary. Our approach is rooted in using ecologically correct plants and strategic placement, ensuring your landscape is not only visually stunning but also environmentally responsible.</p>

<p><strong>Experience the Beauty of Low-Maintenance, Ecological Gardens</strong></p>

<p>Discover the allure of low-maintenance gardens that play a crucial role in supporting local ecosystems. Our expert team carefully selects native plants that are ideally suited to your yard's specific conditions, creating a thriving, long-lasting garden that enhances the natural beauty of your property. These gardens are designed to be a haven for pollinators and native species, contributing positively to the environment.</p>

<p><strong>Harmonizing Functionality with Natural Aesthetics</strong></p>
<p>We believe in the harmony of functionality and aesthetics. By incorporating hardscapes, waterscapes, and artful sitting areas, we transform your yard into a dynamic and functional outdoor space. Our designs ensure that your garden is not only easy to maintain but also seamlessly integrates with the surrounding flora and fauna.</p>

<p><strong>Ready to Reconnect Your Landscape with Nature?</strong></p>

<p>Embark on a journey to bring your landscape back to its natural roots with Wilson's Natural Landscaping. To begin crafting your personalized, ecologically balanced garden, simply fill out our contact form or give us a call. Let us help you create a sustainable, breathtaking outdoor sanctuary.</p>

    </div>  
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
        <StaticImage
          src="../assets/gardens/feature-one.jpg"
          className="block w-full h-full"
        />
      </div>
    </div>
  </div>
     )
    
  }
} 
