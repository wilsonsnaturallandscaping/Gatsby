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
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
           <StaticImage
          src="../assets/gardens/feature-two.jpg"
          className="block w-full h-full"
        />
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 flex-row items-center p-8 mb-4 sidebarform cardborder`}
      >
    
               <div className="p-2 p-sm-2 p-md=3 p-lg-3 mt-3 mt-lg-5">
<p><strong>Crafting Enchanting Woodland Gardens with a Touch of Nature's Magic</strong></p>
<p>At Wilson's Natural Landscaping, we specialize in designing Woodland Gardens that celebrate the beauty of the natural world. Our approach is to use the natural canvas of your space, whether it's a blank slate or an area rich with existing plants. Our commitment is to sustainability and minimizing environmental impact, ensuring every garden we create is in harmony with nature.</p>

<p><strong>Embracing the Natural Beauty of Your Space</strong></p>

<p>Our design philosophy for Woodland Gardens is rooted in the principle of working with nature, not against it. We believe in sustaining and enhancing what is already present in your space. By keeping and incorporating native plants, we create a garden that not only looks beautiful but also supports the local ecosystem. These native species are key to attracting pollinators and beautiful butterflies, adding life and vibrancy to your garden.</p>

<p><strong>Sustainable, Natural, and Breathtakingly Beautiful</strong></p>

<p>Our goal is to create Woodland Gardens that are sustainable, natural, and breathtakingly beautiful. We carefully select plants native to our region, understanding their crucial role in maintaining ecological balance. These plants ensure that your garden is not just a visual delight but also a haven for local wildlife, contributing to biodiversity and environmental health.</p>

<p><strong>Your Personal Woodland Retreat Awaits</strong></p>

<p>Let us help you transform your outdoor space into a Woodland Garden that you and future generations will cherish. Our team is dedicated to creating spaces that resonate with the natural beauty of our region, providing a tranquil retreat right in your backyard.</p>
    </div> 
      </div>
    </div>
  </div>
     )
    
  }
} 